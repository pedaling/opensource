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
    <Motion animation={{ rotate: { from: '0deg', to: '360deg' } }} duration={1400} loop={true} easing="linear">
      <Box
        as="span"
        transform={{ rotate: '360deg' }}
        borderStyle="solid"
        borderWidth={borderWidth}
        borderTopColor={onColorHex}
        borderLeftColor={borderColorHex}
        borderRightColor={borderColorHex}
        borderBottomColor={borderColorHex}
        borderRadius={borderRadius}
        data-testid={testId}
        {...restProps}
      />
    </Motion>
  );
});
