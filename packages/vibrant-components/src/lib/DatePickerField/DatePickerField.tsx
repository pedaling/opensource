import { useEffect, useRef, useState } from 'react';
import { Box, getElementPosition } from '@vibrant-ui/core';
import type { TargetElement } from '@vibrant-ui/utils';
import { getDateString, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { Dismissible } from '../Dismissible';
import { withDatePickerFieldVariation } from './DatePickerFieldProps';

export const DatePickerField = withDatePickerFieldVariation(
  ({ defaultValue, disabled, label, state, helperText, onValueChange, placeholder }) => {
    const [value, setValue] = useState(defaultValue);
    const [isCalendarOpened, setIsCalendarOpened] = useState(false);
    const [inputValue, setInputValue] = useState(defaultValue ? getDateString(defaultValue) : '');
    const onValueChangeRef = useSafeDeps(onValueChange);
    const inputRef = useRef<TargetElement>(null);
    const [calendarPosition, setCalendarPosition] = useState('bottom');

    const openCalendar = async () => {
      if (!inputRef.current) {
        return;
      }

      const { top, bottom } = await getElementPosition(inputRef.current);

      setCalendarPosition(top > bottom ? 'top' : 'bottom');

      setIsCalendarOpened(true);
    };

    useEffect(() => {
      if (!defaultValue) {
        return;
      }

      setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
      if (!value) {
        setInputValue('');

        return;
      }

      onValueChangeRef.current?.(value);

      setInputValue(getDateString(value));
    }, [onValueChangeRef, value]);

    return (
      <Box position="relative" width="100%" height={50}>
        <DateInput
          ref={inputRef}
          value={inputValue}
          onClick={openCalendar}
          disabled={disabled}
          onClear={() => setValue(undefined)}
          placeholder={placeholder}
          calendarOpened={isCalendarOpened}
          label={label}
          state={state}
          helperText={helperText}
        />
        <Dismissible active={isCalendarOpened} onDismiss={() => setIsCalendarOpened(false)}>
          <Box
            position="absolute"
            left={0}
            hidden={!isCalendarOpened}
            {...{ [calendarPosition === 'top' ? 'bottom' : 'top']: 56 }}
          >
            <Calendar
              range={false}
              date={value}
              onDateSelect={selectedDate => {
                setValue(selectedDate);

                setIsCalendarOpened(false);
              }}
            />
          </Box>
        </Dismissible>
      </Box>
    );
  }
);
