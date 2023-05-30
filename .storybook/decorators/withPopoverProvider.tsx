import type { DecoratorFn } from '@storybook/react';
import { PopoverProvider } from '@vibrant-ui/core';

export const withPopoverProvider: DecoratorFn = StoryComponent => (
  <PopoverProvider>
    <StoryComponent />
  </PopoverProvider>
);
