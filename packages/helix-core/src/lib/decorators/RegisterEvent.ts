import type { Class } from '@helix-js/utils';
import type { EventInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function RegisterEvent(): <EventType extends EventInterface>(eventClass: Class<EventType>) => void {
  return eventClass => {
    if (getMetadataStorage().events[eventClass.name]) {
      throw new Error(`An event called ${eventClass.name} has already been registered.`);
    }

    getMetadataStorage().events[eventClass.name] = {
      class: eventClass,
    };
  };
}
