import { Box } from '@vibrant-ui/core';
import { Ratio } from '../../Ratio';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonImageVariation } from './SkeletonImageProps';

export const SkeletonImage = withSkeletonImageVariation(({ width = '100%', ratio }) => (
  <SkeletonMotion>
    <Ratio width={width} ratio={ratio}>
      <Box backgroundColor="disable" borderRadiusLevel={1} width="100%" height="100%" />
    </Ratio>
  </SkeletonMotion>
));
