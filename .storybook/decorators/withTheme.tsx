import type { DecoratorFn } from '@storybook/react';
import { HStack } from '@vibrant-ui/components';
import { Box, PortalRoot, ThemeProvider } from '@vibrant-ui/core';

export const withTheme: DecoratorFn = (storyFn, context) => {
  const { theme } = context.globals;

  if (theme === 'side-by-side') {
    return (
      <HStack>
        <ThemeProvider theme={{ mode: 'light' }} root={true}>
          <Box position="relative" alignItems="start" width="50%" minHeight="100vh" backgroundColor="background">
            <PortalRoot zIndex={100}>{storyFn()}</PortalRoot>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={{ mode: 'dark' }} root={true}>
          <Box position="relative" alignItems="start" width="50%" minHeight="100vh" backgroundColor="background">
            <PortalRoot zIndex={100}>{storyFn()}</PortalRoot>
          </Box>
        </ThemeProvider>
      </HStack>
    );
  }

  return (
    <ThemeProvider theme={{ mode: theme }} root={true}>
      <Box position="relative" alignItems="start" width="100%" minHeight="100vh" backgroundColor="background">
        <PortalRoot zIndex={100} offset={{ bottom: 40 }}>
          {storyFn()}
        </PortalRoot>
      </Box>
    </ThemeProvider>
  );
};
