import { useState } from 'react';
import { Box, PressableBox, isNative } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
import { getOpacity } from '../Pressable';
import { useRadioSize } from '../RadioGroupField/context/RadioSizeContext';
import {
  withRadioDescriptionVariation,
  withRadioIconVariation,
  withRadioLabelVariation,
  withRadioVariation,
} from './RadioProps';
import { useRadio } from './useRadio';

export const Radio = withRadioVariation(
  ({
    innerRef,
    testId,
    id,
    checked,
    value,
    label,
    description,
    size: sizeProp,
    direction,
    flexDirection,
    width,
    disabled,
  }) => {
    const { name, isChecked, isDisabled, onChange } = useRadio({ value, checked, disabled });
    const radioGroupSize = useRadioSize();
    const size = sizeProp ?? radioGroupSize;
    const [isActivated, setIsActivated] = useState(false);

    return (
      <Box id={id} data-testid={testId} flexDirection={flexDirection} width={width}>
        <PressableBox
          as="label"
          flexDirection="row"
          disabled={isDisabled}
          cursor={isDisabled ? 'default' : 'pointer'}
          onClick={isNative ? onChange : undefined}
          onPressIn={() => setIsActivated(true)}
          onPressOut={() => setIsActivated(false)}
          tabIndex={isNative ? 0 : -1}
        >
          <Box as="span">
            {!isNative ? (
              <Box
                ref={innerRef}
                as="input"
                name={name}
                type="radio"
                value={value}
                position="absolute"
                opacity={0}
                checked={isChecked}
                disabled={isDisabled}
                onChange={onChange}
                top={0}
                right={0}
                bottom={0}
                left={0}
              />
            ) : null}
            <RadioIcon size={size} checked={isChecked} disabled={isDisabled} active={isActivated} />
          </Box>
          {label ? <RadioLabel label={label} disabled={isDisabled} size={size} /> : null}
        </PressableBox>

        {description ? (
          <RadioDescription description={description} disabled={isDisabled} size={size} direction={direction} />
        ) : null}
      </Box>
    );
  }
);

export const RadioLabel = withRadioLabelVariation(({ bodyLevel, pl, pt, label, disabled }) => (
  <Body level={bodyLevel} pl={pl} pt={pt} color={disabled ? 'onView3' : 'onView1'}>
    {label}
  </Body>
));

export const RadioDescription = withRadioDescriptionVariation(({ bodyLevel, pl, pt, description, disabled }) => (
  <Body level={bodyLevel} pl={pl} pt={pt} color={disabled ? 'onView3' : 'onView2'}>
    {description}
  </Body>
));

export const RadioIcon = withRadioIconVariation(({ size, checked, disabled, active }) => {
  const { textOpacity } = getOpacity({
    interactions: ['active'],
    isActivated: active,
    disabled,
  });

  return (
    <Transition animation={{ opacity: textOpacity }}>
      {checked ? (
        <Icon.ToggleOn.Fill fill={disabled ? 'outlineDisable' : 'onViewPrimary'} size={size} />
      ) : (
        <Icon.ToggleOff.Thin fill={disabled ? 'outline1' : 'outline1'} size={size} />
      )}
    </Transition>
  );
});
