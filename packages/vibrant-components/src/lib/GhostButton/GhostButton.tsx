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
    ...restProps
  }) => (
    <Pressable
      {...restProps}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['focus', 'active']}
      borderRadiusLevel={1}
      disabled={disabled}
    >
      <HStack as="span" alignVertical="center" alignHorizontal="center">
        {IconComponent && <IconComponent size={iconSize} />}
        <Text
          typography={typography}
          fontWeight={fontWeight}
          ml={IconComponent ? 6 : 0}
          mr={DisclosureIconComponent ? 4 : 0}
        >
          {children}
        </Text>
        {DisclosureIconComponent && <DisclosureIconComponent size={iconSize} />}
      </HStack>
    </Pressable>
  )
);
