import type { DecoratorFn } from '@storybook/react';
import { HStack } from '@vibrant-ui/components';
import { Box, ThemeProvider } from '@vibrant-ui/core';
import type { ThemeMode } from '@vibrant-ui/theme';
import { useMemo } from 'react';

const lightTheme: { mode?: ThemeMode } = { mode: 'light'};
const darkTheme: { mode?: ThemeMode } = { mode: 'dark' };

export const withTheme: DecoratorFn = (storyFn, context) => {
  const { theme } = context.globals;

  const currentTheme = useMemo(() => ({ mode: theme }), [theme]);

  if (theme === 'side-by-side') {
    return (
      <HStack>
        <ThemeProvider theme={lightTheme} root={true}>
          <Box alignItems="start" width="50%" minHeight="100vh" backgroundColor="background">
            {storyFn()}
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={darkTheme} root={true}>
          <Box alignItems="start" width="50%" minHeight="100vh" backgroundColor="background">
            {storyFn()}
          </Box>
        </ThemeProvider>
      </HStack>
    );
  }

  return (
    <ThemeProvider theme={currentTheme} root={true}>
      <Box alignItems="start" width="100%" minHeight="100vh" backgroundColor="background">
        {storyFn()}
      </Box>
    </ThemeProvider>
  );
};
