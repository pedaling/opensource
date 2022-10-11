import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type ModalBottomSheetProps = {
  open?: boolean;
  defaultOpen?: boolean;
  title?: string;
  subtitle?: string;
  size?: 'lg' | 'md';
  renderContents?: (_: { close: () => void }) => ReactElementChild;
  renderOpener?: (_: { open: () => void; isOpen: boolean }) => ReactElementChild;
  onClose?: () => void;
} & (
  | {
      primaryButtonText: string;
      onPrimaryButtonClick: (_: { close: () => void }) => void;
      secondaryButtonText?: never;
      onSecondaryButtonClick?: never;
      subButtonText?: string;
      onSubButtonClick?: (_: { close: () => void }) => void;
    }
  | {
      primaryButtonText: string;
      onPrimaryButtonClick: (_: { close: () => void }) => void;
      secondaryButtonText?: string;
      onSecondaryButtonClick?: (_: { close: () => void }) => void;
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
        desktopModalWidth: 480,
      },
      lg: {
        desktopModalWidth: 760,
      },
    },
  })
);
