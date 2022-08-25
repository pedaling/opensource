import { Box } from '../Box';
import { withScrollBoxVariation } from './ScrollBoxProps';

export const ScrollBox = withScrollBoxVariation(({ innerRef, as, children, ...restProps }) => (
  <Box ref={innerRef} as={as} {...restProps}>
    {children}
  </Box>
));
