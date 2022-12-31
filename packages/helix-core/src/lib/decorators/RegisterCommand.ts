import type { Class } from '@helix-js/utils';
import type { CommandInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function RegisterCommand(): <Return, CommandType extends CommandInterface<Return>>(
  commandClass: Class<CommandType>
) => void {
  return commandClass => {
    if (getMetadataStorage().commandHandlers[commandClass.name]) {
      throw new Error(`A command called ${commandClass.name} has already been registered.`);
    }

    getMetadataStorage().commandHandlers[commandClass.name] = {
      class: commandClass,
    };
  };
}
