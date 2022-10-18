import { Stack } from '../Stack';
import { withHStackVariation } from './HStackProps';

export const HStack = withHStackVariation(({ innerRef, alignHorizontal, alignVertical, ...stackProps }) => (
  <Stack
    direction="horizontal"
    ref={innerRef}
    alignItems={alignVertical}
    justifyContent={alignHorizontal}
    {...stackProps}
  />
));
