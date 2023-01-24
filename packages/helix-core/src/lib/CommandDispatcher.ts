import { Service } from 'typedi';
import type { CommandInterface } from './concepts';
import { Register } from './concepts';
import type { CommandEnvelope } from './envelopes';
import { getMetadataStorage } from './metadata';
import { getProvider } from './Provider';
import { RegisterHandler } from './RegisterHandler';

@Service()
export class CommandDispatcher {
  private readonly provider = getProvider();

  public async dispatch<ReturnType>(commandEnvelope: CommandEnvelope<ReturnType>): Promise<ReturnType>;
  public async dispatch<ReturnType>(
    commandEnvelope: CommandEnvelope<ReturnType>,
    options: { scheduledAt: Date }
  ): Promise<void>;
  public async dispatch<ReturnType>(commandEnvelope: CommandEnvelope<ReturnType>, options?: { scheduledAt: Date }) {
    this.provider.logger.debug('[CommandDispatcher#dispatch] Dispatching command envelope:', commandEnvelope);

    const commandName = commandEnvelope.typeName;

    const commandMetadata = getMetadataStorage().commandHandlers[commandName];

    if (!commandMetadata) {
      throw new Error(`Could not find command handler for ${commandName}`);
    }

    if (options?.scheduledAt) {
      await this.provider.scheduledCommands.store(commandEnvelope, options.scheduledAt.valueOf());

      this.provider.logger.debug(`[CommandDispatcher#dispatch] Scheduled command ${commandName}`);

      return;
    }

    const command = new commandMetadata.class(commandEnvelope.payload) as CommandInterface<ReturnType>;
    const register = new Register({
      requestId: commandEnvelope.requestId,
      userId: commandEnvelope.userId,
    });
    const registerHandler = new RegisterHandler();

    this.provider.logger.debug('[CommandDispatcher#dispatch] Calling "handle" method on command:', command);

    const result = await command.handle(register);

    await registerHandler.handle(register);

    return result;
  }

  public async enqueueScheduledCommands() {
    const commandNames = Object.keys(getMetadataStorage().commandHandlers);

    for (const commandName of commandNames) {
      this.provider.logger.debug(
        '[CommandDispatcher#enqueueScheduledCommands] Enqueuing scheduled command:',
        commandName
      );

      await this.provider.scheduledCommands.enqueue(commandName);
    }
  }

  public async executeScheduledCommands(rawCommands: unknown) {
    this.provider.logger.debug('[CommandDispatcher#executeScheduledCommands] Executing raw commands:', rawCommands);

    const envelopes = this.provider.scheduledCommands.rawToEnvelopes(rawCommands);

    for (const envelope of envelopes) {
      try {
        await this.dispatch(envelope);
      } catch (e) {
        this.provider.logger.error(
          `[CommandDispatcher#executeScheduledCommands] Error while executing commands: ${e}, restoring..`
        );

        await this.provider.scheduledCommands.restore(envelope);
      }
    }
  }
}
