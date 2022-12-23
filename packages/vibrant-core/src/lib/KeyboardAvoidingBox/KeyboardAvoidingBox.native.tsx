import { KeyboardAvoidingView } from 'react-native';
import { Box } from '../Box';
import { platform } from '../platform';
import { withKeyboardAvoidingBoxVariation } from './KeyboardAvoidingBoxProps';

export const KeyboardAvoidingBox = withKeyboardAvoidingBoxVariation(({ ...restProps }) => (
  <Box
    base={KeyboardAvoidingView}
    behavior={platform === 'ios' ? 'padding' : undefined}
    width="100%"
    height="100%"
    {...restProps}
  />
));
