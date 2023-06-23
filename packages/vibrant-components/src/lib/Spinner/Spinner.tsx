import { Box, useCurrentTheme } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { get } from '@vibrant-ui/utils';
import { withSpinnerVariation } from './SpinnerProps';

export const Spinner = withSpinnerVariation(({ borderWidth, borderRadius, testId = 'spinner', ...restProps }) => {
  const { theme } = useCurrentTheme();
  const { colors } = theme;
  const onColorHex = get(theme, colors.onColor.replace('$', ''), colors.onColor);
  const borderColorHex = `${onColorHex}3d`;

  return (
    <Box as="span" data-testid={testId} {...restProps}>
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
          borderColor={borderColorHex}
          borderTopColor="onColor"
          borderRadius={borderRadius}
        />
      </Motion>
    </Box>
  );
});
