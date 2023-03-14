import { Text } from '@vibrant-ui/core';
import { withBodyVariation } from './BodyProps';

export const Body = withBodyVariation(({ innerRef, testId, ...props }) => (
  <Text data-testid={testId} {...props} ref={innerRef} />
));
