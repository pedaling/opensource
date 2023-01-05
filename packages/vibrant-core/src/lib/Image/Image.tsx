import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, ...props }) => {
  const {
    dependencies: { image },
  } = useConfig();

  if (image) {
    return <Box as="img" src={image.defaultProps?.src} alt={alt} {...props} />;
  }

  return <Box as="img" src={src} alt={alt} {...props} />;
});
