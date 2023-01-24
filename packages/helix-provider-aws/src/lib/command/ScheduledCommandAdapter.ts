import * as AwsXray from 'aws-xray-sdk-core';
import { SNS } from '@aws-sdk/client-sns';
import type { CommandEnvelope } from '@helix-js/core';
import { scheduledCommandStoreConfig } from '../config';
import { ScheduledCommandRecord } from './ScheduledCommandRecord';

export function rawCommandsToEnvelopes(rawCommands: any): CommandEnvelope<unknown>[] {
  return rawCommands.Records.map((record: any) => JSON.parse(record.Sns.Message));
}

export async function enqueueScheduledCommands(commandName: string) {
  const now = Date.now();
  const snsClient = AwsXray.captureAWSv3Client(new SNS({ apiVersion: '2010-03-31' }));

  const commands = await ScheduledCommandRecord.query()
    .using(scheduledCommandStoreConfig.indexByTypeName.name)
    .where(scheduledCommandStoreConfig.indexByTypeName.partitionKey)
    .eq(commandName)
    .where(scheduledCommandStoreConfig.sortKey)
    .lt(now)
    .exec();

  for (const command of commands) {
    await ScheduledCommandRecord.delete({
      [scheduledCommandStoreConfig.index.partitionKey]: scheduledCommandStoreConfig.index.of(command),
      [scheduledCommandStoreConfig.sortKey]: command.scheduledAt,
    });

    await snsClient.publish({
      Message: JSON.stringify(command),
      TopicArn: scheduledCommandStoreConfig.topicArn,
    });
  }
}

export async function restoreScheduledCommand(envelope: CommandEnvelope<unknown>) {
  return storeScheduledCommand(envelope, Date.now());
}

export async function storeScheduledCommand(envelope: CommandEnvelope<unknown>, scheduledAt: number) {
  await ScheduledCommandRecord.create(
    {
      ...envelope,
      [scheduledCommandStoreConfig.index.partitionKey]: scheduledCommandStoreConfig.index.of(envelope),
      [scheduledCommandStoreConfig.indexByTypeName.partitionKey]:
        scheduledCommandStoreConfig.indexByTypeName.of(envelope),
      [scheduledCommandStoreConfig.sortKey]: scheduledAt,
    },
    {
      overwrite: true,
    }
  );
}
