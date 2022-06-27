import type { DecoratorFn, Parameters } from '@storybook/react';
import { parameters as rootParameters, decorators as rootDecorators } from '../../../.storybook/preview';

export const parameters: Parameters = {
  ...rootParameters,
};

export const decorators: DecoratorFn[] = [...rootDecorators];
