import type { EventInterface, Register } from './concepts';
import { EventEnvelope } from './envelopes';
import { getMetadataStorage } from './metadata';
import { getProvider } from './Provider';

export class RegisterHandler {
  private readonly provider = getProvider();

  public async handle(register: Register) {
    if (register.eventList.length === 0) {
      return;
    }

    const events = register.eventList.map(event => this.wrapEvent(event, register));

    this.provider.logger.debug('[RegisterHandler#handle] Store events:', events);

    return this.provider.events.store(events);
  }

  private wrapEvent(event: EventInterface, register: Register) {
    const eventName = event.constructor.name;
    const reducer = getMetadataStorage().reducers[eventName];
    const entityName = reducer?.class.name;

    if (!entityName) {
      throw new Error(`Could not find entity for event ${eventName}`);
    }

    if (!event.entityId) {
      throw new Error(`Event ${event.constructor.name} does not have an entityId`);
    }

    return new EventEnvelope(event, {
      requestId: register.requestId,
      userId: register.userId,
    });
  }
}
