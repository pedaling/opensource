import { Stack } from '../Stack';
import { withVStackVariation } from './VStackProps';

export const VStack = withVStackVariation(({ innerRef, alignHorizontal, alignVertical, ...stackProps }) => (
  <Stack
    direction="vertical"
    ref={innerRef}
    {...stackProps}
    justifyContent={alignVertical}
    alignItems={alignHorizontal}
  />
));
