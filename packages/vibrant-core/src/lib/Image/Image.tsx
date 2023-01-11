import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, loading, objectFit, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();

  const Component = image ?? Box;

  if (Array.isArray(src)) {
    const basicDisplay = new Array(src.length).fill('none');

    return (
      <>
        {src.map((currentSrc, idx) => {
          const display = [...basicDisplay];

          display[idx] = 'flex';

          return (
            <Box key={currentSrc} display={display}>
              <Component as="img" src={currentSrc} objectFit={objectFit} loading={loading} {...props} />
            </Box>
          );
        })}
      </>
    );
  }

  return <Component as="img" src={src} alt={alt} {...props} />;
});
