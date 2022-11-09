import type { ReactElement } from 'react';
import { useInView } from '@vibrant-ui/utils';

export type InViewProps = {
  initialInView: boolean;
  onChange: (inView: boolean) => void;
  children: (_: { isInView: boolean; ref: (ref: any | null) => void }) => ReactElement;
  options?: IntersectionObserverInit;
};

export const InView = ({ initialInView, onChange, children, options }: InViewProps) => {
  const { ref, isInView } = useInView({ initialInView, onChange, options });

  return children({ ref, isInView });
};
