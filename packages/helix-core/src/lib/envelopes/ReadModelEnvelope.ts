import type { ReadModelInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export class ReadModelEnvelope<ReadModelType extends ReadModelInterface = ReadModelInterface> {
  public readonly id: string;
  public readonly typeName: string;
  public readonly instance: ReadModelType;
  public readonly schemaVersion: number;

  public readonly version: number;

  public constructor(readModel: ReadModelType, context: { version: number }) {
    this.id = readModel.getId();

    this.typeName = readModel.constructor.name;

    this.instance = { ...readModel };

    this.schemaVersion = getMetadataStorage().currentVersionFor(this.typeName);

    this.version = context.version;
  }
}
