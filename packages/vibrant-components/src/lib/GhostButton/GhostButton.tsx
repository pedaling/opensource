import { Text } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { withGhostButtonVariation } from './GhostButtonProps';

export const GhostButton = withGhostButtonVariation(
  ({
    innerRef,
    type = 'button',
    IconComponent,
    disabled,
    typography,
    fontWeight,
    DisclosureIconComponent,
    iconSize,
    children,
    color,
    ...restProps
  }) => (
    <Pressable
      {...restProps}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['focus', 'active']}
      hitSlop={8}
      borderRadiusLevel={1}
      disabled={disabled}
    >
      <HStack as="span" alignVertical="center" alignHorizontal="center">
        {IconComponent && <IconComponent size={iconSize} fill={color} />}
        <Text
          typography={typography}
          fontWeight={fontWeight}
          color={color}
          ml={IconComponent ? 6 : 0}
          mr={DisclosureIconComponent ? 4 : 0}
        >
          {children}
        </Text>
        {DisclosureIconComponent && <DisclosureIconComponent size={iconSize} fill={color} />}
      </HStack>
    </Pressable>
  )
);
