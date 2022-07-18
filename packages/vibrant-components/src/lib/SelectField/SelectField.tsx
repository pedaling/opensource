import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Body } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { Input } from '../Input';
import { SelectOptionGroup } from '../SelectOptionGroup';
import { Text } from '../Text';
import { withSelectFieldVariation } from './SelectFieldProps';

export const SelectField = withSelectFieldVariation(
  ({ label, placeholder, inlineLabel, options, state: stateProp = 'default', errorMessage, renderItem }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [direction, setDirection] = useState<'up' | 'down'>();
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupMaxHeight, setOptionGroupMaxHeight] = useState<string | number>('auto');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

    const ref = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = useMemo(() => uuid(), []);

    const labelColor = state === 'error' ? 'error' : 'onView2';
    const borderColor = isFocused ? 'outlineNeutral' : 'outline1';

    const selectedOption = options[selectedOptionIndex];

    useEffect(() => {
      setState('default');
    }, [selectedOptionIndex]);

    useEffect(() => {
      setState(stateProp);
    }, [stateProp]);

    const open = (index: number) => {
      if (!ref.current) {
        return;
      }

      inputRef.current?.focus();

      const { top, bottom } = ref.current.getBoundingClientRect();

      const spaceAbove = top;
      const spaceBelow = window.innerHeight - bottom;

      if (spaceAbove > spaceBelow) {
        setFocusIndex(selectedOptionIndex !== -1 ? selectedOptionIndex : options.length - 1 - index);

        setOptionGroupMaxHeight(spaceAbove - 44);

        setDirection('up');
      } else {
        setFocusIndex(selectedOptionIndex !== -1 ? selectedOptionIndex : index);

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

            if (key === 'ArrowUp') {
              setFocusIndex(Math.max(0, focusIndex - 1));

              prevent();
            }

            if (key === 'ArrowDown') {
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
            backgroundColor="surface3"
            borderWidth={1}
            borderStyle="solid"
            borderColor={state === 'error' ? 'error' : borderColor}
            borderRadius={2}
            typography="body2"
            color={selectedOption ? 'onView1' : 'onView2'}
            cursor="pointer"
            onMouseDown={event => {
              event.preventDefault();

              return isOpened ? close() : open(-1);
            }}
          >
            <Box display="flex" flexDirection={inlineLabel ? 'row' : 'column'} color={labelColor}>
              {selectedOption ? (
                <>
                  {label &&
                    (inlineLabel ? (
                      <Text kind="body2" color={labelColor}>
                        {label}
                        <Box as="span" color="onView2">
                          &nbsp;/&nbsp;
                        </Box>
                      </Text>
                    ) : (
                      <Text kind="body6" color={labelColor}>
                        {label}
                      </Text>
                    ))}
                  <Text kind="body2" color="onView1">
                    {selectedOption.label}
                  </Text>
                </>
              ) : (
                <Text kind="body2" color={labelColor}>
                  {label || placeholder}
                </Text>
              )}
            </Box>
          </Box>

          <SelectOptionGroup
            position="absolute"
            hidden={!isOpened}
            width="100%"
            maxHeight={[optionGroupMaxHeight, optionGroupMaxHeight, 320]}
            onItemClick={index => {
              setSelectedOptionIndex(direction === 'up' ? options.length - 1 - index : index);

              close();
            }}
            state={state}
            renderItem={renderItem}
            {...(direction === 'down'
              ? {
                  top: 54,
                  options,
                  focusIndex,
                }
              : {
                  bottom: 54,
                  options: [...options].reverse(),
                  focusIndex: options.length - 1 - focusIndex,
                })}
          />
        </Box>
        {state === 'error' && errorMessage && (
          <Body level={4} color="error" textAlign="center">
            {errorMessage}
          </Body>
        )}
      </Box>
    );
  }
);
