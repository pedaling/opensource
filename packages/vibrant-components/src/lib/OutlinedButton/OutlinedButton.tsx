import { Box, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Spinner } from '../Spinner';
import { withOutlinedButtonVariation } from './OutlinedButtonProps';

export const OutlinedButton = withOutlinedButtonVariation(
  ({
    innerRef,
    type = 'button',
    backgroundColor,
    borderColor,
    IconComponent,
    disclosure,
    loading,
    disabled,
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
      overlayColor="onView1"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={1}
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
          <Text typography={typography} fontWeight="bold" ml={4} mr={disclosure ? 6 : 4}>
            {children}
          </Text>
          {disclosure && <Icon.ArrowTriangleDown.Fill size={disclosureSize} />}
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
