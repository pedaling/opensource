import { useCallback, useEffect, useRef, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Input } from '../Input';
import { OperatorButton } from '../OperatorButton';
import { withNumericFieldVariation } from './NumericFieldProps';

export const NumericField = withNumericFieldVariation(
  ({
    innerRef,
    disabled,
    color,
    defaultValue,
    id,
    max,
    placeholder,
    onValueChange,
    backgroundColor,
    min,
    tabIndex,
    ...restProps
  }) => {
    const inputRef = useRef<HTMLInputElement>();
    const [inputValue, setInputValue] = useState<number | undefined>(defaultValue);

    useEffect(() => {
      setInputValue(defaultValue);
    }, [defaultValue]);

    const updateInputValue = useCallback(
      (nextInputValue: number) => {
        if (min !== undefined && min > nextInputValue) {
          setInputValue(min);

          return;
        }

        if (max !== undefined && max < nextInputValue) {
          setInputValue(max);

          return;
        }

        setInputValue(nextInputValue);
      },
      [max, min]
    );

    useEffect(() => {
      if (
        inputValue === undefined ||
        (min !== undefined && min > inputValue) ||
        (max !== undefined && max < inputValue)
      ) {
        return;
      }

      onValueChange?.(inputValue);
    }, [inputValue, max, min, onValueChange]);

    return (
      <Box position="relative" width={128} height={38} {...restProps}>
        <Input
          ref={(ref: HTMLInputElement) => {
            inputRef.current = ref;
            if (!innerRef) {
              return;
            }

            if (typeof innerRef === 'function') {
              innerRef(ref);

              return;
            }

            innerRef.current = ref;
          }}
          type="number"
          px={38}
          value={inputValue?.toString() ?? ''}
          width="100%"
          backgroundColor={backgroundColor}
          height="100%"
          textAlign="center"
          borderWidth={1}
          borderColor="outline1"
          borderStyle="solid"
          borderRadius={2}
          placeholder={placeholder?.toString()}
          disabled={disabled}
          hideInputSpinButton={true}
          pseudoFocus={{
            borderColor: 'outlineNeutral',
            borderWidth: 1,
            outlineWidth: 0,
          }}
          color={color}
          id={id}
          max={max}
          onValueChange={value => setInputValue(value ? parseInt(value, 10) : undefined)}
          onBlur={() => updateInputValue(inputValue ?? min ?? 0)}
          min={min}
          tabIndex={tabIndex}
        />
        <Box position="absolute" top={4} left={4} bottom={4}>
          <OperatorButton
            operator="minus"
            disabled={(min !== undefined && min >= (inputValue ?? 0)) || disabled}
            onClick={() =>
              setInputValue((value = placeholder ?? min ?? 0) =>
                min !== undefined ? Math.max(value - 1, min) : value - 1
              )
            }
          />
        </Box>
        <Box position="absolute" top={4} right={4} bottom={4}>
          <OperatorButton
            operator="plus"
            disabled={(max !== undefined && max <= (inputValue ?? 0)) || disabled}
            onClick={() =>
              setInputValue((value = placeholder ?? min ?? 0) =>
                max !== undefined ? Math.min(value + 1, max) : value + 1
              )
            }
          />
        </Box>
      </Box>
    );
  }
);
