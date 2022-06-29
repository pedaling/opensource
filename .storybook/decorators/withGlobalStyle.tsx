import type { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '@class101/design-system-components';

export const withGlobalStyle: DecoratorFn = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
