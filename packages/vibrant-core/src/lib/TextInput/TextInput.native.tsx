import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { KeyboardType, TextInputProps as RNTextInputProps } from 'react-native';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { TextInputProps, TextInputRef } from './TextInputProps';
import { interpolation, systemPropNames } from './TextInputProps';

const shouldForwardProp = createShouldForwardProp(systemPropNames);

const SystemTextInput = styled(
  forwardRef<RNTextInput, RNTextInputProps>(({ style, ...restProps }, ref) => {
    const { props, ...restStyle } = StyleSheet.flatten(style) as any;

    return <RNTextInput ref={ref} style={restStyle} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({ type, defaultValue, focusStyle, onFocus, onBlur, onKeyPress, onChange, onSubmit, ...restProps }, ref) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<RNTextInput>(null);

    const keyboardType = useMemo<KeyboardType>(() => {
      if (type === 'number') {
        return 'number-pad';
      }

      return 'default';
    }, [type]);

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
        keyboardType={keyboardType}
        value={value}
        onFocus={() => {
          setIsFocused(true);

          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);

          onBlur?.();
        }}
        onKeyPress={event => onKeyPress?.({ key: event.nativeEvent.key, prevent: () => event.preventDefault() })}
        onChangeText={value => {
          let isPrevented = false;

          onChange?.({
            value: value,
            prevent: () => {
              isPrevented = true;
            },
          });

          if (!isPrevented) {
            setValue(value);
          }
        }}
        onSubmitEditing={() => onSubmit?.(value)}
        {...restProps}
        {...(isFocused ? focusStyle : {})}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
