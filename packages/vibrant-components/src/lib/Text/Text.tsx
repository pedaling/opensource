import { Box } from '@vibrant-ui/core';
import { withTextVariation } from './TextProps';

const newlineRegex = /(\r\n|\n\r|\r|\n|\\n)/g;

const nl2br = (value: any) => {
  if (typeof value !== 'string') {
    return value;
  }

  return value.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return <Box as="br" key={index} />;
    }

    return line;
  });
};

export const Text = withTextVariation(({ innerRef, as = 'span', kind, weight, children, ...restProps }) => (
  <Box as={as} ref={innerRef} typography={kind} fontWeight={weight} {...restProps}>
    {nl2br(children)}
  </Box>
));
