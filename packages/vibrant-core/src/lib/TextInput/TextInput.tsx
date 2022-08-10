import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps, TextInputProps, TextInputRef } from './TextInputProps';
import { interpolation, systemPropNames } from './TextInputProps';

type HTMLInputProps = Exclude<keyof JSX.IntrinsicElements['input'], keyof SystemProps>;

const shouldForwardProp = createShouldForwardProp<HTMLInputProps>(systemPropNames);

const SystemTextInput = styled<'input', HTMLInputProps>('input', {
  shouldForwardProp,
})(interpolation);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({ type, focusStyle, onFocus, onBlur, ...restProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

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
