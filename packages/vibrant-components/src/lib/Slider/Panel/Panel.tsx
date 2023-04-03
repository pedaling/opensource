import { Box } from '@vibrant-ui/core';
import { isDefined, useComposedRef, useInView } from '@vibrant-ui/utils';
import { withPanelVariation } from './PanelProps';

export const Panel = withPanelVariation(({ onImpressed, innerRef, ...props }) => {
  const { ref } = useInView({ initialInView: true, onChange: inView => inView && onImpressed?.() });
  const compsedRef = useComposedRef(ref, innerRef);

  return <Box flexShrink={0} ref={isDefined(onImpressed) ? compsedRef : innerRef} {...props} />;
});
