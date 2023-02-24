import { action as storybookAction } from '@storybook/addon-actions';

export const action = (message: string) => storybookAction(message);
