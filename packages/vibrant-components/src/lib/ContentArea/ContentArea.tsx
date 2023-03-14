import { calculateResponsiveValues, useCurrentTheme } from '@vibrant-ui/core';
import { VStack } from '../VStack';
import { withContentAreaVariation } from './ContentAreaProps';

export const ContentArea = withContentAreaVariation(({ padding = true, children, testId = 'content-area' }) => {
  const {
    theme: { contentArea },
  } = useCurrentTheme();

  const { px } = calculateResponsiveValues({ padding, px: contentArea.padding }, value => ({
    px: value.padding ? value.px : 0,
  }));

  return (
    <VStack alignHorizontal="center" width="100%" data-testid={testId}>
      <VStack maxWidth={contentArea.maxWidth} width="100%" px={px}>
        {children}
      </VStack>
    </VStack>
  );
});
