import { Box } from '@vibrant-ui/core';
import { Divider } from '../../Divider';
import { withDrawerFooterVariation } from './DrawerFooterProps';

export const DrawerFooter = withDrawerFooterVariation(({ testId = 'drawer-footer', children }) => (
  <>
    <Divider direction="horizontal" kind="default" />
    <Box data-testid={testId} py={12} px={20}>
      {children}
    </Box>
  </>
));
