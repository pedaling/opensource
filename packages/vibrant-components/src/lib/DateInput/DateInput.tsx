import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Space } from '../Space';
import { VStack } from '../VStack';
import { withDateInputVariation } from './DateInputProps';

export const DateInput = withDateInputVariation(
  ({
    innerRef,
    value,
    placeholder,
    placeholderColor,
    state,
    label,
    labelColor,
    onClear,
    calendarOpened,
    onClick,
    helperColor,
    color,
    disabled,
    borderColor,
    helperText,
    ...restProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isContentExists = Boolean(value);

    return (
      <Box width="100%" position="relative">
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
          pr={disabled ? 48 : 80}
          onClick={onClick}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          height={50}
          borderRadius={2}
          {...restProps}
        >
          <VStack spacing={4}>
            {isContentExists && label ? (
              <Body level={6} color={labelColor}>
                {label}
              </Body>
            ) : null}
            <Body level={2} lineLimit={1} color={value ? color : label ? labelColor : placeholderColor}>
              {value || label || placeholder}
            </Body>
          </VStack>
        </Box>

        <Box position="absolute" top={15} right={15}>
          <HStack spacing={12}>
            {!disabled && value ? (
              <Pressable onClick={onClear} as="button">
                <Icon.CloseCircle.Fill size={20} fill="onView2" />
              </Pressable>
            ) : null}
            <Icon.Calendar.Regular size={20} fill="onView2" />
          </HStack>
        </Box>
        <Space height={6} />
        {helperText ? (
          <Body level={4} color={helperColor}>
            {helperText}
          </Body>
        ) : null}
      </Box>
    );
  }
);
