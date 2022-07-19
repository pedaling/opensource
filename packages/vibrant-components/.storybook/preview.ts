import type { GlobalTypes } from '@storybook/csf';
import type { DecoratorFn, Parameters } from '@storybook/react';
import {
  parameters as rootParameters,
  globalTypes as rootGlobalTypes,
  decorators as rootDecorators,
} from '../../../.storybook/preview';

export const parameters: Parameters = {
  ...rootParameters,
};
export const globalTypes: GlobalTypes = {
  ...rootGlobalTypes,
};

export const decorators: DecoratorFn[] = [...rootDecorators];
