import type { ReactElementChildren } from '@vibrant-ui/core';
import { withVariation } from '../withVariation';

export type KeyboardAvoidingBoxProps = {
  keyboardVerticalOffset?: number;
  children?: ReactElementChildren;
};

export const withKeyboardAvoidingBoxVariation = withVariation<KeyboardAvoidingBoxProps>('KeyboardAvoidingBox')();
