import { Box, PressableBox, isNative } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { useRadioSize } from '../RadioGroupField/context/RadioSizeContext';
import {
  withRadioDescriptionVariation,
  withRadioIconVariation,
  withRadioLabelVariation,
  withRadioVariation,
} from './RadioProps';
import { useRadio } from './useRadio';

export const Radio = withRadioVariation(
  ({ innerRef, checked, value, label, description, size: sizeProp, direction, flexDirection, disabled }) => {
    const { name, isChecked, isDisabled, onChange } = useRadio({ value, checked, disabled });
    const radioGroupSize = useRadioSize();
    const size = radioGroupSize ?? sizeProp;

    return (
      <PressableBox
        as="label"
        flexDirection={flexDirection}
        width="100%"
        disabled={isDisabled}
        cursor={isDisabled ? 'default' : 'pointer'}
        onClick={isNative ? onChange : undefined}
        tabIndex={isNative ? 0 : -1}
      >
        <HStack as="span">
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
            <RadioIcon size={size} checked={isChecked} disabled={isDisabled} />
          </Box>
          {label ? <RadioLabel label={label} disabled={disabled} size={size} /> : null}
        </HStack>

        {description ? (
          <RadioDescription description={description} disabled={isDisabled} size={size} direction={direction} />
        ) : null}
      </PressableBox>
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

export const RadioIcon = withRadioIconVariation(({ size, checked, disabled }) =>
  checked ? (
    <Icon.ToggleOn.Fill fill={disabled ? 'onView3' : 'onViewPrimary'} size={size} />
  ) : (
    <Icon.ToggleOff.Thin fill="onView3" size={size} />
  )
);
