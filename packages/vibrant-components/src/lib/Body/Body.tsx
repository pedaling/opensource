import { Text } from '@vibrant-ui/core';
import { withBodyVariation } from './BodyProps';

export const Body = withBodyVariation(props => <Text {...props} />);
