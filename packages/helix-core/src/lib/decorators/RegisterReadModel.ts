import type { Class } from '@helix-js/utils';
import type { ReadModelInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function RegisterReadModel(): (readModelClass: Class<ReadModelInterface>) => void {
  return readModelClass => {
    if (getMetadataStorage().readModels[readModelClass.name]) {
      throw new Error(`A read model called ${readModelClass.name} has already been registered.`);
    }

    getMetadataStorage().readModels[readModelClass.name] = {
      class: readModelClass,
    };
  };
}
