import { PressableBox, Text } from '@vibrant-ui/core';
import { withVerificationCodeItemVariation } from './VerificationCodeItemProps';

export const VerificationCodeItem = withVerificationCodeItemVariation(({ value, ...restProps }) => (
  <PressableBox
    data-testid="VerificationCodeItem"
    as="div"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={44}
    height={60}
    borderWidth={1}
    borderStyle="solid"
    borderRadius={2}
    cursor="text"
    backgroundColor="surface2"
    {...restProps}
  >
    <Text typography="title1" fontWeight="extraBold" textAlign="center">
      {value}
    </Text>
  </PressableBox>
));
