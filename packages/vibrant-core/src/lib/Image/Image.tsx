import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ innerRef, src, alt, loading, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();

  const responsiveValueLength = Array.isArray(src) ? src.length : 1;

  const imageProps = (Array.isArray(src) ? src : [src]).map((value, index) => {
    const display = new Array(responsiveValueLength).fill('none');

    display[index] = 'flex';

    return { src: typeof value === 'string' ? value : '', display };
  });

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
