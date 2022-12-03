import type { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '@vibrant-ui/components';

export const withGlobalStyle: DecoratorFn = StoryComponent => (
  <>
    <GlobalStyle />
    <StoryComponent />
  </>
);
