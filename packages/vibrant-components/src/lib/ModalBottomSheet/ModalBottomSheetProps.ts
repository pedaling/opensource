import type { Ref } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
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
  dimClosable?: boolean;
  scrollBoxRef?: Ref<any>;
} & (
    | {
        primaryButtonOptions: ButtonOptions;
        secondaryButtonOptions?: ButtonOptions;
        subButtonOptions?: never;
      }
    | {
        primaryButtonOptions: ButtonOptions;
        secondaryButtonOptions?: never;
        subButtonOptions?: Omit<ButtonOptions, 'kind' | 'loading'>;
      }
    | {
        primaryButtonOptions?: never;
        secondaryButtonOptions?: never;
        subButtonOptions?: never;
      }
  );

export type ButtonOptions = {
  kind?: 'primary' | 'secondary' | 'tertiary';
  text: string;
  disabled?: boolean;
  loading?: boolean;
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
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
