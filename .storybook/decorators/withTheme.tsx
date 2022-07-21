import type { DecoratorFn } from '@storybook/react';
import { HStack } from '@vibrant-ui/components';
import { Box, ThemeProvider } from '@vibrant-ui/core';

export const withTheme: DecoratorFn = (storyFn, context) => {
  const { theme } = context.globals;

  if (theme === 'side-by-side') {
    return (
      <HStack>
        <ThemeProvider theme={{ mode: 'light' }} root={true}>
          <Box alignItems="start" width="50%" minHeight="100vh" p={20} backgroundColor="background">
            {storyFn()}
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={{ mode: 'dark' }} root={true}>
          <Box alignItems="start" width="50%" minHeight="100vh" p={20} backgroundColor="background">
            {storyFn()}
          </Box>
        </ThemeProvider>
      </HStack>
    );
  }

  return (
    <ThemeProvider theme={{ mode: theme }} root={true}>
      <Box alignItems="start" width="100%" minHeight="100vh" p={20} backgroundColor="background">
        {storyFn()}
      </Box>
    </ThemeProvider>
  );
};
