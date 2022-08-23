import type { ReactElement, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';

type SelectOptionItemProps = {
  children: ReactElement | string;
  onClick: () => void;
  active?: boolean;
  ref?: Ref<HTMLElement>;
};

export const withSelectOptionItemVariation = withVariation<SelectOptionItemProps>('SelectOptionItem')();
