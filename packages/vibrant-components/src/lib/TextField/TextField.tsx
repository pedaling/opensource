import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { TextInput } from '@vibrant-ui/core';
import { FieldLayout } from '../FieldLayout';
import { withTextFieldVariation } from './TextFieldProps';

export const TextField = withTextFieldVariation(
  ({
    type = 'text',
    size,
    kind,
    state,
    label,
    required,
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
    onFocus,
    onBlur,
    innerRef,
    testId = 'text-field',
    ...restProps
  }) => {
    const inputRef = useRef<TextInputRef | null>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(defaultValue ?? '');

    const hasValue = value.length > 0;
    const onClearButtonClick = () => {
      setValue('');

      inputRef.current?.focus();

      setIsFocused(true);

      onValueChange?.({ value: '', prevent: () => {} });
    };

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    return (
      <FieldLayout
        testId={testId}
        size={size}
        kind={kind}
        label={label}
        required={required}
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
            ref={node => {
              inputRef.current = node;

              if (!innerRef) {
                return;
              }

              if (typeof innerRef === 'function') {
                innerRef(node);
              }

              if ('current' in innerRef) {
                innerRef.current = node;
              }
            }}
            type={type}
            defaultValue={value}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
            disabled={disabled}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            onFocus={() => {
              onFocus?.();

              setIsFocused(true);
            }}
            onBlur={() => {
              onBlur?.();

              setIsFocused(false);
            }}
            onValueChange={({ value, prevent }) => {
              let isPrevented = false;

              onValueChange?.({
                value,
                prevent: () => {
                  isPrevented = true;

                  prevent();
                },
              });

              if (!isPrevented) {
                setValue(value);
              }
            }}
            {...style}
            {...restProps}
          />
        )}
      />
    );
  }
);
