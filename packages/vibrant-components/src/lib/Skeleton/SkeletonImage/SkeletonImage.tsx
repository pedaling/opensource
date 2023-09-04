import { Box } from '@vibrant-ui/core';
import { Ratio } from '../../Ratio';
import { withSkeletonImageVariation } from './SkeletonImageProps';

export const SkeletonImage = withSkeletonImageVariation(
  ({ width = '100%', ratio, maxWidth, rounded = 'sm', ...props }) => (
    <Ratio width={width} ratio={ratio} maxWidth={maxWidth}>
      <Box backgroundColor="disable" width="100%" height="100%" rounded={rounded} {...props} />
    </Ratio>
  )
);
