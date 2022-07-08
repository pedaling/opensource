import { Text } from '../Text';
import { withDisplayVariation } from './DisplayProps';

export const Display = withDisplayVariation(({ innerRef, children, ...textProps }) => (
  <Text ref={innerRef} {...textProps}>
    {children}
  </Text>
));
