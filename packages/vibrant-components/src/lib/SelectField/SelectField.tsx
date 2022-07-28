import { useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { uuidV4 } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { Input } from '../Input';
import { SelectOptionGroup } from '../SelectOptionGroup';
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

    const ref = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = useMemo(() => uuidV4(), []);

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
    }, [onValueChange, selectedOption]);

    useEffect(() => {
      setState(stateProp);
    }, [stateProp]);

    const open = (index: number) => {
      if (!ref.current || disabled) {
        return;
      }

      inputRef.current?.focus();

      const { top, bottom } = ref.current.getBoundingClientRect();

      const spaceAbove = top;
      const spaceBelow = window.innerHeight - bottom;

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
      <Box as="div" onMouseDown={event => event.preventDefault()}>
        <Input
          ref={inputRef}
          id={inputId}
          position="absolute"
          width={0}
          height={0}
          value={selectedOption?.value ?? ''}
          readOnly={true}
          disabled={disabled}
          onKeyDown={({ key, prevent }) => {
            if (key === 'Enter') {
              if (!isOpened) {
                open(0);

                return;
              }

              if (focusIndex !== -1) {
                setSelectedOptionIndex(focusIndex);

                close();
              }
            }

            if (key === (direction === 'up' ? 'ArrowDown' : 'ArrowUp')) {
              setFocusIndex(Math.max(0, focusIndex - 1));

              prevent();
            }

            if (key === (direction === 'up' ? 'ArrowUp' : 'ArrowDown')) {
              setFocusIndex(Math.min(options.length - 1, focusIndex + 1));

              prevent();
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);

            close();
          }}
        />
        <Box position="relative">
          <Box
            ref={ref}
            as="label"
            htmlFor={inputId}
            alignItems="center"
            flexDirection="row"
            height={50}
            px={16}
            borderWidth={1}
            borderStyle="solid"
            borderColor={borderColor}
            borderRadius={2}
            cursor="pointer"
            onMouseDown={event => {
              event.preventDefault();

              return isOpened ? close() : open(-1);
            }}
            {...restProps}
          >
            <Box width="100%" overflowX="hidden">
              {selectedOption ? (
                <Box flexDirection={inlineLabel ? 'row' : 'column'}>
                  {label && (
                    <>
                      <Body
                        level={2}
                        color={labelColor}
                        maxWidth="100%"
                        lineLimit={1}
                        wordBreak="break-all"
                        wordWrap="break-word"
                      >
                        {label}
                      </Body>
                      {inlineLabel && (
                        <Body
                          level={2}
                          color={disabled ? 'onView3' : 'onView2'}
                          wordBreak="break-all"
                          wordWrap="break-word"
                        >
                          &nbsp;/&nbsp;
                        </Body>
                      )}
                    </>
                  )}
                  <Box flex={1}>
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
                </Box>
              ) : (
                <Body level={2} color={labelColor} lineLimit={1}>
                  {label || placeholder}
                </Body>
              )}
            </Box>
          </Box>

          <SelectOptionGroup
            position="absolute"
            hidden={!isOpened}
            width="100%"
            maxHeight={[optionGroupMaxHeight, optionGroupMaxHeight, 320]}
            onOptionClick={index => {
              setSelectedOptionIndex(index);

              close();
            }}
            state={state}
            renderOption={renderOption}
            reverse={direction === 'up'}
            options={options}
            focusIndex={focusIndex}
            {...(direction === 'down' ? { top: 54 } : { bottom: 54 })}
          />
        </Box>
        {helperText && (
          <Body level={4} color={state === 'error' ? 'error' : 'onView2'} wordBreak="keep-all" wordWrap="break-word">
            {helperText}
          </Body>
        )}
      </Box>
    );
  }
);
