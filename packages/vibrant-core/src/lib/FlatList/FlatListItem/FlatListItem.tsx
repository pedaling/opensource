import { isDefined, useCallbackRef, useComposedRef, useInView } from '@vibrant-ui/utils';
import { Box } from '../../Box';
import { withFlatListItemVariation } from './FlatListItemProps';

export const FlatListItem = withFlatListItemVariation(({ onImpressed, innerRef, ...props }) => {
  const { ref } = useInView({ initialInView: true, onChange: inView => inView && onImpressed?.() });

  const memoizedRef = useCallbackRef(innerRef);
  const composeRef = useComposedRef(memoizedRef, ref);

  return <Box as="li" ref={isDefined(onImpressed) ? composeRef : memoizedRef} {...props} />;
});
