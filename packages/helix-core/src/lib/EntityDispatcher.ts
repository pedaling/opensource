import { Service } from 'typedi';
import { getProvider } from './Provider';
import { ReadModelStore } from './services/ReadModelStore';

@Service()
export class EntityDispatcher {
  private readonly provider = getProvider();
  private readonly readModelStore = new ReadModelStore();

  public async dispatch(rawEntities: unknown) {
    this.provider.logger.debug('[EntityDispatcher#dispatch] Dispatching raw entities:', rawEntities);

    try {
      const envelopes = this.provider.entities.rawToEnvelopes(rawEntities);

      for (const envelope of envelopes) {
        this.provider.logger.debug(
          '[EventDispatcher#applyEvents] Starting read models projection with entity:',
          envelope
        );

        await this.readModelStore.projectAndStoreSnapshot(envelope);
      }
    } catch (e) {
      this.provider.logger.error('[EntityDispatcher#dispatch] Error while dispatching entities:', e);
    }
  }
}
