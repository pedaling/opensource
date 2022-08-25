import { ScrollView } from 'react-native';
import { Box } from '../Box';
import { withScrollBoxVariation } from './ScrollBoxProps';

export const ScrollBox = withScrollBoxVariation(
  ({ innerRef, children, alwaysShowScroll = false, hideScroll = false, ...restProps }) => (
    <Box
      ref={innerRef}
      base={ScrollView}
      persistentScrollbar={alwaysShowScroll}
      showsHorizontalScrollIndicator={!hideScroll}
      showsVerticalScrollIndicator={!hideScroll}
      {...restProps}
    >
      {children}
    </Box>
  )
);
