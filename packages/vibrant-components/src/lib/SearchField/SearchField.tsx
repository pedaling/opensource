import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { FieldLayout } from '../FieldLayout';
import { withSearchFieldVariation } from './SearchFieldProps';

export const SearchField = withSearchFieldVariation(
  ({
    size,
    state,
    label,
    placeholder,
    helperText,
    disabled,
    defaultValue,
    onValueChange,
    clearable = false,
    onFocus,
    onBlur,
    innerRef,
    testId = 'search-field',
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
        label={label}
        helperText={helperText}
        state={state}
        focused={isFocused}
        filled={value.length > 0}
        disabled={disabled}
        renderStart={() => <Icon.Search.Thin size={size === 'sm' ? 16 : 20} fill="onView2" />}
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
            type="search"
            enterKeyType="search"
            defaultValue={value}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
            disabled={disabled}
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
