import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(
  ({ innerRef, src, alt, loading, draggable: _draggable, sizes: _sizes, ...props }) => {
    const { getResponsiveValue } = useResponsiveValue();
    const {
      dependencies: { image },
    } = useConfig();

    const currentSrc = getResponsiveValue(src);

    if (image) {
      return <Box base={image} ref={innerRef} loading={loading} alt={alt} src={currentSrc} {...props} />;
    }

    return (
      <Box
        base={NativeImage}
        accessibilityLabel={alt}
        source={typeof currentSrc === 'string' ? { uri: currentSrc } : currentSrc}
        {...props}
      />
    );
  }
);
