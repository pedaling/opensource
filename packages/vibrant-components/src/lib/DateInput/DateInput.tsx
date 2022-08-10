import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { withDateInputVariation } from './DateInputProps';

export const DateInput = withDateInputVariation(
  ({ innerRef, value, placeholder, onClear, calendarOpened, onClick, disabled }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Box<typeof Pressable>
        ref={innerRef}
        base={Pressable}
        width="100%"
        borderWidth={1}
        borderStyle="solid"
        borderColor={isFocused || calendarOpened ? 'outlineNeutral' : 'outline1'}
        typography="body2"
        color={value ? 'onView1' : 'onView2'}
        p={16}
        backgroundColor="surface3"
        onClick={onClick}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <HStack alignItems="center" spacing={12}>
          <Box flexGrow={1}>
            <Body level={2} textAlign="left">
              {value || placeholder}
            </Body>
          </Box>
          <Pressable as="button" onClick={onClear}>
            <Icon.CloseCircle.Fill size={20} fill="onView2" />
          </Pressable>
          <Icon.Calendar.Regular size={20} fill="onView2" />
        </HStack>
      </Box>
    );
  }
);
