import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { TextInput } from '@vibrant-ui/core';
import { FieldLayout } from '../FieldLayout';
import { withTextFieldVariation } from './TextFieldProps';

export const TextField = withTextFieldVariation(
  ({
    type = 'text',
    state,
    label,
    placeholder,
    helperText,
    disabled,
    defaultValue,
    prefix,
    suffix,
    renderStart,
    renderEnd,
    autoCapitalize = 'none',
    autoComplete = 'none',
    onValueChange,
    clearable = false,
    ...restProps
  }) => {
    const inputRef = useRef<TextInputRef>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(defaultValue ?? '');

    const hasValue = value.length > 0;
    const onClearButtonClick = () => {
      setValue('');

      inputRef.current?.focus();

      setIsFocused(true);
    };

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
        disabled={disabled}
        prefixText={prefix}
        suffixText={suffix}
        renderStart={renderStart}
        renderEnd={renderEnd}
        showClearButton={clearable && hasValue}
        onClearButtonClick={onClearButtonClick}
        onLabelClick={() => inputRef.current?.focus()}
        renderField={style => (
          <TextInput
            ref={inputRef}
            type={type}
            defaultValue={value}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
            disabled={disabled}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
