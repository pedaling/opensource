import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';

export type TopBarProps = {
  title: string;
  kind: 'emphasis' | 'regular';
  renderLeft?: () => ReactElementChild[];
  renderRight?: () => ReactElementChild[];
  backgroundColor?: BaseColorToken;
};

export const withTopBarVariation = withVariation<TopBarProps>('TopBar')(
  propVariant({
    props: [
      {
        name: 'kind',
      },
    ],
    variants: {
      emphasis: {
        titleLevel: 3 as const,
        titleCentered: false,
      },
      regular: {
        titleLevel: 5 as const,
        titleCentered: true,
      },
    },
  })
);
