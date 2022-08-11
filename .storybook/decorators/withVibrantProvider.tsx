import * as ReactSpring from '@react-spring/web';
import type { DecoratorFn } from '@storybook/react';
import { VibrantProvider } from '@vibrant-ui/core';

export const withVibrantProvider: DecoratorFn = storyFn => (
  <VibrantProvider
    dependencies={{
      reactSpringModule: ReactSpring,
    }}
  >
    {storyFn()}
  </VibrantProvider>
);
