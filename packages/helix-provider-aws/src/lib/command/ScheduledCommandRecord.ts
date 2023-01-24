import { Schema, model } from 'dynamoose';
import type { Item } from 'dynamoose/dist/Item';
import type { CommandEnvelope } from '@helix-js/core';
import { scheduledCommandStoreConfig } from '../config';

export type ScheduledCommandItem = {
  [scheduledCommandStoreConfig.index.partitionKey]: string;
  [scheduledCommandStoreConfig.indexByTypeName.partitionKey]: string;
  [scheduledCommandStoreConfig.sortKey]: number;
} & CommandEnvelope<unknown> &
  Item;

export const ScheduledCommandSchema = new Schema(
  {
    [scheduledCommandStoreConfig.index.partitionKey]: {
      type: String,
      required: true,
      hashKey: true,
    },
    [scheduledCommandStoreConfig.sortKey]: {
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
      index: {
        name: scheduledCommandStoreConfig.indexByTypeName.name,
        rangeKey: scheduledCommandStoreConfig.sortKey,
        throughput: 'ON_DEMAND',
      },
    },
    payload: {
      type: Object,
      required: true,
    },
    schemaVersion: {
      type: Number,
      required: true,
    },
    requestId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: false,
    },
  },
  {
    saveUnknown: ['payload.**'],
  }
);

export const ScheduledCommandRecord = model<ScheduledCommandItem>(
  scheduledCommandStoreConfig.table.name,
  ScheduledCommandSchema,
  {
    throughput: 'ON_DEMAND',
    prefix: scheduledCommandStoreConfig.table.prefix,
  }
);
