import { VStack } from '@vibrant-ui/components';
import { useCurrentTheme } from '@vibrant-ui/core';
import { withContentAreaVariation } from './ContentAreaProps';

export const ContentArea = withContentAreaVariation(({ padding = true }) => {
  const {
    theme: { contentArea },
  } = useCurrentTheme();

  return (
    <VStack alignHorizontal="center" width="100%">
      <VStack maxWidth={contentArea.maxWidth} width="100%" px={padding ? contentArea.padding : 0} />
    </VStack>
  );
});
