import { Box } from '@vibrant-ui/core';
import { Ratio } from '../../Ratio';
import { withSkeletonImageVariation } from './SkeletonImageProps';

export const SkeletonImage = withSkeletonImageVariation(({ width = '100%', ratio }) => (
  <Ratio width={width} ratio={ratio}>
    <Box backgroundColor="disable" borderRadiusLevel={1} width="100%" height="100%" />
  </Ratio>
));
