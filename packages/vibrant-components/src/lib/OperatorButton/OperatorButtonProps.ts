import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type OperatorButtonProps = {
  operator: 'minus' | 'plus';
  disabled?: boolean;
  onClick?: () => void;
};

export const withOperationButtonVariation = withVariation<OperatorButtonProps>('OperatorButton')(
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
        pressableProps: {},
        iconFill: 'onView3',
      },
      false: {
        backgroundColor: 'surface1',
        pressableProps: { overlayColor: 'onView1', interactions: ['hover', 'focus', 'active'] },
        iconFill: 'onView1',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'operator',
      },
    ],
    variants: {
      plus: {
        IconComponent: Icon.Add.Regular,
      },
      minus: {
        IconComponent: Icon.Minus.Regular,
      },
    },
  })
);
