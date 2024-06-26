import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(
  ({ innerRef, src, alt, loading, draggable = false, testId = 'image', sizes, ...props }) => {
    const {
      dependencies: { image: ImageComponent },
    } = useConfig();

    const responsiveValueLength = Array.isArray(src) ? src.length : 1;

    const imageProps = (Array.isArray(src) ? src : [src]).map((value, index) => {
      const display = new Array(responsiveValueLength).fill('none');

      display[index] = 'flex';

      return { src: typeof value === 'string' ? value : '', display };
    });

    if (ImageComponent) {
      return (
        <>
          {imageProps.map(({ src, display }, index) => (
            <ImageComponent
              key={`${src}_${index}`}
              data-testid={testId}
              ref={innerRef}
              loading={loading}
              alt={alt}
              src={src}
              display={display}
              sizes={sizes}
              draggable={draggable}
              {...props}
            />
          ))}
        </>
      );
    }

    return (
      <>
        {imageProps.map(({ src, display }, index) => (
          <Box
            key={`${src}_${index}`}
            as="img"
            data-testid={testId}
            ref={innerRef}
            loading={loading}
            alt={alt}
            src={src}
            display={display}
            draggable={draggable}
            {...props}
          />
        ))}
      </>
    );
  }
);
