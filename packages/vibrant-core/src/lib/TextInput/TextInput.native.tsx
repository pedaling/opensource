import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { KeyboardTypeOptions, TextInputProps as RNTextInputProps } from 'react-native';
import { TextInput as RNTextInput, StyleSheet,  NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import styled from '@emotion/native';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { platform } from '../platform';
import type { SystemProps, TextInputProps, TextInputRef } from './TextInputProps';
import {
  AndroidAutoCompleteOptions,
  IosAutoCompleteOptions,
  interpolation,
  replaceValue,
  systemPropNames,
} from './TextInputProps';

const shouldForwardProp = createShouldForwardProp(systemPropNames);

const IS_IOS = platform === 'ios';
const IS_ANDROID = platform === 'android';

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
      enterKeyType,
      defaultValue,
      pattern,
      readOnly = false,
      disabled,
      hidden,
      focusStyle,
      autoCapitalize = 'none',
      autoComplete = 'none',
      onFocus,
      onBlur,
      onKeyPress,
      onValueChange,
      onSubmit,
      textAlignVertical = 'top',
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [isFocused, setIsFocused] = useState(false);

    const innerRef = useRef<RNTextInput>(null);

    const keyboardType = useMemo<KeyboardTypeOptions>(() => {
      if (type === 'number') {
        return 'number-pad';
      }

      if (type === 'email') {
        return 'email-address';
      }

      if (type === 'url') {
        return 'url';
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
      isFocused: () => innerRef.current?.isFocused() ?? false,
    }));

    return (
      <SystemTextInput
        ref={innerRef}
        returnKeyType={enterKeyType}
        textContentType={IS_IOS ? IosAutoCompleteOptions[autoComplete] : undefined}
        autoComplete={IS_ANDROID ? AndroidAutoCompleteOptions[autoComplete] : undefined}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        value={value}
        editable={!readOnly && !disabled}
        secureTextEntry={type === 'password'}
        textAlignVertical={textAlignVertical}
        onFocus={() => {
          setIsFocused(true);

          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);

          onBlur?.();
        }}
        onKeyPress={(event: NativeSyntheticEvent<TextInputKeyPressEventData>) => onKeyPress?.({ key: event.nativeEvent.key, prevent: () => event.preventDefault() })}
        onChangeText={(value: string) => {
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
