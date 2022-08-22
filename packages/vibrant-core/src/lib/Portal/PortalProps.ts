import type { ReactElementChild } from '../../types/ReactElementChild';
import { withVariation } from '../withVariation';

type PortalProps = {
  children: ReactElementChild;
};

export const withPortalVariation = withVariation<PortalProps>('Portal')();
