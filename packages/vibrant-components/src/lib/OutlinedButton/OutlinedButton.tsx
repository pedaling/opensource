import { Box, Text } from '@vibrant-ui/core';
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
    weight,
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
      rounded="sm"
      disabled={loading || disabled}
    >
      <Box
        as="span"
        opacity={loading ? 0 : 1}
        flexDirection="row"
        gap={contentsSpacing}
        alignItems="center"
        justifyContent="center"
      >
        {IconComponent && <IconComponent size={iconSize} mx={2} />}
        {Boolean(children) && (
          <Text typography={typography} fontWeight={weight} mx={4}>
            {children}
          </Text>
        )}
        {DisclosureIconComponent && <DisclosureIconComponent size={disclosureSize} ml={2} />}
      </Box>

      {loading && (
        <Box
          as="span"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Spinner size={spinnerSize} />
        </Box>
      )}
    </Pressable>
  )
);
