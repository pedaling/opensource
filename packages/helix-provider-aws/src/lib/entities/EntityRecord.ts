import { Schema, model } from 'dynamoose';
import type { Item } from 'dynamoose/dist/Item';
import type { EntityEnvelope } from '@helix-js/core';
import { entityStoreConfig } from '../config';

type EntityItem = {
  [entityStoreConfig.index.partitionKey]: string;
  [entityStoreConfig.indexByTypeName.partitionKey]: string;
  [entityStoreConfig.sortKey]: number;
} & EntityEnvelope &
  Item;

export const EntitySchema = new Schema(
  {
    [entityStoreConfig.index.partitionKey]: {
      type: String,
      required: true,
      hashKey: true,
    },
    [entityStoreConfig.sortKey]: {
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
        name: entityStoreConfig.indexByTypeName.name,
        rangeKey: entityStoreConfig.sortKey,
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
    deletedAt: {
      type: Number,
      required: true,
    },
  },
  {
    saveUnknown: ['payload.**'],
  }
);

export const EntityRecord = model<EntityItem>(entityStoreConfig.table.name, EntitySchema, {
  throughput: 'ON_DEMAND',
  prefix: entityStoreConfig.table.prefix,
});
