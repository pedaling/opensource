import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

type ToastProps = {
  title: string;
  open: boolean;
  kind?: 'default' | 'error' | 'success';
  onClose?: () => void;
  duration?: number;
} & (
  | {
      buttonText: string;
      onButtonClick: () => void;
    }
  | {
      buttonText: string;
      onButtonClick?: never;
    }
  | {
      buttonText?: never;
      onButtonClick: () => void;
    }
);

export const withToastVariation = withVariation<ToastProps>('Toast')(
  propVariant({
    props: [{ name: 'kind', default: 'default' }],
    variants: {
      error: {
        IconComponent: Icon.AlertCircle.Fill,
        color: 'onViewError' as const,
      },
      success: {
        IconComponent: Icon.CheckCircle.Fill,
        color: 'onViewSuccess' as const,
      },
    },
  })
);
