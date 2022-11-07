import { Box, Text } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Spinner } from '../Spinner';
import { withContainedButtonVariation } from './ContainedButtonProps';

export const ContainedButton = withContainedButtonVariation(
  ({
    innerRef,
    type = 'button',
    IconComponent,
    DisclosureIconComponent,
    loading,
    disabled,
    onColor,
    typography,
    spinnerSize,
    iconSize,
    disclosureSize,
    children,
    ...restProps
  }) => (
    <Pressable
      {...restProps}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['hover', 'focus', 'active']}
      overlayColor={onColor}
      borderRadiusLevel={1}
      disabled={loading || disabled}
    >
      <>
        <HStack as="span" alignVertical="center" alignHorizontal="center" opacity={loading ? 0 : 1}>
          {IconComponent && (
            <Box as="span" mx={2}>
              <IconComponent size={iconSize} />
            </Box>
          )}
          {Boolean(children) && (
            <Text typography={typography} fontWeight="bold" mx={4}>
              {children}
            </Text>
          )}
          {DisclosureIconComponent && (
            <Box as="span" ml={2}>
              <DisclosureIconComponent size={disclosureSize} />
            </Box>
          )}
        </HStack>
        {loading && (
          <HStack
            as="span"
            alignVertical="center"
            alignHorizontal="center"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Spinner size={spinnerSize} />
          </HStack>
        )}
      </>
    </Pressable>
  )
);
