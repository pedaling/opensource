import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Pressable } from '../Pressable';
import { withSearchFieldVariation } from './SearchFieldProps';

export const SearchField = withSearchFieldVariation(
  ({ defaultValue, onValueChange, kind = 'default', ...restProps }) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const inputRef = useRef<TextInputRef>(null);

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    return (
      <Box position="relative" width="100%">
        <TextInput
          ref={inputRef}
          type="text"
          py={9}
          pl={16}
          pr={48}
          backgroundColor={kind === 'default' ? 'surface1' : 'transparent'}
          typography="body1"
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
        <Box
          as="span"
          position="absolute"
          top={9}
          right={16}
          zIndex={1}
          cursor="text"
          onClick={() => inputRef.current?.focus()}
        >
          {value.length > 0 ? (
            <Pressable onClick={() => inputRef.current?.clear()}>
              <Icon.CloseCircle.Fill size={20} fill="onView2" />
            </Pressable>
          ) : (
            <Icon.Search.Regular size={20} fill="onView1" />
          )}
        </Box>
      </Box>
    );
  }
);
