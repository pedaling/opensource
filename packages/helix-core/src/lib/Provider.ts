import type { CommandEnvelope, EntityEnvelope, EventEnvelope, ReadModelEnvelope } from './envelopes';

export interface Provider {
  scheduledCommands: {
    enqueue: (commandName: string) => Promise<void>;
    store: (envelope: CommandEnvelope<unknown>, scheduledAt: number) => Promise<void>;
    restore: (envelope: CommandEnvelope<unknown>) => Promise<void>;
    rawToEnvelopes: (rawCommands: any) => CommandEnvelope<unknown>[];
  };
  events: {
    store: (events: EventEnvelope[]) => Promise<void>;
    rawToEnvelopes: (rawEvents: any) => EventEnvelope[];
    forEntitySince: (entityName: string, entityId: string, since: number) => Promise<EventEnvelope[]>;
  };
  entities: {
    store: (entity: EntityEnvelope) => Promise<void>;
    rawToEnvelopes: (rawEntities: any) => EntityEnvelope[];
    find: (name: string, id: string) => Promise<EntityEnvelope | null>;
  };
  readModels: {
    store: (readModel: ReadModelEnvelope, currentVersion: number) => Promise<void>;
    find: (name: string, id: string) => Promise<ReadModelEnvelope | null>;
    delete: (name: string, id: string) => Promise<void>;
  };
  logger: {
    debug: (message: string, ...args: any[]) => void;
    info: (message: string, ...args: any[]) => void;
    warn: (message: string, ...args: any[]) => void;
    error: (message: string, ...args: any[]) => void;
  };
}

let userProvider: Provider;

export function useProvider(provider: Provider): void {
  userProvider = provider;
}

export function getProvider(): Provider {
  if (userProvider) {
    return userProvider;
  }

  throw new Error('Cannot find provider. Looks like you forgot to call useProvider?');
}
