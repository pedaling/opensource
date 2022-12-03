import type { DecoratorFn } from '@storybook/react';
import { ToastProvider } from '@vibrant-ui/components';

export const withToastProvider: DecoratorFn = StoryComponent => (
  <ToastProvider>
    <StoryComponent />
  </ToastProvider>
);
