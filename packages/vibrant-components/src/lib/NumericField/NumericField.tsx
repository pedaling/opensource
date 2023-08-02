import { useCallback, useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, TextInput } from '@vibrant-ui/core';
import { OperatorButton } from '../OperatorButton';
import { withNumericFieldVariation } from './NumericFieldProps';

export const NumericField = withNumericFieldVariation(
  ({
    disabled,
    color,
    defaultValue,
    max,
    placeholderColor,
    placeholder,
    onValueChange,
    backgroundColor,
    min,
    tabIndex,
    testId = 'numeric-field',
    ...restProps
  }) => {
    const inputRef = useRef<TextInputRef>(null);
    const [inputValue, setInputValue] = useState<number | undefined>(defaultValue);

    useEffect(() => {
      setInputValue(defaultValue);
    }, [defaultValue]);

    const updateInputValue = useCallback(
      (value: number) => {
        const nextInputValue = min !== undefined && min > value ? min : max !== undefined && max < value ? max : value;

        let isPrevented = false;

        onValueChange?.({
          value: nextInputValue,
          prevent: () => {
            isPrevented = true;
          },
        });

        if (!isPrevented) {
          setInputValue(nextInputValue);
        }
      },
      [max, min, onValueChange]
    );

    return (
      <Box position="relative" width={128} height={38} data-testid={testId} {...restProps}>
        <TextInput
          ref={inputRef}
          type="number"
          px={38}
          defaultValue={inputValue?.toString() ?? ''}
          width="100%"
          backgroundColor={backgroundColor}
          height="100%"
          textAlign="center"
          borderWidth={1}
          borderColor="outline1"
          borderStyle="solid"
          rounded="sm"
          placeholder={placeholder?.toString()}
          disabled={disabled}
          hideInputSpinButton={true}
          focusStyle={{
            borderColor: 'outlineNeutral',
            borderWidth: 1,
            outlineWidth: 0,
          }}
          placeholderColor={placeholderColor}
          color={color}
          min={min}
          max={max}
          onValueChange={({ value, prevent }) => {
            const nextInputValue = value ? parseInt(value, 10) : undefined;

            if (
              nextInputValue === undefined ||
              (min !== undefined && min > nextInputValue) ||
              (max !== undefined && max < nextInputValue)
            ) {
              setInputValue(nextInputValue);

              return;
            }

            let isPrevented = false;

            onValueChange?.({
              value: nextInputValue,
              prevent: () => {
                isPrevented = true;

                prevent();
              },
            });

            if (!isPrevented) {
              setInputValue(nextInputValue);
            }
          }}
          onBlur={() => updateInputValue(inputValue ?? min ?? 0)}
          tabIndex={tabIndex}
        />
        <Box position="absolute" top={4} left={4} bottom={4}>
          <OperatorButton
            operator="minus"
            disabled={(min !== undefined && min >= (inputValue ?? 0)) || disabled}
            onClick={() => {
              const defaultInputValue = inputValue ?? placeholder ?? min ?? 0;
              const nextInputValue = min !== undefined ? Math.max(defaultInputValue - 1, min) : defaultInputValue - 1;

              let isPrevented = false;

              onValueChange?.({
                value: nextInputValue,
                prevent: () => {
                  isPrevented = true;
                },
              });

              if (!isPrevented) {
                setInputValue(nextInputValue);
              }
            }}
          />
        </Box>
        <Box position="absolute" top={4} right={4} bottom={4}>
          <OperatorButton
            operator="plus"
            disabled={(max !== undefined && max <= (inputValue ?? 0)) || disabled}
            onClick={() => {
              const defaultInputValue = inputValue ?? placeholder ?? min ?? 0;
              const nextInputValue = max !== undefined ? Math.min(defaultInputValue + 1, max) : defaultInputValue + 1;

              let isPrevented = false;

              onValueChange?.({
                value: nextInputValue,
                prevent: () => {
                  isPrevented = true;
                },
              });

              if (!isPrevented) {
                setInputValue(nextInputValue);
              }
            }}
          />
        </Box>
      </Box>
    );
  }
);

NumericField.displayName = 'NumericField';
