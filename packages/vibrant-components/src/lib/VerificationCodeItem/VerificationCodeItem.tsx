import { Box } from '@vibrant-ui/core';
import { withVerificationCodeItemVariation } from './VerificationCodeItemProps';

export const VerificationCodeItem = withVerificationCodeItemVariation(({ inputId, value, ...restProps }) => (
  <Box
    as="label"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={44}
    height={60}
    typography="title1"
    fontWeight="extraBold"
    textAlign="center"
    borderWidth={1}
    borderStyle="solid"
    cursor="text"
    htmlFor={inputId}
    onMouseDown={event => {
      if (document.activeElement?.id === inputId) {
        event.preventDefault();
      }
    }}
    {...restProps}
  >
    {value}
  </Box>
));
