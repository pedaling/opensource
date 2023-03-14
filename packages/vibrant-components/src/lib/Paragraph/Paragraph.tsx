import { Text } from '@vibrant-ui/core';
import { withParagraphVariation } from './ParagraphProps';

export const Paragraph = withParagraphVariation(({ testId = 'paragraph', ...restProps }) => (
  <Text data-testid={testId} {...restProps} />
));
