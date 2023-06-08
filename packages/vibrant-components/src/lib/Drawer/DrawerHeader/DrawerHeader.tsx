import { Box, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Divider } from '../../Divider';
import { HStack } from '../../HStack';
import { IconButton } from '../../IconButton';
import { useDrawer } from '../DrawerContext';
import { withDrawerHeaderVariation } from './DrawerHeaderProps';

export const DrawerHeader = withDrawerHeaderVariation(
  ({ testId = 'drawer-header', children, title, closable = false }) => {
    const { togglePanel } = useDrawer();

    return (
      <>
        <Box data-testid={testId} py={12} px={20}>
          <HStack alignHorizontal="space-between">
            {children ? (
              children
            ) : (
              <Text
                as="h2"
                fontWeight="bold"
                typography="title6"
                color="onView1"
                wordWrap="break-word"
                wordBreak="break-word"
                whiteSpace="pre-wrap"
              >
                {title}
              </Text>
            )}
            {closable && (
              <Box py={2}>
                <IconButton
                  IconComponent={Icon.Close.Thin}
                  size="sm"
                  color="onView1"
                  onClick={togglePanel}
                  ariaLabel="close-button"
                />
              </Box>
            )}
          </HStack>
        </Box>
        <Divider direction="horizontal" kind="default" />
      </>
    );
  }
);
