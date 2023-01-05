import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { ExternalComponent } from '../ExternalComponent';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();

  if (image) {
    return <ExternalComponent name="image" src={src} {...props} />;
  }

  return (
    <Box
      base={NativeImage}
      source={{
        uri: src,
      }}
      accessibilityLabel={alt}
      {...props}
    />
  );
});
