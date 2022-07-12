import { useRef } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Input } from '../Input';
import { OperatorButton } from '../OperatorButton';
import { withNumericFieldVariation } from './NumericFieldProps';

export const NumericField = withNumericFieldVariation(
  ({ innerRef, disabled, color, defaultValue, id, max, onValueChange, min, tabIndex, ...restProps }) => {
    const inputRef = useRef<HTMLInputElement>();

    return (
      <Box position="relative" width={128} height={36} {...restProps}>
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
          width="100%"
          height="100%"
          textAlign="center"
          borderWidth={1}
          borderColor="outline1"
          borderRadius={2}
          disabled={disabled}
          hideInputSpinButton={true}
          pseudoFocus={{
            borderColor: 'outlineNeutral',
            borderWidth: 1,
            outlineWidth: 0,
          }}
          color={color}
          defaultValue={defaultValue}
          id={id}
          max={max}
          onValueChange={onValueChange}
          min={min}
          tabIndex={tabIndex}
        />
        <Box position="absolute" top={3} left={3} bottom={3}>
          <OperatorButton
            IconComponent={Icon.Minus.Regular}
            disabled={disabled}
            onClick={() => inputRef.current?.stepDown()}
          />
        </Box>
        <Box position="absolute" top={3} right={3} bottom={3}>
          <OperatorButton
            IconComponent={Icon.Add.Regular}
            disabled={disabled}
            onClick={() => inputRef.current?.stepUp()}
          />
        </Box>
      </Box>
    );
  }
);
