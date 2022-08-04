import type { ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Box } from '@vibrant-ui/core';
import { withUnstyledTextInputVariation } from './UnstyledTextInputProps';

export const UnstyledTextInput = withUnstyledTextInputVariation(
  forwardRef(
    (
      { placeholder, defaultValue, onValueChange, onFocus, onBlur, onKeyDown, onSubmit, replaceValue, ...restProps },
      ref: ForwardedRef<RNTextInput>
    ) => {
      const [value, setValue] = useState(defaultValue ?? '');

      return (
        <Box<typeof RNTextInput>
          ref={ref}
          base={RNTextInput}
          placeholder={placeholder}
          value={value}
          onFocus={() => onFocus?.()}
          onBlur={() => onBlur?.()}
          onKeyPress={event => {
            onKeyDown?.({ key: event.nativeEvent.key, prevent: () => event.preventDefault });
          }}
          onChange={event => {
            const replacedValue = replaceValue(event.nativeEvent.text);

            setValue(replacedValue);

            onValueChange?.(replacedValue);
          }}
          backgroundColor="transparent"
          color="onColor"
          borderWidth={0}
          borderRadius={0}
          p={0}
          onSubmitEditing={() => onSubmit?.(value)}
          {...restProps}
        />
      );
    }
  )
);
