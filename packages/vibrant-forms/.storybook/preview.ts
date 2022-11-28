import type { GlobalTypes } from '@storybook/csf';
import type { DecoratorFn, Parameters } from '@storybook/react';
import {
  decorators as rootDecorators,
  globalTypes as rootGlobalTypes,
  parameters as rootParameters,
} from '../../../.storybook/preview';
import { withForm } from './withForm';

export const parameters: Parameters = {
  ...rootParameters,
};
export const globalTypes: GlobalTypes = {
  ...rootGlobalTypes,
};

export const decorators: DecoratorFn[] = [...rootDecorators, withForm];
