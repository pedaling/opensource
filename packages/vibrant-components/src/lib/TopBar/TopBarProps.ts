import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';
import type { Either } from '@vibrant-ui/utils';

export type TopBarProps = {
  title: string;
  renderRight?: () => ReactElementChild[];
  backgroundColor?: BaseColorToken;
} & Either<
  {
    kind: 'regular';
    renderLeft?: () => ReactElementChild[];
  },
  {
    kind: 'emphasis';
    renderLeft?: never;
  }
>;

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
