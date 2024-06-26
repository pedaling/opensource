import type { DecoratorFn } from '@storybook/react';
import { HStack } from '@vibrant-ui/components';
import { Box, ThemeProvider } from '@vibrant-ui/core';

export const withTheme: DecoratorFn = (StoryComponent, context) => {
  const { theme } = context.globals;

  if (theme === 'side-by-side') {
    return (
      <HStack>
        <ThemeProvider theme={{ mode: 'light' }} root={true}>
          <Box position="relative" alignItems="flex-start" width="50%" minHeight="100vh" backgroundColor="background">
            <StoryComponent />
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={{ mode: 'dark' }} root={true}>
          <Box position="relative" alignItems="flex-start" width="50%" minHeight="100vh" backgroundColor="background">
            <StoryComponent />
          </Box>
        </ThemeProvider>
      </HStack>
    );
  }

  return (
    <ThemeProvider theme={{ mode: theme }} root={true}>
      <Box position="relative" alignItems="flex-start" width="100%" minHeight="100vh" backgroundColor="background">
        <StoryComponent />
      </Box>
    </ThemeProvider>
  );
};
