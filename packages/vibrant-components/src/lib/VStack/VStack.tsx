import { Stack } from '../Stack';
import { withVStackVariation } from './VStackProps';

export const VStack = withVStackVariation(({ alignment, ...stackProps }) => (
  <Stack direction="vertical" alignItems={alignment} {...stackProps} />
));
