import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, OverlayBox, getElementPosition } from '@vibrant-ui/core';
import type { TargetElement } from '@vibrant-ui/utils';
import { getDateString, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { withDatePickerFieldVariation } from './DatePickerFieldProps';

export const DatePickerField = withDatePickerFieldVariation(
  ({ defaultValue, disabled, label, state, helperText, onValueChange, placeholder }) => {
    const [value, setValue] = useState(defaultValue);
    const [isCalendarOpened, setIsCalendarOpened] = useState(false);
    const onValueChangeRef = useSafeDeps(onValueChange);
    const inputRef = useRef<TargetElement>(null);
    const [calendarPosition, setCalendarPosition] = useState('bottom');

    const inputValue = useMemo(() => (value ? getDateString(value) : ''), [value]);

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

    const handleDateSelect = useCallback(
      (selectedDate: Date) => {
        if (!selectedDate) {
          return;
        }

        let isPrevented = false;

        onValueChangeRef.current?.({
          value: selectedDate,
          prevent: () => {
            isPrevented = true;
          },
        });

        if (!isPrevented) {
          setValue(selectedDate);
        }

        setIsCalendarOpened(false);
      },
      [onValueChangeRef]
    );

    const handleClear = useCallback(() => {
      let isPrevented = false;

      onValueChangeRef.current?.({
        value: undefined,
        prevent: () => {
          isPrevented = true;
        },
      });

      if (!isPrevented) {
        setValue(undefined);
      }
    }, [onValueChangeRef]);

    return (
      <Box position="relative" width="100%" height={50}>
        <DateInput
          ref={inputRef}
          value={inputValue}
          onClick={openCalendar}
          disabled={disabled}
          onClear={handleClear}
          placeholder={placeholder}
          calendarOpened={isCalendarOpened}
          label={label}
          state={state}
          helperText={helperText}
        />
        <OverlayBox
          open={isCalendarOpened}
          targetRef={inputRef}
          onDismiss={() => setIsCalendarOpened(false)}
          left={0}
          {...{ [calendarPosition === 'top' ? 'bottom' : 'top']: 56 }}
        >
          <Calendar range={false} date={value} onDateSelect={handleDateSelect} />
        </OverlayBox>
      </Box>
    );
  }
);
