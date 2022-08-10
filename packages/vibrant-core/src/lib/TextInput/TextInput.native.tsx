import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import styled from '@emotion/native';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { TextInputProps, TextInputRef } from './TextInputProps';
import { interpolation, systemPropNames } from './TextInputProps';

const shouldForwardProp = createShouldForwardProp(systemPropNames);

const SystemTextInput = styled(RNTextInput, {
  shouldForwardProp,
})(interpolation);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({ type, focusStyle, onFocus, onBlur, ...restProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<RNTextInput>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
    }));

    return (
      <SystemTextInput
        ref={inputRef}
        type={type}
        onFocus={() => {
          setIsFocused(true);

          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);

          onBlur?.();
        }}
        {...restProps}
        {...(isFocused ? focusStyle : {})}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
