import { Condition } from 'dynamoose';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { OptimisticConcurrencyError } from '@helix-js/core';
import type { EntityEnvelope } from '@helix-js/core';
import { retryIfError } from '@helix-js/utils';
import { entityStoreConfig } from '../config';
import { EntityRecord } from './EntityRecord';

export function rawEntitiesToEnvelopes(rawEntities: any): EntityEnvelope[] {
  return rawEntities.Records.map((record: any): EntityEnvelope => {
    if (!record.dynamodb?.NewImage) {
      throw new Error('Received a DynamoDB stream event without "NewImage" field.');
    }

    return unmarshall(record.dynamodb.NewImage) as EntityEnvelope;
  });
}

export async function findSnapshot(typeName: string, id: string) {
  const result = await EntityRecord.query(entityStoreConfig.index.partitionKey)
    .eq(entityStoreConfig.index.of({ typeName, id }))
    .sort('descending')
    .limit(1)
    .exec();

  return result[0];
}

export async function storeSnapshot(envelope: EntityEnvelope) {
  await retryIfError(() => persistSnapshot(envelope), OptimisticConcurrencyError);
}

async function persistSnapshot(envelope: EntityEnvelope) {
  try {
    const sortKey = envelope.appliedEventCreatedAt;

    await EntityRecord.create(
      {
        ...envelope,
        [entityStoreConfig.index.partitionKey]: entityStoreConfig.index.of(envelope),
        [entityStoreConfig.indexByTypeName.partitionKey]: entityStoreConfig.indexByTypeName.of(envelope),
        [entityStoreConfig.sortKey]: sortKey,
      },
      {
        condition: new Condition().attribute(entityStoreConfig.index.partitionKey).not().exists(),
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
