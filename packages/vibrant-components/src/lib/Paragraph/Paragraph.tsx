import { Text } from '@vibrant-ui/core';
import { withParagraphVariation } from './ParagraphProps';

export const Paragraph = withParagraphVariation(({ innerRef, ...restProps }) => <Text ref={innerRef} {...restProps} />);
