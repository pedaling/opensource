import { withPerformance } from 'storybook-addon-performance';
import type { GlobalTypes } from '@storybook/csf';
import type { DecoratorFn, Parameters } from '@storybook/react';
import { withGlobalStyle } from './decorators/withGlobalStyle';
import { withTheme } from './decorators/withTheme';

export const parameters: Parameters = {
  layout: 'fullscreen',
  controls: {
    sort: 'requiredFirst',
    expanded: true,
  },
};

export const globalTypes: GlobalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      title: 'Theme',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
};

export const decorators: DecoratorFn[] = [withPerformance, withGlobalStyle, withTheme];
