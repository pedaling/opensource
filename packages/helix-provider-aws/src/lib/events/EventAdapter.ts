import { Condition } from 'dynamoose';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { OptimisticConcurrencyError } from '@helix-js/core';
import type { EventEnvelope } from '@helix-js/core';
import { retryIfError } from '@helix-js/utils';
import { eventStoreConfig } from '../config';
import { EventRecord } from './EventRecord';

export function rawEventsToEnvelopes(rawEvents: any): EventEnvelope[] {
  return rawEvents.Records.map((record: any): EventEnvelope => {
    if (!record.dynamodb?.NewImage) {
      throw new Error('Received a DynamoDB stream event without "NewImage" field.');
    }

    return unmarshall(record.dynamodb.NewImage) as EventEnvelope;
  });
}

export async function findEventsForEntitySince(entityName: string, entityId: string, since: number) {
  return EventRecord.query(eventStoreConfig.index.partitionKey)
    .eq(eventStoreConfig.index.of({ entityName, entityId }))
    .where(eventStoreConfig.sortKey)
    .gt(since)
    .exec();
}

export async function storeEvents(envelopes: EventEnvelope[]) {
  for (const envelope of envelopes) {
    await retryIfError(() => persistEvent(envelope), OptimisticConcurrencyError);
  }
}

async function persistEvent(envelope: EventEnvelope) {
  try {
    const sortKey = new Date().valueOf();

    await EventRecord.create(
      {
        ...envelope,
        [eventStoreConfig.index.partitionKey]: eventStoreConfig.index.of(envelope),
        [eventStoreConfig.indexByTypeName.partitionKey]: eventStoreConfig.indexByTypeName.of(envelope),
        [eventStoreConfig.indexByEntityName.partitionKey]: eventStoreConfig.indexByEntityName.of(envelope),
        [eventStoreConfig.sortKey]: sortKey,
      },
      {
        condition: new Condition().attribute(eventStoreConfig.index.partitionKey).not().exists(),
      }
    );
  } catch (e) {
    const error = e as Error;

    if (error.name === 'ConditionalCheckFailedException') {
      throw new OptimisticConcurrencyError(error.message);
    }

    throw e;
  }
}
