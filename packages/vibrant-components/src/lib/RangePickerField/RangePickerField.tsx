import { useEffect, useRef, useState } from 'react';
import { Box, OverlayBox, getElementPosition } from '@vibrant-ui/core';
import type { TargetElement } from '@vibrant-ui/utils';
import { getDateString, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
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

    const handleDismiss = () => {
      setIsCalendarOpened(false);
      if (!value?.end) {
        setValue(undefined);
      }
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
          ref={inputRef}
          value={inputValue}
          onClick={openCalendar}
          disabled={disabled}
          onClear={() => setValue(undefined)}
          placeholder={placeholder}
          label={label}
          calendarOpened={isCalendarOpened}
          helperText={helperText}
          state={state}
        />
        <OverlayBox
          open={isCalendarOpened}
          targetRef={inputRef}
          onDismiss={handleDismiss}
          left={0}
          {...{ [calendarPosition === 'top' ? 'bottom' : 'top']: 56 }}
        >
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
        </OverlayBox>
      </Box>
    );
  }
);
