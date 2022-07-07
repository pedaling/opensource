import { Stack } from '../Stack';
import { withHStackVariation } from './HStackProps';

export const HStack = withHStackVariation(({ innerRef, alignment, ...stackProps }) => (
  <Stack direction="horizontal" ref={innerRef} justifyContent={alignment} {...stackProps} />
));
