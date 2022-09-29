import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

type ToastProps = {
  title: string | (() => ReactElementChild);
  open: boolean;
  kind?: 'default' | 'error' | 'success';
  onClose?: () => void;
  duration?: number;
} & (
  | {
      buttonTitle: string;
      buttonOnClick?: never;
    }
  | {
      buttonTitle?: never;
      buttonOnClick: () => void;
    }
);

export const withToastVariation = withVariation<ToastProps>('Toast')(
  propVariant({
    props: [{ name: 'kind', default: 'default' }],
    variants: {
      error: {
        IconComponent: Icon.AlertCircle.Fill,
        color: 'error' as const,
      },
      success: {
        IconComponent: Icon.CheckCircle.Fill,
        color: 'success' as const,
      },
    },
  })
);
