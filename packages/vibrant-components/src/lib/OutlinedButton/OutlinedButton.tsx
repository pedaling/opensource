import { Text } from '@vibrant-ui/core';
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
    DisclosureIconComponent,
    loading,
    disabled,
    typography,
    spinnerSize,
    iconSize,
    disclosureSize,
    children,
    contentsSpacing,
    testId = 'outlined-button',
    ...restProps
  }) => (
    <Pressable
      {...restProps}
      data-testid={testId}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['hover', 'focus', 'active']}
      overlayColor="onView1"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={1}
      borderStyle="solid"
      borderRadiusLevel={1}
      disabled={loading || disabled}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      opacity={loading ? 0 : 1}
      gap={contentsSpacing}
    >
      {IconComponent && <IconComponent size={iconSize} mx={2} />}
      {Boolean(children) && (
        <Text typography={typography} fontWeight="bold" mx={4}>
          {children}
        </Text>
      )}
      {DisclosureIconComponent && <DisclosureIconComponent size={disclosureSize} ml={2} />}

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
    </Pressable>
  )
);
