import { Stack } from '../Stack';
import { withVStackVariation } from './VStackProps';

export const VStack = withVStackVariation(({ innerRef, ...stackProps }) => (
  <Stack direction="vertical" ref={innerRef} {...stackProps} />
));
