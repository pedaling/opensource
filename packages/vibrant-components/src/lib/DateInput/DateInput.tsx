import { useState } from 'react';
import { VStack } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { withDateInputVariation } from './DateInputProps';

export const DateInput = withDateInputVariation(
  ({
    innerRef,
    value,
    placeholder,
    state,
    label,
    onClear,
    calendarOpened,
    onClick,
    color,
    disabled,
    borderColor,
    helperText,
    ...restProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isContentExists = Boolean(value);

    return (
      <VStack width="100%" spacing={6}>
        <Box<typeof Pressable>
          ref={innerRef}
          base={Pressable}
          width="100%"
          borderWidth={1}
          borderStyle="solid"
          borderColor={(isFocused || calendarOpened) && state !== 'error' ? 'outlineNeutral' : borderColor}
          typography="body2"
          p={15}
          py={isContentExists && label ? 7 : 14}
          onClick={onClick}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          borderRadius={2}
          {...restProps}
        >
          <HStack alignItems="center" spacing={12}>
            <Box flexGrow={1}>
              <VStack spacing={4}>
                {isContentExists && label ? (
                  <Body level={6} color={color} textAlign="left">
                    {label}
                  </Body>
                ) : null}
                <Body level={2} color={color} textAlign="left">
                  {value || label || placeholder}
                </Body>
              </VStack>
            </Box>
            {!disabled && (
              <Pressable as="button" onClick={onClear}>
                <Icon.CloseCircle.Fill size={20} fill="onView2" />
              </Pressable>
            )}
            <Icon.Calendar.Regular size={20} fill="onView2" />
          </HStack>
        </Box>
        {helperText ? (
          <Body level={4} textAlign="left" color={color}>
            {helperText}
          </Body>
        ) : null}
      </VStack>
    );
  }
);
