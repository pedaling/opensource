import type { Class } from '@helix-js/utils';
import type { EntityInterface, EventHandlerInterface } from '../concepts';
import type {
  CommandMetadata,
  EntityMetadata,
  EventMetadata,
  MigrationMetadata,
  ProjectionMetadata,
  ReadModelMetadata,
  ReducerMetadata,
} from './definitions';

type CommandName = string;
type EntityName = string;
type EventName = string;
type ReadModelName = string;
type MigratorName = string;
type Version = number;
type ConceptName = string;

export class MetadataStorage {
  public readonly commandHandlers: Record<CommandName, CommandMetadata> = {};
  public readonly entities: Record<EntityName, EntityMetadata> = {};
  public readonly reducers: Record<EventName, ReducerMetadata> = {};
  public readonly events: Record<EventName, EventMetadata> = {};
  public readonly eventHandlers: Record<EventName, Class<EventHandlerInterface<any>>[]> = {};
  public readonly readModels: Record<ReadModelName, ReadModelMetadata> = {};
  public readonly projections: Record<EntityName, ProjectionMetadata<EntityInterface>[]> = {};
  public readonly migrationMethods: Record<MigratorName, MigrationMetadata[]> = {};
  public readonly migrations: Record<ConceptName, Map<Version, MigrationMetadata>> = {};

  public currentVersionFor(conceptName: string): number {
    const migrations = this.migrations[conceptName];

    if (!migrations) {
      return 1;
    }

    return Math.max(...migrations.keys());
  }
}
