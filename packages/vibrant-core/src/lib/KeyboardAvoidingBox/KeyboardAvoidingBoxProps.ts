import type { ReactElementChildren } from '../../types';
import { withVariation } from '../withVariation';

export type KeyboardAvoidingBoxProps = {
  keyboardVerticalOffset?: number;
  children?: ReactElementChildren;
};

export const withKeyboardAvoidingBoxVariation = withVariation<KeyboardAvoidingBoxProps>('KeyboardAvoidingBox')();
