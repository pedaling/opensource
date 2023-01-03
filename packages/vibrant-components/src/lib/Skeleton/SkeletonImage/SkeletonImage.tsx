import { Box } from '@vibrant-ui/core';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonImageVariation } from './SkeletonImageProps';

export const SkeletonImage = withSkeletonImageVariation(({ width = '100%' }) => (
  <SkeletonMotion>
    {/* MEMO(Mia): Ratio 컴포넌트 개발 완료되면 ratio 대응되도록 수정합니다. */}
    <Box backgroundColor="surface1" borderRadiusLevel={1} width={width} />
  </SkeletonMotion>
));
