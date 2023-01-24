/* eslint-disable no-console */
import { setupProvider } from '@helix-js/core';
import {
  enqueueScheduledCommands,
  rawCommandsToEnvelopes,
  restoreScheduledCommand,
  storeScheduledCommand,
} from './lib/command/ScheduledCommandAdapter';
import { findSnapshot, rawEntitiesToEnvelopes, storeSnapshot } from './lib/entities/EntityAdapter';
import { findEventsForEntitySince, rawEventsToEnvelopes, storeEvents } from './lib/events/EventAdapter';
import { deleteReadModel, findReadModel, storeReadModel } from './lib/readModels/ReadModelAdapter';

setupProvider({
  scheduledCommands: {
    enqueue: enqueueScheduledCommands,
    store: storeScheduledCommand,
    restore: restoreScheduledCommand,
    rawToEnvelopes: rawCommandsToEnvelopes,
  },
  events: {
    store: storeEvents,
    rawToEnvelopes: rawEventsToEnvelopes,
    forEntitySince: findEventsForEntitySince,
  },
  entities: {
    store: storeSnapshot,
    rawToEnvelopes: rawEntitiesToEnvelopes,
    find: findSnapshot,
  },
  readModels: {
    store: storeReadModel,
    find: findReadModel,
    delete: deleteReadModel,
  },
  logger: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
  },
});
