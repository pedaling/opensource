import { Service } from 'typedi';
import type { Class } from '@helix-js/utils';
import type { ReadModelInterface } from './concepts';
import { ReadModelStore } from './services/ReadModelStore';

@Service()
export class ReadModelsReader {
  private readonly readModelStore = new ReadModelStore();

  public async find<ReadModelType extends ReadModelInterface>(readModelClass: Class<ReadModelType>, id: string) {
    const readModel = await this.findOrNull(readModelClass, id);

    if (!readModel) {
      throw new Error(`Read model not found for ${readModelClass.name} with id ${id}`);
    }

    return readModel;
  }

  public async findOrNull<ReadModelType extends ReadModelInterface>(readModelClass: Class<ReadModelType>, id: string) {
    const snapshot = await this.readModelStore.fetchSnapshot(readModelClass.name, id);

    return snapshot ? new readModelClass(snapshot.payload) : null;
  }
}
