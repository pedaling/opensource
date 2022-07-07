import { Stack } from '../Stack';
import { withVStackVariation } from './VStackProps';

export const VStack = withVStackVariation(({ innerRef, alignment, ...stackProps }) => (
  <Stack direction="vertical" ref={innerRef} alignItems={alignment} {...stackProps} />
));
