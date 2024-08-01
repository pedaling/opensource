import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';

export type ModalBottomSheetMenuProps = {
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular' | 'Thin'>;
  title: string;
  onClick?: () => void;
  rightContents?: () => ReactElement;
  disabled?: boolean;
};

export const withModalBottomSheetMenuVariation = withVariation<ModalBottomSheetMenuProps>('ModalBottomSheetMenu')(
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
      },
    ],
    variants: {
      false: {
        color: 'onView1',
      } as const,
      true: {
        color: 'onView2',
      } as const,
    },
  })
);
