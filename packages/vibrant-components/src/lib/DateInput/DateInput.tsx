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
    ...restProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isContentExists = Boolean(value || placeholder);

    return (
      <Box<typeof Pressable>
        ref={innerRef}
        base={Pressable}
        width="100%"
        borderWidth={1}
        borderStyle="solid"
        borderColor={(isFocused || calendarOpened) && state !== 'error' ? 'outlineNeutral' : borderColor}
        typography="body2"
        p={15}
        py={isContentExists && label ? 7 : 15}
        onClick={onClick}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...restProps}
      >
        <HStack alignItems="center" spacing={12}>
          <Box flexGrow={1}>
            {isContentExists ? (
              <VStack spacing={4}>
                {label ? (
                  <Body level={6} color={color} textAlign="left">
                    {label}
                  </Body>
                ) : null}
                <Body level={2} color={value ? color : 'onView2'} textAlign="left">
                  {value || placeholder}
                </Body>
              </VStack>
            ) : (
              <Body level={2} color={color} textAlign="left">
                {label}
              </Body>
            )}
          </Box>
          {!disabled && (
            <Pressable as="button" onClick={onClear}>
              <Icon.CloseCircle.Fill size={20} fill="onView2" />
            </Pressable>
          )}
          <Icon.Calendar.Regular size={20} fill="onView2" />
        </HStack>
      </Box>
    );
  }
);
