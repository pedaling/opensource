import type { ReactElement, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';

type PanelProps = {
  children: ReactElement | null;
  onImpressed?: () => void;
  ref: Ref<HTMLElement>;
  width: number;
  key: string;
  snapAlignment: 'center' | 'end' | 'start';
};

export const withPanelVariation = withVariation<PanelProps>('Panel')();
