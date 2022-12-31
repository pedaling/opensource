import type { EventInterface } from './Event';
import type { Register } from './Register';

export interface EventHandlerInterface<EventType extends EventInterface = EventInterface> {
  handle: (event: EventType, register: Register) => Promise<void>;
}
