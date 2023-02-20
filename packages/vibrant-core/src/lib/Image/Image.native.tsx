import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { ExternalComponent } from '../ExternalComponent';
import { useResponsiveValue } from '../useResponsiveValue';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, loading, innerRef, ...props }) => {
  const { getResponsiveValue } = useResponsiveValue();
  const {
    dependencies: { image },
  } = useConfig();

  const currentSrc = getResponsiveValue(src);

  if (image) {
    return <ExternalComponent name="image" ref={innerRef} loading={loading} alt={alt} src={currentSrc} {...props} />;
  }

  return <Box base={NativeImage} accessibilityLabel={alt} source={{ uri: currentSrc }} {...props} />;
});
