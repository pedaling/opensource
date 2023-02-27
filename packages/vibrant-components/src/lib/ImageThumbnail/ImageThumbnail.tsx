import { Box, Image } from '@vibrant-ui/core';
import { Ratio } from '../Ratio';
import { withImageThumbnailVariation } from './ImageThumbnailProps';

export const ImageThumbnail = withImageThumbnailVariation(
  ({ src, alt = '', borderRadius, aspectRatio, dim = true, loading, width = '100%', testId = 'image-thumbnail' }) => (
    <Ratio data-testId={testId} ratio={aspectRatio} width={width}>
      {dim && (
        <Box
          data-testId={`${testId}-overlay`}
          borderRadius={borderRadius}
          position="absolute"
          zIndex={2}
          width="100%"
          height="100%"
          backgroundColor="surface1"
        />
      )}
      <Image
        data-testId={`${testId}-content`}
        width="100%"
        height="100%"
        borderRadius={borderRadius}
        src={src}
        alt={alt}
        loading={loading}
      />
    </Ratio>
  )
);
