import { useEffect, useState } from 'react';
import { Box, PressableBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { withSwitchVariation } from './SwitchProps';

export const Switch = withSwitchVariation(
  ({
    defaultValue,
    opacity,
    roundRadius,
    roundSize,
    onValueChange,
    borderRadius,
    height,
    disabled,
    width,
    testId = 'switch',
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
          opacity,
          backgroundColor: isChecked ? 'informative' : 'surface4',
        }}
        duration={200}
      >
        <PressableBox
          as="button"
          role="switch"
          ariaChecked={isChecked}
          width={width}
          height={height}
          borderRadius={borderRadius}
          p={3}
          onClick={toggleChecked}
          disabled={disabled}
          data-testid={testId}
        >
          <Transition animation={{ x: isChecked ? roundSize : 0 }} duration={200}>
            <Box width={roundSize} height={roundSize} borderRadius={roundRadius} backgroundColor="white" />
          </Transition>
        </PressableBox>
      </Transition>
    );
  }
);
