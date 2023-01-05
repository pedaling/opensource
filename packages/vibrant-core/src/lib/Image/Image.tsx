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

  return <Box as="img" src={src} alt={alt} {...props} />;
});
