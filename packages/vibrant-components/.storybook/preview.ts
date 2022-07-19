import type { GlobalTypes } from '@storybook/csf';
import type { DecoratorFn, Parameters } from '@storybook/react';
import { systemPropNames } from '@vibrant-ui/core';
import {
  parameters as rootParameters,
  globalTypes as rootGlobalTypes,
  decorators as rootDecorators,
} from '../../../.storybook/preview';

export const parameters: Parameters = {
  ...rootParameters,
  controls: {
    exclude: systemPropNames,
  },
};
export const globalTypes: GlobalTypes = {
  ...rootGlobalTypes,
};

export const decorators: DecoratorFn[] = [...rootDecorators];
