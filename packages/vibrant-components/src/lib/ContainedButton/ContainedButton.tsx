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
    contentsSpacing,
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
        <HStack
          as="span"
          data-testid="content-box"
          alignVertical="center"
          alignHorizontal="center"
          opacity={loading ? 0 : 1}
          spacing={contentsSpacing}
        >
          {IconComponent && (
            <Box data-testid="icon-box" as="span" mx={2}>
              <IconComponent size={iconSize} />
            </Box>
          )}
          {Boolean(children) && (
            <Text data-testid="button-text" typography={typography} fontWeight="bold" mx={4}>
              {children}
            </Text>
          )}
          {DisclosureIconComponent && (
            <Box data-testid="disclosure-box" as="span" ml={2}>
              <DisclosureIconComponent size={disclosureSize} />
            </Box>
          )}
        </HStack>
        {loading && (
          <HStack
            data-testid="loading-box"
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
