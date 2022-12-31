import { v4 as uuid } from 'uuid';
import type { CommandInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export class CommandEnvelope<ReturnType> {
  public readonly id: string;
  public readonly typeName: string;
  public readonly instance: CommandInterface<ReturnType>;
  public readonly schemaVersion: number;

  public readonly requestId: string;
  public readonly userId?: string;

  public constructor(
    command: CommandInterface<ReturnType>,
    context: {
      requestId: string;
      userId?: string;
    }
  ) {
    this.id = command.getId?.() ?? uuid();

    this.typeName = command.constructor.name;

    this.instance = { ...command };

    this.schemaVersion = getMetadataStorage().currentVersionFor(this.typeName);

    this.requestId = context.requestId;

    this.userId = context.userId;
  }
}
