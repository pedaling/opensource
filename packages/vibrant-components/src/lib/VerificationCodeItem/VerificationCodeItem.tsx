import { Box } from '@vibrant-ui/core';
import { Text } from '../Text';
import { withVerificationCodeItemVariation } from './VerificationCodeItemProps';

export const VerificationCodeItem = withVerificationCodeItemVariation(({ inputId, value, ...restProps }) => (
  <Box<undefined, 'label'>
    as="label"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={44}
    height={60}
    borderWidth={1}
    borderStyle="solid"
    borderRadius={2}
    cursor="text"
    htmlFor={inputId}
    onMouseDown={event => {
      if (document.activeElement?.id === inputId) {
        event.preventDefault();
      }
    }}
    {...restProps}
  >
    <Text kind="title1" weight="extraBold" textAlign="center">
      {value}
    </Text>
  </Box>
));
