import { Box, Image } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Ratio } from '../Ratio';
import { withImageThumbnailVariation } from './ImageThumbnailProps';

export const ImageThumbnail = withImageThumbnailVariation(
  ({
    src,
    alt = '',
    borderRadiusLevel,
    aspectRatio,
    dim = true,
    loading,
    width = '100%',
    testId = 'image-thumbnail',
  }) => (
    <Ratio
      data-testid={testId}
      ratio={aspectRatio}
      width={width}
      borderRadiusLevel={borderRadiusLevel}
      overflow={isDefined(borderRadiusLevel) ? 'hidden' : 'visible'}
    >
      {dim && (
        <Box
          data-testid={`${testId}-overlay`}
          position="absolute"
          zIndex={2}
          width="100%"
          height="100%"
          backgroundColor="surface1"
        />
      )}
      <Image data-testid={`${testId}-content`} width="100%" height="100%" src={src} alt={alt} loading={loading} />
    </Ratio>
  )
);
