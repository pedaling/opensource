import type { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '@vibrant-ui/components';

export const withGlobalStyle: DecoratorFn = StoryFn => (
  <>
    <GlobalStyle />
    <StoryFn />
  </>
);
