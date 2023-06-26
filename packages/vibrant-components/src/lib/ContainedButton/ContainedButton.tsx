import { Text } from '@vibrant-ui/core';
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
    testId = 'contained-button',
    ...restProps
  }) => (
    <Pressable
      {...restProps}
      data-testid={testId}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['hover', 'focus', 'active']}
      overlayColor={onColor}
      borderRadiusLevel={1}
      disabled={loading || disabled}
    >
      <HStack
        as="span"
        opacity={loading ? 0 : 1}
        columnGap={contentsSpacing}
        alignVertical="center"
        alignHorizontal="center"
      >
        {IconComponent && <IconComponent size={iconSize} testId="icon-box" mx={2} />}
        {Boolean(children) && (
          <Text data-testid="button-text" typography={typography} fontWeight="bold" mx={4}>
            {children}
          </Text>
        )}
        {DisclosureIconComponent && <DisclosureIconComponent testId="disclosure-box" size={disclosureSize} ml={2} />}
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
    </Pressable>
  )
);
