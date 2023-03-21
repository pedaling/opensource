import { useEffect, useRef, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { useComposedRef } from '@vibrant-ui/utils';
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
    labelColor,
    onClear,
    calendarOpened,
    onFocus,
    helperColor,
    color,
    disabled,
    borderColor,
    helperText,
    autoFocus,
    testId = 'date-input',
    height,
    bodyLevel,
    helperTextBodyLevel,
    helperTextSpacing,
    px,
    iconSpacing,
    iconSize,
    labelSpacing,
    hitSlop,
    ...restProps
  }) => {
    const inputRef = useRef<any>(null);
    const [isFocused, setIsFocused] = useState(false);

    // TODO: use input native autoFocus and remove this
    useEffect(() => {
      if (autoFocus) {
        inputRef.current?.focus?.({
          preventScroll: true,
        });
      }
    }, [autoFocus]);

    const composeRef = useComposedRef(innerRef, inputRef);

    return (
      <Box width="100%" position="relative" data-testid={testId}>
        <Box
          flexDirection="row"
          width="100%"
          borderWidth={1}
          borderStyle="solid"
          borderColor={(isFocused || calendarOpened) && state !== 'error' ? 'outlineNeutral' : borderColor}
          height={height}
          borderRadius={2}
          flexShrink={0}
          alignItems="center"
          {...restProps}
        >
          <Pressable
            ref={composeRef}
            pl={px}
            disabled={disabled}
            onClick={onFocus}
            flexGrow={1}
            onBlur={() => setIsFocused(false)}
            onFocus={() => {
              setIsFocused(true);

              onFocus?.();
            }}
          >
            <>
              {value && label ? (
                <Body level={6} color={labelColor} mb={labelSpacing}>
                  {label}
                </Body>
              ) : null}
              <Body level={bodyLevel} lineLimit={1} color={value ? color : label ? labelColor : 'onView3'}>
                {value || label || placeholder}
              </Body>
            </>
          </Pressable>
          <HStack spacing={iconSpacing} pr={px} pl={iconSpacing}>
            {!disabled && value ? (
              <Pressable onClick={onClear} as="button" hitSlop={hitSlop}>
                <Icon.CloseCircle.Fill size={iconSize} fill="onView2" />
              </Pressable>
            ) : null}
            <Pressable disabled={disabled} onClick={onFocus}>
              <Icon.Calendar.Thin size={iconSize} fill="onView2" />
            </Pressable>
          </HStack>
        </Box>
        {helperText ? (
          <Body level={helperTextBodyLevel} color={helperColor} mt={helperTextSpacing}>
            {helperText}
          </Body>
        ) : null}
      </Box>
    );
  }
);
