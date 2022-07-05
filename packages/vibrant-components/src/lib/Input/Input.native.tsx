import type { ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';
import type { NativeSyntheticEvent, TextInputChangeEventData, TextInputKeyPressEventData } from 'react-native';
import { TextInput } from 'react-native';
import { Box } from '@vibrant-ui/core';
import { withInputVariation } from './InputProps';

export const Input = withInputVariation(
  forwardRef(
    (
      { placeholder, defaultValue, onFocus, onBlur, onKeyPress, onValueChange, replaceValue },
      ref: ForwardedRef<TextInput>
    ) => {
      const [value, setValue] = useState(defaultValue ?? '');

      return (
        <Box
          ref={ref}
          base={TextInput}
          placeholder={placeholder}
          value={value}
          onFocus={() => onFocus?.()}
          onBlur={() => onBlur?.()}
          onKeyPress={(event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            onKeyPress?.({ key: event.nativeEvent.key, prevent: event.preventDefault });
          }}
          onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
            const replacedValue = replaceValue(event.nativeEvent.text);

            setValue(replacedValue);

            onValueChange?.(replacedValue);
          }}
        />
      );
    }
  )
);
