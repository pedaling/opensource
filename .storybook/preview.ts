import { withPerformance } from 'storybook-addon-performance';
import type { DecoratorFn, Parameters } from '@storybook/react';

export const parameters: Parameters = {
  layout: 'fullscreen',
};

export const decorators: DecoratorFn[] = [withPerformance];
