import { useEffect, useState } from 'react';
import { Box } from '@vibrant-ui/core';
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
          value={inputValue}
          onClick={() => setIsCalendarOpened(true)}
          disabled={disabled}
          onClear={() => setValue(undefined)}
          placeholder={placeholder}
          calendarOpened={isCalendarOpened}
          label={label}
          state={state}
          helperText={helperText}
        />
        <Dismissible active={isCalendarOpened} onDismiss={() => setIsCalendarOpened(false)}>
          <Box position="absolute" top={56} left={0} hidden={!isCalendarOpened}>
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
