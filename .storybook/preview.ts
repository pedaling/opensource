import './initializeEnv';
import type { GlobalTypes } from '@storybook/csf';
import { DeviceDecorator } from '@storybook/native-addon';
import type { DecoratorFn, Parameters } from '@storybook/react';
import { withAppetize } from './decorators/withAppetize';
import { withGlobalStyle } from './decorators/withGlobalStyle';
import { withTheme } from './decorators/withTheme';
import { withVibrantProvider } from './decorators/withVibrantProvider';
import { withToastProvider } from './decorators/withToastProvider';
import { withPageScroll } from './decorators/withPageScroll'

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
    defaultValue: 'web',
    toolbar: {
      icon: 'mobile',
      items: [{ value: 'web', title: 'web only' }, 'android', 'ios'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators: DecoratorFn[] = [
  withVibrantProvider,
  withGlobalStyle,
  withTheme,
  withToastProvider,
  withAppetize,
  withPageScroll,
  DeviceDecorator,
];
