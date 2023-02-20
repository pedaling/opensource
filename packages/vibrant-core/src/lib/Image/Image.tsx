import type { ResponsiveValue } from '../../types';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export type ImagePropType = {
  src: string;
  display: ResponsiveValue<'flex' | 'none'>;
}[];

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
          <Box
            key={src}
            base={image}
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
        <Box as="img" ref={innerRef} key={src} loading={loading} alt={alt} src={src} display={display} {...props} />
      ))}
    </>
  );
});
