import { useEffect, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Pressable } from '../Pressable';
import { withSwitchVariation } from './SwitchProps';

export const Switch = withSwitchVariation(
  ({
    defaultValue,
    backgroundColor,
    activeColor,
    roundRadius,
    roundSize,
    inActiveBorderColor,
    onValueChange,
    borderRadius,
    height,
    disabled,
    width,
  }) => {
    const [isChecked, setIsChecked] = useState(defaultValue);

    useEffect(() => {
      setIsChecked(defaultValue);
    }, [defaultValue]);

    const toggleChecked = () => {
      setIsChecked(isCheckedState => !isCheckedState);

      onValueChange?.(!isChecked);
    };

    return (
      <Transition
        animation={{
          backgroundColor: isChecked ? activeColor : backgroundColor,
          borderColor: isChecked ? 'transparent' : inActiveBorderColor,
        }}
      >
        <Box
          base={Pressable}
          width={width}
          height={height}
          borderRadius={borderRadius}
          p={2}
          borderStyle="solid"
          borderWidth={1}
          onClick={toggleChecked}
          disabled={disabled}
        >
          <Transition animation={{ x: isChecked ? roundSize : 0 }}>
            <Box width={roundSize} height={roundSize} borderRadius={roundRadius} backgroundColor="onPrimary" />
          </Transition>
        </Box>
      </Transition>
    );
  }
);
