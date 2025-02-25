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
  size?: 'full' | 'lg' | 'md';
  testId?: string;
  renderContents?: (_: { close: () => void }) => ReactElementChild;
  onClose?: () => void;
  showCloseButton?: boolean;
  dimClosable?: boolean;
  scrollBoxRef?: Ref<any>;
  dangerouslyHideOverlayOnIos?: boolean;
  /**
   * This value is used for both opening and closing the modal animation duration.
   */
  transitionDuration?: number;
  /**
   * The threshold to close the modal by swiping down on native platforms. The value is a ratio of the viewport height.
   * @default 0.4
   */
  native_swipeToCloseThreshold?: number;
  /**
   * The velocity to close the modal by swiping down on native platforms. The value is dp per second.
   * @default 200
   */
  native_swipeToCloseVelocity?: number;
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
      full: {
        desktopModalWidth: '100%',
      },
    },
  })
);
