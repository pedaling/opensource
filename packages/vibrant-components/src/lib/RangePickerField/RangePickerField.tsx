import { useEffect, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { getDateString, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { Dismissible } from '../Dismissible';
import { withRangePickerFieldVariation } from './RangePickerFieldProps';

const getRangeString = (start: Date, end?: Date) => `${getDateString(start)} - ${end ? getDateString(end) : ''}`;

export const RangePickerField = withRangePickerFieldVariation(
  ({ defaultValue, onValueChange, label, disabled, placeholder, helperText, state }) => {
    const [value, setValue] = useState<{ start: Date; end?: Date } | undefined>(defaultValue);
    const [isCalendarOpened, setIsCalendarOpened] = useState(false);
    const [inputValue, setInputValue] = useState(() =>
      defaultValue ? getRangeString(defaultValue.start, defaultValue.end) : ''
    );
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

      const { start, end } = value;

      setInputValue(getRangeString(start, end));
      if (!end) {
        return;
      }

      onValueChangeRef.current?.({ start, end });

      return;
    }, [onValueChangeRef, value]);

    return (
      <Box position="relative" width="100%" height={50}>
        <DateInput
          value={inputValue}
          onClick={() => setIsCalendarOpened(true)}
          disabled={disabled}
          onClear={() => setValue(undefined)}
          placeholder={placeholder}
          label={label}
          calendarOpened={isCalendarOpened}
          helperText={helperText}
          state={state}
        />
        <Dismissible active={isCalendarOpened} onDismiss={() => setIsCalendarOpened(false)}>
          <Box position="absolute" top={56} left={0} hidden={!isCalendarOpened}>
            <Calendar
              range={true}
              startDate={value?.start}
              endDate={value?.end}
              onDateRangeSelect={(startDate, endDate) => {
                setValue({ start: startDate, end: endDate });

                if (!endDate) {
                  return;
                }

                setIsCalendarOpened(false);
              }}
            />
          </Box>
        </Dismissible>
      </Box>
    );
  }
);
