import { useEffect, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { toZeroPadded, useSafeDeps } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { DatePicker } from '../DatePicker';
import { Pressable } from '../Pressable';
import { withDatePickerFieldVariation } from './DatePickerFieldProps';

export const DatePickerField = withDatePickerFieldVariation(({ defaultValue, onValueChange, id, ...restProps }) => {
  const [value, setValue] = useState(defaultValue);
  const [isPickerOpened, setIsPickerOpened] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue?.toDateString() ?? '');
  const onValueChangeRef = useSafeDeps(onValueChange);

  const getDateString = (date: Date) =>
    `${date.getFullYear()}-${toZeroPadded(date.getMonth() + 1, 2)}-${toZeroPadded(date.getDate(), 2)}`;

  useEffect(() => {
    if (!defaultValue) {
      return;
    }

    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!value) {
      return;
    }

    onValueChangeRef.current?.(value);

    setInputValue(getDateString(value));
  }, [onValueChangeRef, value]);

  return (
    <Box position="relative" width="100%" height={50}>
      <Box<typeof Pressable>
        base={Pressable}
        width="100%"
        height="100%"
        borderWidth={1}
        borderColor="outline1"
        typography="body2"
        p={16}
        backgroundColor="surface3"
        onFocus={() => setIsPickerOpened(true)}
        onBlur={() => setIsPickerOpened(false)}
        {...restProps}
      >
        <Body level={2}>{inputValue}</Body>
      </Box>
      {isPickerOpened && (
        <Box
          base={Pressable}
          position="absolute"
          onFocus={() => setIsPickerOpened(true)}
          onBlur={() => setIsPickerOpened(false)}
          top={56}
          left={0}
        >
          <DatePicker
            range={false}
            date={value}
            onDateSelect={selectedDate => {
              setValue(selectedDate);

              setIsPickerOpened(false);
            }}
          />
        </Box>
      )}
    </Box>
  );
});
