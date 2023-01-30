import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, OverlayBox, PressableBox, TextInput, getElementPosition } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { useCallbackRef } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { SelectOptionGroup } from '../SelectOptionGroup';
import { withSelectFieldVariation } from './SelectFieldProps';

export const SelectField = withSelectFieldVariation(
  ({
    innerRef,
    label,
    placeholder,
    inlineLabel,
    options,
    state: stateProp = 'default',
    helperText,
    renderOption,
    disabled,
    defaultValue,
    onValueChange,
    onOpen,
    zIndex,
    optionTextTransform = 'none',
    ...restProps
  }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isOpened, setIsOpened] = useState(false);
    const [direction, setDirection] = useState<'down' | 'up'>('down');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(
      defaultValue ? options.findIndex(option => !option.disabled && option.value === defaultValue) : -1
    );
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupMaxHeight, setOptionGroupMaxHeight] = useState<number | string>('auto');
    const prevSelectedValueRef = useRef<string | undefined>(defaultValue);
    const handleValueChange = useCallbackRef(onValueChange);

    const ref = useRef<HTMLElement>(null);
    const inputRef = useRef<TextInputRef>(null);

    const labelColor = useMemo(() => {
      if (disabled) {
        return 'onView3';
      }

      if (state === 'error') {
        return 'error';
      }

      return 'onView2';
    }, [disabled, state]);

    const placeholderColor = useMemo(() => {
      if (disabled || state === 'error') {
        return 'onView3';
      }

      return 'onView2';
    }, [disabled, state]);

    const borderColor = useMemo(() => {
      if (disabled) {
        return 'outline1';
      }

      if (state === 'error') {
        return 'error';
      }

      return isOpened ? 'outlineNeutral' : 'outline1';
    }, [disabled, state, isOpened]);

    const selectedOption = options[selectedOptionIndex];

    const updateFocusIndex = useCallback(
      (index: number) => {
        let nextIndex = index;

        while (nextIndex >= 0 && nextIndex < options.length) {
          if (options[nextIndex].disabled) {
            if (index > focusIndex) {
              nextIndex++;
            } else {
              nextIndex--;
            }

            continue;
          }

          setFocusIndex(nextIndex);
          break;
        }
      },
      [focusIndex, options]
    );

    useEffect(() => {
      if (!defaultValue) {
        setSelectedOptionIndex(-1);

        return;
      }

      setSelectedOptionIndex(options.findIndex(option => !option.disabled && option.value === defaultValue));
    }, [defaultValue, options]);

    useEffect(() => {
      if (prevSelectedValueRef.current !== selectedOption?.value) {
        setState('default');

        handleValueChange?.(selectedOption?.value);
      }

      prevSelectedValueRef.current = selectedOption?.value;
    }, [handleValueChange, selectedOption?.value]);

    useEffect(() => {
      setState(stateProp);
    }, [stateProp]);

    const open = useCallback(
      async (index: number) => {
        if (!ref.current || disabled) {
          return;
        }

        inputRef.current?.focus();

        const { top, bottom } = await getElementPosition(ref.current);

        const spaceAbove = top;
        const spaceBelow = bottom;

        if (selectedOptionIndex !== -1) {
          updateFocusIndex(selectedOptionIndex);
        } else {
          updateFocusIndex(index);
        }

        if (spaceAbove > spaceBelow) {
          setOptionGroupMaxHeight(spaceAbove - 44);

          setDirection('up');
        } else {
          setOptionGroupMaxHeight(spaceBelow - 84);

          setDirection('down');
        }

        setIsOpened(true);

        onOpen?.();
      },
      [disabled, onOpen, selectedOptionIndex, updateFocusIndex]
    );

    const close = () => {
      updateFocusIndex(-1);

      setIsOpened(false);
    };

    useImperativeHandle(
      innerRef,
      () => ({
        focus: () => {
          inputRef.current?.focus();

          open(0);
        },
        blur: () => inputRef.current?.blur(),
        clear: () => setSelectedOptionIndex(-1),
        isFocused: () => inputRef.current?.isFocused(),
      }),
      [open]
    );

    return (
      <Box>
        <TextInput
          ref={inputRef}
          type="text"
          defaultValue={selectedOption?.value ?? ''}
          readOnly={true}
          disabled={disabled}
          hidden={true}
          onSubmit={() => {
            if (!isOpened) {
              open(0);

              return;
            }

            if (focusIndex !== -1) {
              setSelectedOptionIndex(focusIndex);

              close();
            }
          }}
          onKeyPress={({ key, prevent }) => {
            if (key === (direction === 'up' ? 'ArrowDown' : 'ArrowUp')) {
              updateFocusIndex(Math.max(0, focusIndex - 1));
            }

            if (key === (direction === 'up' ? 'ArrowUp' : 'ArrowDown')) {
              updateFocusIndex(Math.min(options.length - 1, focusIndex + 1));
            }

            prevent();
          }}
        />
        <PressableBox
          ref={ref}
          alignItems="center"
          flexDirection="row"
          height={50}
          px={16}
          borderWidth={1}
          borderStyle="solid"
          borderColor={borderColor}
          borderRadius={2}
          cursor={disabled ? 'default' : 'pointer'}
          onPressIn={() => (isOpened ? close() : open(-1))}
          {...restProps}
        >
          <HStack alignVertical="center" width="100%">
            <Box as="span" flex={1} pr={12} minWidth={0}>
              {selectedOption ? (
                <Box as="span" flexDirection={inlineLabel ? 'row' : 'column'}>
                  {Boolean(label) && (
                    <>
                      <Body
                        level={inlineLabel ? 2 : 6}
                        color={labelColor}
                        lineLimit={1}
                        flexGrow={0}
                        flexShrink={0}
                        flexBasis="auto"
                        maxWidth="90%"
                      >
                        {label}
                      </Body>
                      <Box as="span" flexShrink={0} hidden={!inlineLabel}>
                        <Body level={2} color={disabled ? 'onView3' : 'onView2'}>
                          &nbsp;/&nbsp;
                        </Body>
                      </Box>
                    </>
                  )}
                  <Body
                    level={2}
                    color={disabled ? 'onView3' : 'onView1'}
                    lineLimit={1}
                    textTransform={optionTextTransform}
                  >
                    {selectedOption.label}
                  </Body>
                </Box>
              ) : (
                <Body
                  level={2}
                  color={label ? labelColor : placeholderColor}
                  lineLimit={1}
                  wordBreak="break-all"
                  wordWrap="break-word"
                >
                  {label || placeholder}
                </Body>
              )}
            </Box>
            <Icon.ArrowTriangleDown.Regular
              size={20}
              fill={disabled ? 'onView3' : state === 'error' ? 'error' : 'onView1'}
            />
          </HStack>
        </PressableBox>
        <OverlayBox
          open={isOpened}
          targetRef={ref}
          onDismiss={close}
          width="100%"
          maxHeight={[optionGroupMaxHeight, optionGroupMaxHeight, 336]}
          zIndex={zIndex}
          {...(direction === 'down' ? { top: 54 } : { bottom: 54 })}
        >
          <SelectOptionGroup
            onOptionClick={index => {
              setSelectedOptionIndex(index);

              close();

              inputRef.current?.focus();
            }}
            state={state}
            renderOption={renderOption}
            reverse={direction === 'up'}
            options={options}
            focusIndex={focusIndex}
            textTransform={optionTextTransform}
          />
        </OverlayBox>
        {Boolean(helperText) && (
          <Body level={4} color={state === 'error' ? 'error' : 'onView2'} wordBreak="keep-all" wordWrap="break-word">
            {helperText}
          </Body>
        )}
      </Box>
    );
  }
);
