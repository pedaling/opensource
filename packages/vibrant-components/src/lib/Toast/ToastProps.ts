import { withVariation } from '@vibrant-ui/core';

type ToastProps = {
  type?: string;
};

export const withToastVariation = withVariation<ToastProps>('Toast')();
