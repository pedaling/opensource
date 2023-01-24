import * as assert from 'assert';
import type { CommandEnvelope, EntityEnvelope, EventEnvelope, ReadModelEnvelope } from '@helix-js/core';

assert(process.env['APP_NAME'], 'App name not provided');

assert(process.env['APP_ENV'], 'App env not provided');

assert(process.env['SCHEDULED_COMMANDS_TOPIC_ARN'], 'Scheduled command topic arn not provided');

export const { APP_NAME, APP_ENV, SCHEDULED_COMMANDS_TOPIC_ARN } = process.env;

export const scheduledCommandStoreConfig = {
  table: {
    prefix: `${APP_NAME}-${APP_ENV}-`,
    name: 'scheduled-commands',
  },
  index: {
    partitionKey: 'typeName#id',
    of: (envelope: Pick<CommandEnvelope<unknown>, 'id' | 'typeName'>) => `${envelope.typeName}#${envelope.id}`,
  },
  indexByTypeName: {
    partitionKey: 'typeName',
    name: 'typeNameIndex',
    of: (envelope: Pick<CommandEnvelope<unknown>, 'typeName'>) => envelope.typeName,
  },
  sortKey: 'scheduledAt',
  topicArn: SCHEDULED_COMMANDS_TOPIC_ARN,
} as const;

export const eventStoreConfig = {
  table: {
    prefix: `${APP_NAME}-${APP_ENV}-`,
    name: 'events',
  },
  index: {
    partitionKey: 'entityName#entityId',
    of: (envelope: Pick<EventEnvelope, 'entityId' | 'entityName'>) => `${envelope.entityName}#${envelope.entityId}`,
  },
  indexByTypeName: {
    partitionKey: 'typeName',
    name: 'typeNameIndex',
    of: (envelope: Pick<EventEnvelope, 'typeName'>) => envelope.typeName,
  },
  indexByEntityName: {
    partitionKey: 'entityName',
    name: 'entityNameIndex',
    of: (envelope: Pick<EventEnvelope, 'entityName'>) => envelope.entityName,
  },
  sortKey: 'createdAt',
} as const;

export const entityStoreConfig = {
  table: {
    prefix: `${APP_NAME}-${APP_ENV}-`,
    name: 'entities',
  },
  index: {
    partitionKey: 'typeName#id',
    of: (envelope: Pick<EntityEnvelope, 'id' | 'typeName'>) => `${envelope.typeName}#${envelope.id}`,
  },
  indexByTypeName: {
    partitionKey: 'typeName',
    name: 'typeNameIndex',
    of: (envelope: Pick<EntityEnvelope, 'typeName'>) => envelope.typeName,
  },
  sortKey: 'appliedEventCreatedAt',
} as const;

export const readModelStoreConfig = {
  table: {
    prefix: `${APP_NAME}-${APP_ENV}-`,
    name: 'read-models',
  },
  index: {
    partitionKey: 'typeName#id',
    of: (envelope: Pick<ReadModelEnvelope, 'id' | 'typeName'>) => `${envelope.typeName}#${envelope.id}`,
  },
  sortKey: 'sequenceBy',
} as const;
