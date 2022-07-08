import { Text } from '../Text';
import { withTitleVariation } from './TitleProps';

export const Title = withTitleVariation(({ innerRef, children, ...textProps }) => (
  <Text ref={innerRef} {...textProps}>
    {children}
  </Text>
));
