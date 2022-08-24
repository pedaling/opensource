import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { TextInput } from '@vibrant-ui/core';
import { FieldLayout } from '../FieldLayout';
import { withTextFieldVariation } from './TextFieldProps';

export const TextField = withTextFieldVariation(
  ({ state, label, helperText, disabled, defaultValue, onValueChange, ...restProps }) => {
    const inputRef = useRef<TextInputRef>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(defaultValue ?? '');

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
        onLabelClick={() => inputRef.current?.focus()}
        renderField={style => (
          <TextInput
            ref={inputRef}
            type="text"
            defaultValue={value}
            placeholder={isFocused || value ? '입력헤주세여' : ''}
            placeholderColor="onView3"
            disabled={disabled}
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
