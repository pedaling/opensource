import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Body } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { Input } from '../Input';
import { SelectOptionGroup } from '../SelectOptionGroup/SelectOptionGroup';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { withSelectFieldVariation } from './SelectFieldProps';

export const SelectField = withSelectFieldVariation(
  ({ label, placeholder, inlineLabel, options, state: stateProp = 'default', errorMessage, renderItem }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [position, setPosition] = useState<'top' | 'bottom'>();
    const [focusIndex, setFocusIndex] = useState(-1);
    const [optionGroupHeight, setOptionGroupHeight] = useState<string | number>('auto');
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

    const ref = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = useMemo(() => uuid(), []);

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

      const { top, height } = ref.current.getBoundingClientRect();

      const remainTop = top;
      const remainBottom = window.innerHeight - remainTop - height;

      if (selectedOptionIndex !== -1) {
        setFocusIndex(selectedOptionIndex);
      } else {
        setFocusIndex(remainTop > remainBottom ? options.length - 1 - index : index);
      }

      setOptionGroupHeight(remainTop > remainBottom ? remainTop - 40 : remainBottom - 80);

      setPosition(remainTop > remainBottom ? 'top' : 'bottom');

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
            <Stack direction={inlineLabel ? 'horizontal' : 'vertical'}>
              {label && selectedOption && (
                <>
                  <Text kind={inlineLabel ? 'body2' : 'body6'} color={state === 'error' ? 'error' : 'onView2'}>
                    {label}
                  </Text>
                  {inlineLabel && (
                    <Box as="span" color="onView2">
                      &nbsp;/&nbsp;
                    </Box>
                  )}
                </>
              )}

              {selectedOption?.label || label || placeholder}
            </Stack>
          </Box>

          <SelectOptionGroup
            position="absolute"
            top={position === 'bottom' ? 54 : 'initial'}
            bottom={position === 'top' ? 54 : 'initial'}
            hidden={!isOpened}
            width="100%"
            height={[optionGroupHeight, optionGroupHeight, 'auto']}
            maxHeight={['initial', 'initial', 320]}
            options={options}
            focusIndex={focusIndex}
            onItemClick={index => {
              setSelectedOptionIndex(index);

              close();
            }}
            state={state}
            renderItem={renderItem}
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
