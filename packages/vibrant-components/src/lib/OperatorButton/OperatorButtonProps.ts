import type { ComponentType } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconProps } from '@vibrant-ui/icons';

export type OperatorButtonProps = {
  disabled?: boolean;
  IconComponent: ComponentType<IconProps>;
  onClick?: () => void;
};

export const withOperationButtonVariation = withVariation<OperatorButtonProps>()(
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'disable',
        pressable: false,
        iconFill: 'onView3',
      },
      false: {
        backgroundColor: 'surface1',
        pressable: { overlayColor: 'onView1', interactions: ['hover', 'focus', 'active'] },
        iconFill: 'onView1',
      },
    } as const,
  })
);
