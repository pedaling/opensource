import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type ModalBottomSheetProps = Either<
  { open: boolean },
  {
    defaultOpen: boolean;
    renderOpener: (_: { open: () => void; isOpen: boolean }) => ReactElementChild;
  }
> & {
  title?: string;
  subtitle?: string;
  size?: 'lg' | 'md';
  testId?: string;
  renderContents?: (_: { close: () => void }) => ReactElementChild;
  onClose?: () => void;
  showCloseButton?: boolean;
} & (
    | {
        primaryButtonOptions: ButtonOptions;
        secondaryButtonOptions?: ButtonOptions;
        subButtonOptions?: never;
      }
    | {
        primaryButtonOptions: ButtonOptions;
        secondaryButtonOptions?: never;
        subButtonOptions?: Omit<ButtonOptions, 'loading'>;
      }
    | {
        primaryButtonOptions?: never;
        secondaryButtonOptions?: never;
        subButtonOptions?: never;
      }
  );

export type ButtonOptions = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (_: { close: () => void }) => void;
};

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
