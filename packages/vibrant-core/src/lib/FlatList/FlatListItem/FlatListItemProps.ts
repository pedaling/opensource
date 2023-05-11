import type { ReactElement } from 'react';
import type {
  DisplaySystemProps,
  FlexboxSystemProps,
  PositionSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { withVariation } from '../../withVariation';

export type FlatListItemProps = {
  children: ReactElement | null;
  onImpressed?: () => void;
  ref?: any;
} & Pick<SpacingSystemProps, 'ml' | 'mr' | 'mt'> &
  Pick<FlexboxSystemProps, 'flex' | 'flexShrink'> &
  Pick<DisplaySystemProps, 'display'> &
  Pick<SizingSystemProps, 'width'> &
  Pick<PositionSystemProps, 'snapAlignment'>;

export const withFlatListItemVariation = withVariation<FlatListItemProps>('FlatListItem')();
