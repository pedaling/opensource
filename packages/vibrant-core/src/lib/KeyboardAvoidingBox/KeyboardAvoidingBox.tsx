import { Box } from '../Box';
import { withKeyboardAvoidingBoxVariation } from './KeyboardAvoidingBoxProps';

export const KeyboardAvoidingBox = withKeyboardAvoidingBoxVariation(({ ...restProps }) => (
  <Box width="100%" height="100%" {...restProps} />
));
