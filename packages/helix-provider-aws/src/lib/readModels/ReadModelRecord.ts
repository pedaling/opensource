import { Schema, model } from 'dynamoose';
import type { Item } from 'dynamoose/dist/Item';
import type { ReadModelEnvelope } from '@helix-js/core';
import { readModelStoreConfig } from '../config';

type ReadModelItem = {
  [readModelStoreConfig.index.partitionKey]: string;
  [readModelStoreConfig.sortKey]: number;
} & ReadModelEnvelope &
  Item;

export const ReadModelSchema = new Schema(
  {
    [readModelStoreConfig.index.partitionKey]: {
      type: String,
      required: true,
      hashKey: true,
    },
    [readModelStoreConfig.sortKey]: {
      type: Number,
      required: true,
      rangeKey: true,
    },
    id: {
      type: String,
      required: true,
    },
    typeName: {
      type: String,
      required: true,
    },
    payload: {
      type: Object,
      required: true,
    },
    schemaVersion: {
      type: Number,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
  },
  {
    saveUnknown: ['payload.**'],
  }
);

export const ReadModelRecord = model<ReadModelItem>(readModelStoreConfig.table.name, ReadModelSchema, {
  throughput: 'ON_DEMAND',
  prefix: readModelStoreConfig.table.prefix,
});
