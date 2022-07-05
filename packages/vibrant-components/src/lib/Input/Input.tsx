import type { SyntheticEvent } from 'react';
import { Box } from '@vibrant-ui/core';
import { withInputVariation } from './InputProps';

export const Input = withInputVariation(
  ({ placeholder, defaultValue, onFocus, onBlur, onKeyPress, onValueChange, isValidValue, replaceValue }) => (
    <Box
      as="input"
      placeholder={placeholder}
      value={defaultValue}
      onPaste={(event: SyntheticEvent<HTMLInputElement, ClipboardEvent>) => {
        const inputValue = event.nativeEvent.clipboardData?.getData('text') ?? '';

        if (isValidValue(inputValue)) {
          return;
        }

        const replacedValue = replaceValue(inputValue);

        const currentValue = event.currentTarget.value;
        const start = event.currentTarget.selectionStart ?? 0;
        const end = event.currentTarget.selectionEnd ?? 0;

        event.currentTarget.value = `${currentValue.substring(0, start)}${replacedValue}${currentValue.substring(end)}`;

        event.currentTarget.selectionStart = start + replacedValue.length;

        event.currentTarget.selectionEnd = event.currentTarget.selectionStart;

        event.preventDefault();

        onValueChange?.(replacedValue);
      }}
      onFocus={() => onFocus?.()}
      onBlur={() => onBlur?.()}
      onKeyPress={event => {
        if (!event.metaKey && !event.altKey && !event.ctrlKey && !isValidValue(event.key)) {
          event.preventDefault();
        }

        onKeyPress?.({ key: event.key, prevent: event.preventDefault });
      }}
      onChange={event => onValueChange?.(event.target.value)}
    />
  )
);
