import type { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../../src/lib/ThemeProvider';

export const withTheme: DecoratorFn = storyFn => (
  <ThemeProvider
    theme={{
      breakpoints: ['640px', '1024px', '1312px'],
      colors: {
        primary: '#FF5B14',
        onPrimary: '#FFFFFF',
        informative: '#00A0FF',
        onInformative: '#FFFFFF',
      },
    }}
    root={true}
  >
    {storyFn()}
  </ThemeProvider>
);
