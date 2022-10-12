import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type ToastProps = {
  title: string;
  kind?: 'default' | 'error' | 'success';
  onClose?: () => void;
  ref?: Ref<any>;
  duration?: number;
} & (
  | {
      buttonText?: never;
      onButtonClick?: () => void;
    }
  | {
      buttonText?: string;
      onButtonClick?: never;
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
