import type { DecoratorFn, Parameters } from '@storybook/react';
import { parameters as rootParameters, decorators as rootDecorators } from '../../../.storybook/preview';
import { withTheme } from './decorators/withTheme';

export const parameters: Parameters = {
  ...rootParameters,
};

export const decorators: DecoratorFn[] = [...rootDecorators, withTheme];
