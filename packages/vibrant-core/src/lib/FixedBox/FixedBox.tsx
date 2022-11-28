import { Box } from '../Box';
import { withFixedBoxVariation } from './FixedBoxProps';

export const FixedBox = withFixedBoxVariation(({ innerRef, ...restProps }) => (
  <Box ref={innerRef} web_position="fixed" {...restProps} />
));
