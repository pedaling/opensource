import { PressableBox, Text } from '@vibrant-ui/core';
import { withVerificationCodeItemVariation } from './VerificationCodeItemProps';

export const VerificationCodeItem = withVerificationCodeItemVariation(
  ({ value, testId = 'verification-code-item', ...restProps }) => (
    <PressableBox
      data-testid={testId}
      as="div"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={44}
      height={60}
      borderWidth={1}
      borderStyle="solid"
      rounded="sm"
      cursor="text"
      backgroundColor="surface2"
      {...restProps}
    >
      <Text typography="title1" fontWeight="extraBold" textAlign="center">
        {value}
      </Text>
    </PressableBox>
  )
);
