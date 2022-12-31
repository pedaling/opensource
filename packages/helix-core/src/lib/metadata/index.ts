import { MetadataStorage } from './MetadataStorage';

let eventSourcingMetadataStorage: MetadataStorage;

export function getMetadataStorage(): MetadataStorage {
  if (!eventSourcingMetadataStorage) {
    eventSourcingMetadataStorage = new MetadataStorage();
  }

  return eventSourcingMetadataStorage;
}
