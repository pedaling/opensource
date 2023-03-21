import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, OverlayBox, getElementPosition } from '@vibrant-ui/core';
import type { TargetElement } from '@vibrant-ui/utils';
import { getDateString, useComposedRef, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { withRangePickerFieldVariation } from './RangePickerFieldProps';

const getRangeString = (start: Date, end?: Date) => `${getDateString(start)} - ${end ? getDateString(end) : ''}`;

export const RangePickerField = withRangePickerFieldVariation(
  ({
    innerRef,
    defaultValue,
    onValueChange,
    label,
    disabled,
    placeholder,
    helperText,
    state,
    onOpen,
    zIndex,
    autoFocus,
    testId = 'range-picker-field',
    size,
  }) => {
    const [value, setValue] = useState<{ start: Date; end?: Date } | undefined>(defaultValue);
    const [isCalendarOpened, setIsCalendarOpened] = useState(false);
    const onValueChangeRef = useSafeDeps(onValueChange);
    const inputRef = useRef<TargetElement>(null);
    const [calendarPosition, setCalendarPosition] = useState('bottom');

    const inputValue = useMemo(() => (value ? getRangeString(value.start, value.end) : ''), [value]);

    const openCalendar = async () => {
      if (!inputRef.current) {
        return;
      }

      const { top, bottom } = await getElementPosition(inputRef.current);

      setCalendarPosition(top > bottom ? 'top' : 'bottom');

      setIsCalendarOpened(true);

      onOpen?.();
    };

    useEffect(() => {
      if (!value?.end) {
        setValue(undefined);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCalendarOpened]);

    useEffect(() => {
      if (!defaultValue) {
        return;
      }

      setValue(defaultValue);
    }, [defaultValue]);

    const handleDateRangeSelect = useCallback(
      (startDate: Date, endDate?: Date) => {
        if (!endDate) {
          setValue({ start: startDate, end: endDate });

          return;
        }

        let isPrevented = false;

        onValueChangeRef.current?.({
          value: { start: startDate, end: endDate },
          prevent: () => {
            isPrevented = true;
          },
        });

        if (!isPrevented) {
          setValue({ start: startDate, end: endDate });
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

    const composeRef = useComposedRef(innerRef, inputRef);

    return (
      <Box position="relative" width="100%" height={50} data-testid={testId}>
        <DateInput
          ref={composeRef}
          size={size}
          value={inputValue}
          onFocus={openCalendar}
          disabled={disabled}
          onClear={handleClear}
          placeholder={placeholder}
          label={label}
          calendarOpened={isCalendarOpened}
          helperText={helperText}
          state={state}
          autoFocus={autoFocus}
        />
        <OverlayBox
          open={isCalendarOpened}
          targetRef={inputRef}
          onDismiss={() => setIsCalendarOpened(false)}
          left={0}
          zIndex={zIndex}
          {...{ [calendarPosition === 'top' ? 'bottom' : 'top']: 56 }}
        >
          <Calendar
            range={true}
            startDate={value?.start}
            endDate={value?.end}
            onDateRangeSelect={handleDateRangeSelect}
          />
        </OverlayBox>
      </Box>
    );
  }
);
