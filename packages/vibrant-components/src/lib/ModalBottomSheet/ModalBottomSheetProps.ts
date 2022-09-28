import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type ModalBottomSheetProps = {
  open?: boolean;
  title?: string;
  subtitle?: string;
  overflow?: 'scroll' | 'visible';
  size?: 'lg' | 'md';
  renderContents: (close: () => void) => ReactElementChild;
  renderOpener: (open: () => void) => ReactElementChild;
} & (
  | {
      primaryCta: string;
      onPrimaryCtaOnClick: () => void;
      secondaryCta?: never;
      onSecondaryCtaOnClick?: never;
      subCta?: string;
      onSubCtaOnClick?: () => void;
    }
  | {
      primaryCta: string;
      onPrimaryCtaOnClick: () => void;
      secondaryCta?: string;
      onSecondaryCtaOnClick?: () => void;
      subCta?: never;
      onSubCtaOnClick?: never;
    }
  | {
      primaryCta?: never;
      onPrimaryCtaOnClick?: never;
      secondaryCta?: never;
      onSecondaryCtaOnClick?: never;
      subCta?: never;
      onSubCtaOnClick?: never;
    }
);

export const withModalBottomSheetVariation = withVariation<ModalBottomSheetProps>('ModalBottomSheet')(
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg' as const,
      },
    ],
    variants: {
      md: {
        modalWidth: 480,
      },
      lg: {
        modalWidth: 760,
      },
    },
  })
);
