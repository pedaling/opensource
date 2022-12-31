import type { EventInterface } from './Event';

export class Register {
  public readonly requestId: string;
  public readonly userId?: string;
  public readonly eventList: EventInterface[] = [];

  public constructor(args: { requestId: string; userId?: string }) {
    this.requestId = args.requestId;

    this.userId = args.userId;

    this.eventList = [];
  }

  public events(...items: EventInterface[]): Register {
    this.eventList.push(...items);

    return this;
  }
}
