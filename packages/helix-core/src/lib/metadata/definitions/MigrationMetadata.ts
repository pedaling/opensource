import type { AnyClass } from '@helix-js/utils';

export interface MigrationMetadata {
  migratorClass: AnyClass;
  methodName: string;
  targetVersion: number;
  fromSchema: AnyClass;
  toSchema: AnyClass;
}
