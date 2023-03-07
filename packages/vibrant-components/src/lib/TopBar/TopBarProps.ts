import type { ReactElementChild, TextChildren, TextElements } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';
import type { Either } from '@vibrant-ui/utils';

export type TopBarProps = {
  as?: 'div' | 'header';
  title: TextChildren;
  titleAs?: Extract<TextElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  renderRight?: () => ReactElementChild[];
  backgroundColor?: BaseColorToken;
  testId?: string;
} & Either<
  {
    kind?: 'default';
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
        default: 'default',
      },
    ],
    variants: {
      emphasis: {
        titleLevel: 3 as const,
        titleCentered: false,
      },
      default: {
        titleLevel: 5 as const,
        titleCentered: true,
      },
    },
  })
);
