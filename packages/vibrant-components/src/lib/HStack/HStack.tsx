import { Stack } from '../Stack';
import { withHStackVariation } from './HStackProps';

export const HStack = withHStackVariation(({ alignment, ...stackProps }) => (
  <Stack direction="horizontal" justifyContent={alignment} {...stackProps} />
));
