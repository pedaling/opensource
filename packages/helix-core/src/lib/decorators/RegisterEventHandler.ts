import type { Class } from '@helix-js/utils';
import type { EventHandlerInterface, EventInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function RegisterEventHandler<EventType extends EventInterface>(
  eventOrName: Class<EventType> | string
): <EventHandlerType extends EventHandlerInterface<EventType>>(eventHandlerClass: Class<EventHandlerType>) => void {
  return eventHandlerClass => {
    const eventName = typeof eventOrName === 'string' ? eventOrName : eventOrName.name;
    const registeredEventHandlers = getMetadataStorage().eventHandlers[eventName] ?? [];

    getMetadataStorage().eventHandlers[eventName] = [
      ...registeredEventHandlers.filter(handler => handler !== eventHandlerClass),
      eventHandlerClass,
    ];
  };
}
