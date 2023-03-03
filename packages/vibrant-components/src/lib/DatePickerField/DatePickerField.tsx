import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, OverlayBox, getElementPosition } from '@vibrant-ui/core';
import type { TargetElement } from '@vibrant-ui/utils';
import { getDateString, useComposedRef, useSafeDeps } from '@vibrant-ui/utils';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { withDatePickerFieldVariation } from './DatePickerFieldProps';

export const DatePickerField = withDatePickerFieldVariation(
  ({
    innerRef,
    defaultValue,
    disabled,
    label,
    state,
    helperText,
    onValueChange,
    placeholder,
    onOpen,
    zIndex,
    autoFocus,
  }) => {
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

      onOpen?.();
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

    const composeRef = useComposedRef(innerRef, inputRef);

    return (
      <Box position="relative" width="100%">
        <DateInput
          ref={composeRef}
          value={inputValue}
          onFocus={openCalendar}
          disabled={disabled}
          onClear={handleClear}
          placeholder={placeholder}
          calendarOpened={isCalendarOpened}
          label={label}
          state={state}
          helperText={helperText}
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
          <Calendar range={false} date={value} onDateSelect={handleDateSelect} />
        </OverlayBox>
      </Box>
    );
  }
);
