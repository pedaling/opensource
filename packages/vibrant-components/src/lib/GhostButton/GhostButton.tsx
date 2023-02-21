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
    arrow,
    ArrowIconComponent,
    iconSize,
    children,
    DisclosureIconComponent,
    color = 'onView1',
    testId = 'ghost-button',
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
      data-testid={testId}
    >
      <HStack as="span" alignVertical="center">
        {IconComponent && <IconComponent size={iconSize} fill={color} />}
        <Text
          typography={typography}
          fontWeight={fontWeight}
          color={color}
          ml={IconComponent ? 6 : 0}
          mr={arrow || DisclosureIconComponent ? 4 : 0}
          whiteSpace="nowrap"
        >
          {children}
        </Text>
        {arrow && <ArrowIconComponent size={iconSize} fill={color} />}
        {DisclosureIconComponent && <DisclosureIconComponent size={iconSize} fill={color} />}
      </HStack>
    </Pressable>
  )
);
