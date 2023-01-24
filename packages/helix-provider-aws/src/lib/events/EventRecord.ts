import { Schema, model } from 'dynamoose';
import type { Item } from 'dynamoose/dist/Item';
import type { EventEnvelope } from '@helix-js/core';
import { eventStoreConfig } from '../config';

type EventItem = {
  [eventStoreConfig.index.partitionKey]: string;
  [eventStoreConfig.indexByTypeName.partitionKey]: string;
  [eventStoreConfig.indexByEntityName.partitionKey]: string;
  [eventStoreConfig.sortKey]: number;
} & EventEnvelope &
  Item;

export const EventSchema = new Schema(
  {
    [eventStoreConfig.index.partitionKey]: {
      type: String,
      required: true,
      hashKey: true,
    },
    [eventStoreConfig.sortKey]: {
      type: Number,
      required: true,
      rangeKey: true,
    },
    typeName: {
      type: String,
      required: true,
      index: {
        name: eventStoreConfig.indexByTypeName.name,
        rangeKey: eventStoreConfig.sortKey,
        throughput: 'ON_DEMAND',
      },
    },
    payload: {
      type: Object,
      required: true,
    },
    entityId: {
      type: String,
      required: true,
    },
    entityName: {
      type: String,
      required: true,
      index: {
        name: eventStoreConfig.indexByEntityName.name,
        rangeKey: eventStoreConfig.sortKey,
        throughput: 'ON_DEMAND',
      },
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

export const EventRecord = model<EventItem>(eventStoreConfig.table.name, EventSchema, {
  throughput: 'ON_DEMAND',
  prefix: eventStoreConfig.table.prefix,
});
