import type { Class } from '@helix-js/utils';
import { getMetadataStorage } from '../metadata';

export function ToVersion<OldSchema, NewSchema>(
  targetVersion: number,
  props: {
    fromSchema: Class<OldSchema>;
    toSchema: Class<NewSchema>;
  }
): (migratorClass: Class<unknown>, methodName: string) => void {
  return (migratorClass, methodName) => {
    const migrator = migratorClass.name;
    const metadata = {
      migratorClass,
      methodName,
      targetVersion,
      fromSchema: props.fromSchema,
      toSchema: props.toSchema,
    };
    const registeredMigrationMethods = getMetadataStorage().migrationMethods[migrator] ?? [];

    getMetadataStorage().migrationMethods[migrator] = [...registeredMigrationMethods, metadata];
  };
}
