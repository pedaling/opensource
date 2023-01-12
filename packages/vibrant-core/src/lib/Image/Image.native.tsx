import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { ExternalComponent } from '../ExternalComponent';
import type { ImagePropType } from './Image';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, loading, innerRef, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();
  const imageProps: ImagePropType = [];

  if (Array.isArray(src)) {
    for (let index = 0; index < src.length; index++) {
      const display = new Array(src.length).fill('none');

      display[index] = 'flex';

      imageProps.push({ src: src[index], display });
    }
  } else {
    imageProps.push({ src, display: 'flex' });
  }

  if (image) {
    return (
      <>
        {imageProps.map(({ src, display }) => (
          <ExternalComponent
            name="image"
            key={src}
            ref={innerRef}
            loading={loading}
            alt={alt}
            src={src}
            display={display}
            {...props}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {imageProps.map(({ src, display }) => (
        <Box
          accessibilityLabel={alt}
          key={src}
          base={NativeImage}
          source={{
            uri: src,
          }}
          display={display}
          {...props}
        />
      ))}
    </>
  );
});
