import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Pressable } from '../Pressable';
import { withTableSearchFieldVariation } from './TableSearchFieldProps';

export const TableSearchField = withTableSearchFieldVariation(
  ({ defaultValue, onValueChange, width = 250, ...restProps }) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const inputRef = useRef<TextInputRef>(null);

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    return (
      <Box
        position="relative"
        maxWidth={320}
        borderRadius={1}
        borderWidth={1}
        borderStyle="solid"
        borderColor="outline1"
        width={width}
      >
        <TextInput
          ref={inputRef}
          type="text"
          py={8}
          pl={15}
          pr={48}
          backgroundColor="transparent"
          typography="body2"
          color="onView1"
          placeholderColor="onView3"
          lineHeight={1}
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
        <Box
          as="span"
          position="absolute"
          top={6.5}
          right={15}
          zIndex={1}
          cursor="text"
          onClick={() => inputRef.current?.focus()}
        >
          {value.length > 0 && (
            <Pressable onClick={() => inputRef.current?.clear()}>
              <Icon.CloseCircle.Fill size={20} fill="onView2" />
            </Pressable>
          )}
        </Box>
      </Box>
    );
  }
);
