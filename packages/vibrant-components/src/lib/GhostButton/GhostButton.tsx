import { Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
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
    arrow,
    ArrowIconComponent,
    iconSize,
    children,
    disclosure,
    color = 'onView1',
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
      <HStack as="span" alignVertical="center">
        {IconComponent && <IconComponent size={iconSize} fill={color} />}
        <Text
          typography={typography}
          fontWeight={fontWeight}
          color={color}
          ml={IconComponent ? 6 : 0}
          mr={arrow || disclosure ? 4 : 0}
        >
          {children}
        </Text>
        {arrow && <ArrowIconComponent size={iconSize} fill={color} />}
        {disclosure && <Icon.ArrowTriangleDown.Fill size={iconSize} fill={color} />}
      </HStack>
    </Pressable>
  )
);
