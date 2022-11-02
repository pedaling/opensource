import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSpinnerVariation } from './SpinnerProps';

export const Spinner = withSpinnerVariation(({ borderWidth, borderRadius, ...restProps }) => (
  <Box as="span" {...restProps}>
    <Box
      as="span"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      borderStyle="solid"
      borderWidth={borderWidth}
      borderColor="onColor"
      opacity={0.24}
      borderRadius={borderRadius}
    />
    <Motion animation={{ rotate: { from: '0deg', to: '360deg' } }} duration={1400} loop={true} easing="linear">
      <Box
        as="span"
        position="absolute"
        transform={{ rotate: '360deg' }}
        top={0}
        left={0}
        right={0}
        bottom={0}
        borderStyle="solid"
        borderWidth={borderWidth}
        borderColor="transparent"
        borderTopColor="onColor"
        borderRadius={borderRadius}
      />
    </Motion>
  </Box>
));
