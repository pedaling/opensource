import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Box } from '@vibrant-ui/core';
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
    ...restProps
  }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [direction, setDirection] = useState<'up' | 'down'>('down');
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupMaxHeight, setOptionGroupMaxHeight] = useState<string | number>('auto');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

    const ref = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = useMemo(() => uuid(), []);

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
      setState('default');
    }, [selectedOptionIndex]);

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
            display="flex"
            alignItems="center"
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
            <Box
              as="span"
              display="flex"
              flexDirection={inlineLabel ? 'row' : 'column'}
              wordBreak="break-all"
              wordWrap="break-word"
            >
              {selectedOption ? (
                <Box as="span" lineLimit={inlineLabel ? 1 : undefined}>
                  {label && (
                    <>
                      <Body level={2} color={labelColor} lineLimit={inlineLabel ? undefined : 1}>
                        {label}
                      </Body>
                      {inlineLabel && (
                        <Body level={2} color={disabled ? 'onView3' : 'onView2'}>
                          &nbsp;/&nbsp;
                        </Body>
                      )}
                    </>
                  )}
                  <Body level={2} color={disabled ? 'onView3' : 'onView1'} lineLimit={inlineLabel ? undefined : 1}>
                    {selectedOption.label}
                  </Body>
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
