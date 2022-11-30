import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { PressableBox, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { FieldLayout } from '../FieldLayout';
import { withPasswordFieldVariation } from './PasswordFieldProps';

export const PasswordField = withPasswordFieldVariation(
  ({
    state,
    label,
    placeholder,
    helperText,
    defaultValue,
    onValueChange,
    onFocus,
    onBlur,
    autoComplete = 'password',
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
        label={label}
        helperText={helperText}
        state={state}
        focused={isFocused}
        filled={value.length > 0}
        onLabelClick={() => inputRef.current?.focus()}
        renderEnd={() => (
          <PressableBox onClick={() => setShowValue(!showValue)}>
            {showValue ? <Icon.EyeOn.Thin size={20} fill="onView2" /> : <Icon.EyeOff.Thin size={20} fill="onView2" />}
          </PressableBox>
        )}
        renderField={style => (
          <TextInput
            ref={inputRef}
            type={showValue ? 'text' : 'password'}
            defaultValue={value}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
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
