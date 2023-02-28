import { Box } from '../Box';
import { withTabViewItemVariation } from './TabViewItemProps';

export const TabViewItem = withTabViewItemVariation(({ renderContent }) => (
  <Box width="100%" height="100%">
    {renderContent()}
  </Box>
));
