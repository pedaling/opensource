import { Text } from '../Text';
import { withParagraphVariation } from './ParagraphProps';

export const Paragraph = withParagraphVariation(({ innerRef, children, ...textProps }) => (
  <Text ref={innerRef} {...textProps}>
    {children}
  </Text>
));
