import type { ReactElementChild } from '@vibrant-ui/core';
import { Box, ScrollBox, propVariant, withVariation } from '@vibrant-ui/core';

export type ModalBottomSheetProps = {
  defaultOpen: boolean;
  title?: string;
  subtitle?: string;
  overflow?: 'scroll' | 'visible';
  size?: 'lg' | 'md';
  renderContents: (_: { close: () => void }) => ReactElementChild;
  renderOpener: (_: { open: () => void; isOpen: boolean }) => ReactElementChild;
  onClose?: () => void;
} & (
  | {
      primaryButtonText: string;
      onPrimaryButtonClick: () => void;
      secondaryButtonText?: never;
      onSecondaryButtonClick?: never;
      subButtonText?: string;
      onSubButtonClick?: () => void;
    }
  | {
      primaryButtonText: string;
      onPrimaryButtonClick: () => void;
      secondaryButtonText?: string;
      onSecondaryButtonClick?: () => void;
      subButtonText?: never;
      onSubButtonClick?: never;
    }
  | {
      primaryButtonText?: never;
      onPrimaryButtonClick?: never;
      secondaryButtonText?: never;
      onSecondaryButtonClick?: never;
      subButtonText?: never;
      onSubButtonClick?: never;
    }
);

export const withModalBottomSheetVariation = withVariation<ModalBottomSheetProps>('ModalBottomSheet')(
  propVariant({
    props: [
      {
        name: 'size',
        default: 'md',
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
  }),
  propVariant({
    props: [
      {
        name: 'overflow',
        default: 'visible',
        keep: true,
      },
    ],
    variants: {
      visible: {
        ContentBoxComponent: Box,
      },
      scroll: {
        ContentBoxComponent: ScrollBox,
      },
    },
  })
);
