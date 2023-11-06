import { useEffect, useRef, useState } from 'react';
import { Box, PressableBox, useConfig } from '@vibrant-ui/core';
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
    const {
      translations: { datePicker: datePickerTranslation },
    } = useConfig();

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
          rounded="sm"
          flexShrink={0}
          overflow="hidden"
          {...restProps}
        >
          <Pressable
            ref={composeRef}
            pl={px}
            justifyContent="center"
            flexGrow={1}
            disabled={disabled}
            backgroundColor="transparent"
            onClick={onFocus}
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
          <HStack spacing={iconSpacing} pl={iconSpacing}>
            {!disabled && value ? (
              <PressableBox as="button" onClick={onClear} hitSlop={hitSlop} justifyContent="center">
                <Icon.CloseCircle.Fill size={iconSize} fill="onView2" />
              </PressableBox>
            ) : null}
            <PressableBox
              as="button"
              ariaLabel={datePickerTranslation.ariaLabel}
              disabled={disabled}
              onClick={onFocus}
              justifyContent="center"
              pr={px}
            >
              <Icon.Calendar.Thin size={iconSize} fill="onView2" />
            </PressableBox>
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
