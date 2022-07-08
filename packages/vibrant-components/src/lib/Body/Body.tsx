import { Text } from '../Text';
import { withBodyVariation } from './BodyProps';

export const Body = withBodyVariation(({ innerRef, children, ...textProps }) => (
  <Text ref={innerRef} {...textProps}>
    {children}
  </Text>
));
