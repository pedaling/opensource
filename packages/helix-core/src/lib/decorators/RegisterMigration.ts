import type { AnyClass } from '@helix-js/utils';
import { getMetadataStorage } from '../metadata';

export function RegisterMigration(conceptClass: AnyClass) {
  return (migratorClass: AnyClass) => {
    const concept = conceptClass.name;
    const migrator = migratorClass.name;

    const conceptMigrations = getConceptMigrations(concept);
    const migrationMethods = getMigrationMethods(migrator);

    for (const metadata of migrationMethods) {
      if (conceptMigrations.has(metadata.targetVersion)) {
        throw new Error(`Migration already registered for ${concept} to version ${metadata.targetVersion}`);
      }

      conceptMigrations.set(metadata.targetVersion, metadata);
    }
  };
}

function getConceptMigrations(concept: string) {
  if (!getMetadataStorage().migrations[concept]) {
    getMetadataStorage().migrations[concept] = new Map();
  }

  return getMetadataStorage().migrations[concept];
}

function getMigrationMethods(migrator: string) {
  const migrationMethods = getMetadataStorage().migrationMethods[migrator];

  if (!migrationMethods || migrationMethods.length === 0) {
    throw new Error(`No migration methods registered for ${migrator}`);
  }

  return migrationMethods;
}
