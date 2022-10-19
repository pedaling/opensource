import { Stack } from '../Stack';
import { withHStackVariation } from './HStackProps';

export const HStack = withHStackVariation(({ innerRef, ...stackProps }) => (
  <Stack direction="horizontal" ref={innerRef} {...stackProps} />
));
