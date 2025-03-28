import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { PressableBox, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { FieldLayout } from '../FieldLayout';
import { withPasswordFieldVariation } from './PasswordFieldProps';

export const PasswordField = withPasswordFieldVariation(
  ({
    size,
    state,
    label,
    placeholder,
    helperText,
    disabled,
    defaultValue,
    onValueChange,
    onFocus,
    onBlur,
    testId = 'password-field',
    autoComplete = 'password',
    iconSize,
    ...restProps
  }) => {
    const inputRef = useRef<TextInputRef>(null);

    const [value, setValue] = useState(defaultValue ?? '');
    const [showValue, setShowValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    return (
      <FieldLayout
        size={size}
        testId={testId}
        label={label}
        helperText={helperText}
        state={state}
        focused={isFocused}
        filled={value.length > 0}
        disabled={disabled}
        onLabelClick={() => inputRef.current?.focus()}
        renderEnd={() => (
          <PressableBox onClick={() => setShowValue(!showValue)}>
            {showValue ? (
              <Icon.EyeOn.Thin size={iconSize} fill="onView2" />
            ) : (
              <Icon.EyeOff.Thin size={iconSize} fill="onView2" />
            )}
          </PressableBox>
        )}
        renderField={style => (
          <TextInput
            ref={inputRef}
            type={showValue ? 'text' : 'password'}
            defaultValue={value}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
            disabled={disabled}
            autoComplete={autoComplete}
            onFocus={() => {
              onFocus?.();

              setIsFocused(true);
            }}
            onBlur={() => {
              onBlur?.();

              setIsFocused(false);
            }}
            onValueChange={({ value }) => {
              setValue(value);

              onValueChange?.(value);
            }}
            {...style}
            {...restProps}
          />
        )}
      />
    );
  }
);
