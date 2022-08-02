import type { SyntheticEvent } from 'react';
import { Box } from '@vibrant-ui/core';
import { withUnstyledTextInputVariation } from './UnstyledTextInputProps';

export const UnstyledTextInput = withUnstyledTextInputVariation(
  ({ innerRef, placeholder, onFocus, onBlur, onKeyDown, onValueChange, isValidValue, replaceValue, ...restProps }) => (
    <Box<undefined, 'input'>
      ref={innerRef}
      as="input"
      typography="body2"
      fontWeight="regular"
      placeholder={placeholder}
      onPaste={(event: SyntheticEvent<HTMLInputElement, ClipboardEvent>) => {
        const inputValue = event.nativeEvent.clipboardData?.getData('text') ?? '';

        if (isValidValue(inputValue)) {
          return;
        }

        const replacedValue = replaceValue(inputValue);

        const currentValue = event.currentTarget.value;
        const start = event.currentTarget.selectionStart ?? 0;
        const end = event.currentTarget.selectionEnd ?? 0;

        event.currentTarget.value = (
          currentValue.substring(0, start) +
          replacedValue +
          currentValue.substring(end)
        ).substring(0, event.currentTarget.maxLength);

        event.currentTarget.selectionStart = start + replacedValue.length;

        event.currentTarget.selectionEnd = event.currentTarget.selectionStart;

        event.preventDefault();

        if (replacedValue.length !== 0) {
          onValueChange?.(event.currentTarget.value);
        }
      }}
      onFocus={() => onFocus?.()}
      onBlur={() => onBlur?.()}
      onKeyDown={event => {
        if (!event.metaKey && !event.altKey && !event.ctrlKey && event.key.length === 1 && !isValidValue(event.key)) {
          event.preventDefault();
        }

        onKeyDown?.({ key: event.key, prevent: () => event.preventDefault() });
      }}
      onInput={(event: SyntheticEvent<HTMLInputElement, InputEvent>) => {
        const replacedValue = replaceValue(event.currentTarget.value);

        event.currentTarget.value = replacedValue;

        if (!event.nativeEvent.data || replaceValue(event.nativeEvent.data ?? '').length !== 0) {
          onValueChange?.(replacedValue);
        }
      }}
      borderWidth={0}
      borderRadius={0}
      p={0}
      {...restProps}
    />
  )
);
