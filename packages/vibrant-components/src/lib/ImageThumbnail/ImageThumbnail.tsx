import { Box, Image } from '@vibrant-ui/core';
import { Ratio } from '../Ratio';
import { withImageThumbnailVariation } from './ImageThumbnailProps';

export const ImageThumbnail = withImageThumbnailVariation(
  ({ src, alt, borderRadius, aspectRatio, dim = true, loading, width = '100%' }) => (
    <Ratio ratio={aspectRatio} width={width}>
      {dim && <Box position="absolute" zIndex={2} width="100%" height="100%" backgroundColor="disable" />}
      <Image width="100%" height="100%" src={src} alt={alt} borderRadius={borderRadius} loading={loading} />
    </Ratio>
  )
);
