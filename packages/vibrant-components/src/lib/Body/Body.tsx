import { Text } from '@vibrant-ui/core';
import { withBodyVariation } from './BodyProps';

export const Body = withBodyVariation(({ innerRef, ...restProps }) => <Text ref={innerRef} {...restProps} />);
