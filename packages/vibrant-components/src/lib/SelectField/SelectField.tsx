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
    testId = 'select-field',
    optionTextTransform = 'none',
    size,
    height,
    px,
    bodyLevel,
    helperTextBodyLevel,
    helperTextSpacing,
    optionsOffset,
    iconSize,
    iconSpacing,
    ...restProps
  }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isOpened, setIsOpened] = useState(false);
    const [direction, setDirection] = useState<'down' | 'up'>('down');
    const [value, setValue] = useState(defaultValue);
    const prevValueRef = useRef(value);
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupMaxHeight, setOptionGroupMaxHeight] = useState<number | string>('auto');
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

    const placeholderColor = 'onView3';

    const borderColor = useMemo(() => {
      if (disabled) {
        return 'outline1';
      }

      if (state === 'error') {
        return 'error';
      }

      return isOpened ? 'outlineNeutral' : 'outline1';
    }, [disabled, state, isOpened]);

    const selectedOption = options.find(option => option.value === value);

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
      setState('default');

      setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
      if (prevValueRef.current !== value) {
        handleValueChange?.(value);
      }

      prevValueRef.current = value;
    }, [handleValueChange, value]);

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

        if (value) {
          updateFocusIndex(options.findIndex(option => option.value === value));
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
      [disabled, onOpen, options, updateFocusIndex, value]
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
        clear: () => setValue(undefined),
        isFocused: () => inputRef.current?.isFocused(),
      }),
      [open]
    );

    return (
      <Box data-testid={testId}>
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
              setValue(options[focusIndex]?.value);

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
          height={height}
          px={px}
          borderWidth={1}
          borderStyle="solid"
          borderColor={borderColor}
          borderRadius={2}
          cursor={disabled ? 'default' : 'pointer'}
          onPressIn={() => (isOpened ? close() : open(-1))}
          {...restProps}
        >
          <HStack alignVertical="center" width="100%">
            <Box as="span" flex={1} pr={iconSpacing} minWidth={0}>
              {selectedOption ? (
                <Box as="span" flexDirection={inlineLabel ? 'row' : 'column'}>
                  {Boolean(label) && (
                    <>
                      <Body
                        level={inlineLabel ? bodyLevel : 6}
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
                        <Body level={bodyLevel} color={disabled ? 'onView3' : 'onView2'}>
                          &nbsp;/&nbsp;
                        </Body>
                      </Box>
                    </>
                  )}
                  <Body
                    level={bodyLevel}
                    color={disabled ? 'onView3' : 'onView1'}
                    lineLimit={1}
                    textTransform={optionTextTransform}
                  >
                    {selectedOption.label}
                  </Body>
                </Box>
              ) : (
                <Body
                  level={bodyLevel}
                  color={label ? labelColor : placeholderColor}
                  lineLimit={1}
                  wordBreak="break-all"
                  wordWrap="break-word"
                >
                  {label || placeholder}
                </Body>
              )}
            </Box>
            <Icon.ArrowTriangleDown.Thin
              size={iconSize}
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
          {...(direction === 'down' ? { top: optionsOffset } : { bottom: optionsOffset })}
        >
          <SelectOptionGroup
            size={size}
            onOptionClick={value => {
              setValue(value);

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
          <Body
            level={helperTextBodyLevel}
            color={state === 'error' ? 'error' : 'onView2'}
            wordBreak="keep-all"
            wordWrap="break-word"
            mt={helperTextSpacing}
          >
            {helperText}
          </Body>
        )}
      </Box>
    );
  }
);
