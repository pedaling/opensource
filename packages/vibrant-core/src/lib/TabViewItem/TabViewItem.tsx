import { Box } from '../Box';
import { withTabViewItemVariation } from './TabViewItemProps';

export const TabViewItem = withTabViewItemVariation(({ testId = 'tab-view-item', renderContent }) => (
  <Box data-testid={testId} width="100%" height="100%">
    {renderContent()}
  </Box>
));
