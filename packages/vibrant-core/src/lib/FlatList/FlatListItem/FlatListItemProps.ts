import type { ReactElement } from 'react';
import type { DisplaySystemProps, FlexboxSystemProps, SpacingSystemProps } from '@vibrant-ui/core';
import { withVariation } from '../../withVariation';

export type FlatListItemProps = {
  children: ReactElement | null;
  onImpressed?: () => void;
} & Pick<SpacingSystemProps, 'mr' | 'mt'> &
  Pick<FlexboxSystemProps, 'flex'> &
  Pick<DisplaySystemProps, 'display'>;

export const withFlatListItemVariation = withVariation<FlatListItemProps>('FlatListItem')();
