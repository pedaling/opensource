import { Text } from '@vibrant-ui/core';
import { withDisplayVariation } from './DisplayProps';

export const Display = withDisplayVariation(({ innerRef, ...restProps }) => <Text ref={innerRef} {...restProps} />);
