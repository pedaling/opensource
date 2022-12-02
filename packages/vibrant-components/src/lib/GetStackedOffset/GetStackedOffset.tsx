import { useStackedOffset } from '@vibrant-ui/core';
import { withGetStackedOffsetVariation } from './GetStackedOffsetProps';

export const GetStackedOffset = withGetStackedOffsetVariation(({ position, children }) => {
  const { offset } = useStackedOffset({ position });

  return children({ offset: offset ?? 0 });
});
