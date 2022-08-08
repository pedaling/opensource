import './initializeEnv';
import type { GlobalTypes } from '@storybook/csf';
import { DeviceDecorator } from '@storybook/native-addon';
import type { DecoratorFn, Parameters } from '@storybook/react';
import { withAppetize } from './decorators/withAppetize';
import { withGlobalStyle } from './decorators/withGlobalStyle';
import { withTheme } from './decorators/withTheme';

export const parameters: Parameters = {
  layout: 'fullscreen',
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
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
  platform: {
    name: 'App',
    description: 'View Native',
    defaultValue: 'off',
    toolbar: {
      icon: 'mobile',
      items: ['off', 'android', 'ios'],
      showName: true,
    },
  },
};

export const decorators: DecoratorFn[] = [withGlobalStyle, withTheme, withAppetize, DeviceDecorator];
