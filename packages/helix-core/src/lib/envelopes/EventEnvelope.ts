import type { EventInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export class EventEnvelope<EventType extends EventInterface = EventInterface> {
  public readonly entityId: string;
  public readonly entityName: string;
  public readonly typeName: string;
  public readonly payload: EventType;
  public readonly schemaVersion: number;

  public readonly requestId: string;
  public readonly userId?: string;
  public readonly createdAt: number;

  public constructor(
    event: EventType,
    context: {
      requestId: string;
      userId?: string;
    }
  ) {
    this.typeName = event.constructor.name;

    this.payload = { ...event };

    this.entityId = event.entityId;

    this.entityName = getMetadataStorage().reducers[this.typeName].class.name;

    this.schemaVersion = getMetadataStorage().currentVersionFor(this.typeName);

    this.requestId = context.requestId;

    this.userId = context.userId;

    // This will be overridden by the provider.
    this.createdAt = new Date().valueOf();
  }
}
