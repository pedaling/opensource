import type { ResponsiveValue } from '../../types';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, loading, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();
  const imageProps = new Map<number, { src: string; display: ResponsiveValue<'flex' | 'none'> }>();

  if (Array.isArray(src)) {
    const basicDisplay = new Array(src.length).fill('none');

    for (let index = 0; index < src.length; index++) {
      const display = [...basicDisplay];

      display[index] = 'flex';

      imageProps.set(index, { src: src[index], display });
    }
  } else {
    imageProps.set(0, { src, display: 'flex' });
  }

  if (image) {
    return (
      <>
        {[...imageProps.values()].map(({ src, display }) => (
          <Box base={image} key={src} loading={loading} alt={alt} src={src} display={display} {...props} />
        ))}
      </>
    );
  }

  return (
    <>
      {[...imageProps.values()].map(({ src, display }) => (
        <Box as="img" key={src} loading={loading} alt={alt} src={src} display={display} {...props} />
      ))}
    </>
  );
});
