import { groupBy } from 'lodash';
import { Service } from 'typedi';
import { Promises } from '@helix-js/utils';
import { Register } from './concepts';
import type { EventEnvelope } from './envelopes';
import { getMetadataStorage } from './metadata';
import { getProvider } from './Provider';
import { RegisterHandler } from './RegisterHandler';
import { EntityStore } from './services/EntityStore';

@Service()
export class EventDispatcher {
  private readonly provider = getProvider();
  private readonly entityStore = new EntityStore();

  public async dispatch(rawEvents: unknown) {
    this.provider.logger.debug('[EventDispatcher#dispatch] Dispatching raw events:', rawEvents);

    try {
      const envelopes = this.provider.events.rawToEnvelopes(rawEvents);
      const envelopesPerEntity = groupBy(envelopes, envelope => [envelope.entityName, envelope.entityId]);

      for (const envelopes of Object.values(envelopesPerEntity)) {
        const { entityName, entityId } = envelopes[0];

        this.provider.logger.debug(
          `[EventDispatcher#dispatch] Streaming the following events for entity ${entityName} with ID ${entityId}:`,
          envelopes
        );

        await this.applyEvents(entityName, entityId, envelopes);

        await this.dispatchToEventHandlers(envelopes);
      }
    } catch (e) {
      this.provider.logger.error('[EventDispatcher#dispatch] Error while dispatching events:', e);
    }
  }

  private async applyEvents(entityName: string, entityId: string, envelopes: EventEnvelope[]) {
    const snapshot = await this.entityStore.calculateAndStoreSnapshot(entityName, entityId, envelopes);

    if (!snapshot) {
      this.provider.logger.debug('[EventDispatcher#applyEvents] No new snapshot generated.');

      return;
    }

    this.provider.logger.debug('[EventDispatcher#applyEvents] Snapshot generated:', snapshot);
  }

  private async dispatchToEventHandlers(envelopes: EventEnvelope[]) {
    for (const eventEnvelope of envelopes) {
      const eventHandlerClasses = getMetadataStorage().eventHandlers[eventEnvelope.typeName];

      if (!eventHandlerClasses || eventHandlerClasses.length === 0) {
        this.provider.logger.debug(
          `[EventDispatcher#dispatchToEventHandlers] No event handler found for event ${eventEnvelope.typeName}. Skipping...`
        );

        continue;
      }

      await Promises.allSettledAndFulfilled(
        eventHandlerClasses.map(async eventHandlerClass => {
          const event = eventEnvelope.payload;
          const eventHandler = new eventHandlerClass();

          const register = new Register({
            requestId: eventEnvelope.requestId,
            userId: eventEnvelope.userId,
          });
          const registerHandler = new RegisterHandler();

          this.provider.logger.debug(
            '[EventDispatcher#dispatchToEventHandlers] Calling "handle" method on event handler:',
            eventHandler
          );

          await eventHandler.handle(event, register);

          await registerHandler.handle(register);
        })
      );
    }
  }
}
