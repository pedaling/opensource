import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { KeyboardType, TextInputProps as RNTextInputProps } from 'react-native';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps, TextInputProps, TextInputRef } from './TextInputProps';
import { interpolation, replaceValue, systemPropNames } from './TextInputProps';

const shouldForwardProp = createShouldForwardProp(systemPropNames);

const SystemTextInput = styled(
  forwardRef<RNTextInput, Omit<RNTextInputProps, keyof SystemProps>>(({ style, ...restProps }, ref) => {
    const { props, ...restStyle } = StyleSheet.flatten(style) as any;

    return <RNTextInput ref={ref} style={restStyle} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      type,
      defaultValue,
      pattern,
      readOnly = false,
      disabled,
      hidden,
      focusStyle,
      onFocus,
      onBlur,
      onKeyPress,
      onValueChange,
      onSubmit,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [isFocused, setIsFocused] = useState(false);

    const innerRef = useRef<RNTextInput>(null);

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
      focus: () => innerRef.current?.focus(),
      blur: () => innerRef.current?.blur(),
      clear: () => {
        setValue('');

        onValueChange?.({ value: '', prevent: () => {} });
      },
    }));

    return (
      <SystemTextInput
        ref={innerRef}
        keyboardType={keyboardType}
        value={value}
        editable={!readOnly && !disabled}
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
          const replacedValue = replaceValue({ pattern, value });

          let isPrevented = false;

          onValueChange?.({
            value: replacedValue,
            prevent: () => {
              isPrevented = true;
            },
          });

          if (!isPrevented) {
            setValue(replacedValue);
          }
        }}
        onSubmitEditing={() => onSubmit?.(value)}
        {...restProps}
        {...(isFocused ? focusStyle : {})}
        {...(hidden ? { position: 'absolute', height: 0, opacity: 0 } : {})}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
