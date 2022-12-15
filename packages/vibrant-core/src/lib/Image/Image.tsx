import { Box } from '../Box';
import { withImageVariation } from './ImageProps';

export const Image = withImageVariation(({ src, alt, ...props }) => <Box as="img" src={src} alt={alt} {...props} />);
