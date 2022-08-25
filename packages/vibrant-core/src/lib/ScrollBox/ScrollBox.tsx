import { Box } from '../Box';
import { withScrollBoxVariation } from './ScrollBoxProps';

export const ScrollBox = withScrollBoxVariation(
  ({ innerRef, as, children, alwaysShowScroll = false, hideScroll = false, ...restProps }) => (
    <Box ref={innerRef} as={as} overflow={alwaysShowScroll ? 'scroll' : 'auto'} hideScroll={hideScroll} {...restProps}>
      {children}
    </Box>
  )
);
