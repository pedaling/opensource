import { Image as NativeImage } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { ExternalComponent } from '../ExternalComponent';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, loading, objectFit, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();

  if (Array.isArray(src)) {
    const basicDisplay = new Array(src.length).fill('none');

    return (
      <>
        {src.map((currentSrc, idx) => {
          const display = [...basicDisplay];

          display[idx] = 'flex';

          if (image) {
            <Box display={display}>
              <ExternalComponent name="image" src={currentSrc} loading={loading} objectFit={objectFit} />
            </Box>;
          }

          return (
            <Box
              base={NativeImage}
              display={display}
              key={currentSrc}
              as="img"
              source={{
                uri: currentSrc,
              }}
              {...props}
            />
          );
        })}
      </>
    );
  }

  return (
    <Box
      base={NativeImage}
      as="img"
      source={{
        uri: src,
      }}
      {...props}
    />
  );
});
