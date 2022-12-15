import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, ...props }) => (
  <Box
    base={NativeImage}
    source={{
      uri: src,
    }}
    accessibilityLabel={alt}
    {...props}
  />
));
