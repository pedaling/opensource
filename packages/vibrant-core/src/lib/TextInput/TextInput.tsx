import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
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
  ({ type, defaultValue, focusStyle, onFocus, onBlur, onKeyPress, onChange, onSubmit, ...restProps }, ref) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        setValue('');

        onChange?.({ value: '', prevent: () => {} });
      },
    }));

    return (
      <SystemTextInput
        ref={inputRef}
        type={type}
        value={value}
        onFocus={() => {
          setIsFocused(true);

          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);

          onBlur?.();
        }}
        onKeyDown={event => {
          const { key } = event.nativeEvent;

          if (key === 'Enter') {
            onSubmit?.(value);

            return;
          }

          onKeyPress?.({ key, prevent: () => event.preventDefault() });
        }}
        onInput={event => {
          let isPrevented = false;

          onChange?.({
            value: event.currentTarget.value,
            prevent: () => {
              isPrevented = true;

              event.preventDefault();
            },
          });

          if (!isPrevented) {
            setValue(event.currentTarget.value);
          }
        }}
        {...restProps}
        {...(isFocused ? focusStyle : {})}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
