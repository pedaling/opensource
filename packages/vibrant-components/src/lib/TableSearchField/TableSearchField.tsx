import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { TextInput } from '@vibrant-ui/core';
import { withTableSearchFieldVariation } from './TableSearchFieldProps';

export const TableSearchField = withTableSearchFieldVariation(
  ({ defaultValue, onValueChange, width = 250, ...restProps }) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const inputRef = useRef<TextInputRef>(null);

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    return (
      <TextInput
        maxWidth={320}
        borderRadius={1}
        borderWidth={1}
        borderStyle="solid"
        borderColor="outline1"
        width={width}
        ref={inputRef}
        type="text"
        px={15}
        py={8}
        backgroundColor="transparent"
        typography="body2"
        color="onView1"
        placeholderColor="onView3"
        defaultValue={value}
        onValueChange={({ value, prevent }) => {
          let isPrevented = false;

          onValueChange?.({
            value,
            prevent: () => {
              isPrevented = true;

              prevent();
            },
          });

          if (!isPrevented) {
            setValue(value);
          }
        }}
        {...restProps}
      />
    );
  }
);
