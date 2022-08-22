import { useEffect, useMemo, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, PressableBox, TextInput, getElementPosition } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { Dismissible } from '../Dismissible';
import { HStack } from '../HStack';
import { SelectOptionGroup } from '../SelectOptionGroup';
import { Space } from '../Space';
import { withSelectFieldVariation } from './SelectFieldProps';

export const SelectField = withSelectFieldVariation(
  ({
    label,
    placeholder,
    inlineLabel,
    options,
    state: stateProp = 'default',
    helperText,
    renderOption,
    disabled,
    onValueChange,
    ...restProps
  }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [direction, setDirection] = useState<'down' | 'up'>('down');
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupMaxHeight, setOptionGroupMaxHeight] = useState<number | string>('auto');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

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
    const borderColor = useMemo(() => {
      if (disabled) {
        return 'outline1';
      }

      if (state === 'error') {
        return 'error';
      }

      return isFocused ? 'outlineNeutral' : 'outline1';
    }, [disabled, state, isFocused]);

    const selectedOption = options[selectedOptionIndex];

    useEffect(() => {
      if (!selectedOption) {
        return;
      }

      setState('default');

      onValueChange?.(selectedOption.value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);

    useEffect(() => {
      setState(stateProp);
    }, [stateProp]);

    const open = async (index: number) => {
      if (!ref.current || disabled) {
        return;
      }

      inputRef.current?.focus();

      const { top, bottom } = await getElementPosition(ref.current);

      const spaceAbove = top;
      const spaceBelow = bottom;

      if (selectedOptionIndex !== -1) {
        setFocusIndex(selectedOptionIndex);
      } else {
        setFocusIndex(index);
      }

      if (spaceAbove > spaceBelow) {
        setOptionGroupMaxHeight(spaceAbove - 44);

        setDirection('up');
      } else {
        setOptionGroupMaxHeight(spaceBelow - 84);

        setDirection('down');
      }

      setIsFocused(true);

      setIsOpened(true);
    };

    const close = () => {
      setFocusIndex(-1);

      setIsOpened(false);
    };

    return (
      <Box zIndex={1}>
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
              setFocusIndex(Math.max(0, focusIndex - 1));
            }

            if (key === (direction === 'up' ? 'ArrowUp' : 'ArrowDown')) {
              setFocusIndex(Math.min(options.length - 1, focusIndex + 1));
            }

            prevent();
          }}
        />
        <Box position="relative">
          <Dismissible active={isFocused} onDismiss={() => setIsFocused(false)}>
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
              onClick={() => (isOpened ? close() : open(-1))}
              {...restProps}
            >
              <HStack width="100%">
                <Box as="span" flex={1}>
                  {selectedOption ? (
                    <Box flexDirection={inlineLabel ? 'row' : 'column'}>
                      {Boolean(label) && (
                        <>
                          <Body level={2} color={labelColor} lineLimit={1} wordBreak="break-all" wordWrap="break-word">
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
                        wordBreak="break-all"
                        wordWrap="break-word"
                        lineLimit={1}
                      >
                        {selectedOption.label}
                      </Body>
                    </Box>
                  ) : (
                    <Body level={2} color={labelColor} lineLimit={1} wordBreak="break-all" wordWrap="break-word">
                      {label || placeholder}
                    </Body>
                  )}
                </Box>
                <Space width={12} />
                <Icon.ArrowTriangleDown.Regular
                  size={20}
                  fill={disabled ? 'onView3' : state === 'error' ? 'error' : 'onView1'}
                />
              </HStack>
            </PressableBox>
          </Dismissible>
          <Dismissible active={isOpened} onDismiss={close}>
            <Box
              position="absolute"
              zIndex={1}
              width="100%"
              maxHeight={[optionGroupMaxHeight, optionGroupMaxHeight, 320]}
              hidden={!isOpened}
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
              />
            </Box>
          </Dismissible>
        </Box>
        {Boolean(helperText) && (
          <Body level={4} color={state === 'error' ? 'error' : 'onView2'} wordBreak="keep-all" wordWrap="break-word">
            {helperText}
          </Body>
        )}
      </Box>
    );
  }
);
