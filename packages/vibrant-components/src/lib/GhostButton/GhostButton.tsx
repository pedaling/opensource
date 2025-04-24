import { Text } from '@vibrant-ui/core';
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
      rounded="sm"
      disabled={disabled}
      data-testid={testId}
      flexDirection="row"
      alignItems="center"
      backgroundColor="transparent"
    >
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
    </Pressable>
  )
);
