import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Pressable } from '../Pressable';
import { withSearchInputVariation } from './SearchInputProps';

export const SearchInput = withSearchInputVariation(({ defaultValue, onValueChange, ...restProps }) => {
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
        py={10}
        pl={16}
        pr={48}
        backgroundColor="surface1"
        typography="body2"
        color="onView1"
        placeholderColor="onView3"
        defaultValue={value}
        onChange={event => {
          setValue(event.value);

          onValueChange?.(event.value);
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
});
