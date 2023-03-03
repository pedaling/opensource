import { isDefined, useInView } from '@vibrant-ui/utils';
import { Box } from '../../Box';
import { withFlatListItemVariation } from './FlatListItemProps';

export const FlatListItem = withFlatListItemVariation(({ onImpressed, ...props }) => {
  const { ref } = useInView({ initialInView: true, onChange: inView => inView && onImpressed?.() });

  return <Box as="li" ref={isDefined(onImpressed) ? ref : null} {...props} />;
});
