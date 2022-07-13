import { useCallback, useEffect, useRef, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Input } from '../Input';
import { OperatorButton } from '../OperatorButton';
import { withNumericFieldVariation } from './NumericFieldProps';

export const NumericField = withNumericFieldVariation(
  ({ innerRef, disabled, color, defaultValue, id, max, placeholder, onValueChange, min, tabIndex, ...restProps }) => {
    const inputRef = useRef<HTMLInputElement>();
    const [inputValue, setInputValue] = useState<number | undefined>(defaultValue);

    useEffect(() => {
      if (defaultValue === undefined) {
        return;
      }

      setInputValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
      if (inputValue === undefined) {
        return;
      }

      onValueChange?.(inputValue);
    }, [inputValue, onValueChange]);

    const validate = useCallback(
      (value: number) => {
        if (min !== undefined && value < min) {
          return false;
        }

        if (max !== undefined && value > max) {
          return false;
        }

        return true;
      },
      [max, min]
    );

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
          onValueChange={value => {
            if (!value) {
              return;
            }
            const numberValue = parseInt(value, 10);

            if (validate(numberValue)) {
              setInputValue(numberValue);
            }
          }}
          min={min}
          tabIndex={tabIndex}
        />
        <Box position="absolute" top={4} left={4} bottom={4}>
          <OperatorButton
            IconComponent={Icon.Minus.Regular}
            disabled={(inputValue !== undefined && min === inputValue) || disabled}
            onClick={() =>
              setInputValue((value = placeholder ?? 0) => (min !== undefined ? Math.max(value - 1, min) : value - 1))
            }
          />
        </Box>
        <Box position="absolute" top={4} right={4} bottom={4}>
          <OperatorButton
            IconComponent={Icon.Add.Regular}
            disabled={(inputValue !== undefined && max === inputValue) || disabled}
            onClick={() =>
              setInputValue((value = placeholder ?? 0) => (max !== undefined ? Math.min(value + 1, max) : value + 1))
            }
          />
        </Box>
      </Box>
    );
  }
);
