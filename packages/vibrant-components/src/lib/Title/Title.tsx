import { Text } from '@vibrant-ui/core';
import { withTitleVariation } from './TitleProps';

export const Title = withTitleVariation(({ innerRef, ...restProps }) => <Text ref={innerRef} {...restProps} />);
