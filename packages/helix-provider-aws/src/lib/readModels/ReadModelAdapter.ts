import { Condition } from 'dynamoose/dist/Condition';
import type { ReadModelEnvelope } from '@helix-js/core';
import { OptimisticConcurrencyError } from '@helix-js/core';
import { readModelStoreConfig } from '../config';
import { ReadModelRecord } from './ReadModelRecord';

export async function findReadModel(typeName: string, id: string) {
  const results = await ReadModelRecord.query(readModelStoreConfig.index.partitionKey)
    .eq(readModelStoreConfig.index.of({ typeName, id }))
    .sort('descending')
    .limit(1)
    .exec();

  return results[0];
}

export async function deleteReadModel(typeName: string, id: string) {
  await ReadModelRecord.delete({
    [readModelStoreConfig.index.partitionKey]: readModelStoreConfig.index.of({ typeName, id }),
    [readModelStoreConfig.sortKey]: 0,
  });
}

export async function storeReadModel(envelope: ReadModelEnvelope, expectedCurrentVersion: number) {
  try {
    await ReadModelRecord.create(
      {
        ...envelope,
        [readModelStoreConfig.index.partitionKey]: readModelStoreConfig.index.of(envelope),
        [readModelStoreConfig.sortKey]: 0,
      },
      {
        condition: new Condition().attribute('version').not().exists().or().where('version').eq(expectedCurrentVersion),
        overwrite: true,
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
