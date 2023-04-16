import { Box, PressableBox, isNative } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { withRadioVariation } from './RadioProps';
import { useRadio } from './useRadio';

export const Radio = withRadioVariation(
  ({
    innerRef,
    checked,
    value,
    label,
    description,
    iconSize,
    labelBodyLevel,
    labelPl,
    labelPt,
    descriptionBodyLevel,
    descriptionPt,
    descriptionPl,
    flexDirection,
    disabled,
  }) => {
    const { name, isChecked, isDisabled, onChange } = useRadio({ value, checked, disabled });

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
            {isChecked ? (
              <Icon.ToggleOn.Fill fill={isDisabled ? 'onView3' : 'onViewPrimary'} size={iconSize} />
            ) : (
              <Icon.ToggleOff.Thin fill="onView3" size={iconSize} />
            )}
          </Box>
          {label ? (
            <Body level={labelBodyLevel} pl={labelPl} pt={labelPt} color={isDisabled ? 'onView3' : 'onView1'}>
              {label}
            </Body>
          ) : null}
        </HStack>

        {description ? (
          <Body
            level={descriptionBodyLevel}
            pl={descriptionPl}
            pt={descriptionPt}
            color={isDisabled ? 'onView3' : 'onView2'}
          >
            {description}
          </Body>
        ) : null}
      </PressableBox>
    );
  }
);
