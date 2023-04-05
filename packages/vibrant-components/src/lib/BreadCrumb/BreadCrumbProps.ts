import type { TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

export type BreadCrumbProps = {
  children: TextChildren;
  highlight?: boolean;
  onClick?: () => void;
} & (
  | {
      href?: never;
      isExternal?: never;
    }
  | {
      href?: string;
      isExternal?: boolean;
    }
);

export const withBreadCrumbVariation = withVariation<BreadCrumbProps>('BreadCrumb')(
  propVariant({
    props: [
      {
        name: 'highlight',
        default: false,
      },
    ],
    variants: ({ highlight }) => ({
      color: (highlight ? 'onView1' : 'onView2') as ColorToken,
    }),
  })
);
