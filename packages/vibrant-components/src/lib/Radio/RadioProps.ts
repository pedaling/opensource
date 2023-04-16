import type { Ref } from 'react';
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type RadioProps = {
  ref?: Ref<any>;
  testId?: string;
  children?: ReactElementChild;
  value: string;
  checked?: boolean;
  onChange?: (_: { checked: boolean }) => void;
  size?: ResponsiveValue<'md' | 'sm'>;
  direction?: ResponsiveValue<'horizontal' | 'vertical'>;
  disabled?: boolean;
  label?: string;
  description?: string;
  tabIndex?: number;
};

export const withRadioVariation = withVariation<RadioProps>('Radio')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'sm' as const,
      },
      {
        name: 'direction',
        responsive: true,
        default: 'vertical' as const,
        keep: true,
      },
    ],
    variants: ({ size, direction }) => {
      if (size === 'md') {
        return {
          iconSize: 24,
          labelBodyLevel: 2,
          descriptionBodyLevel: 4,
          labelPl: 8,
          labelPt: 3,
          descriptionPt: 4,
          descriptionPl: direction === 'vertical' ? 32 : 8,
        } as const;
      }

      return {
        iconSize: 20,
        labelBodyLevel: 4,
        descriptionBodyLevel: 5,
        labelPl: 8,
        labelPt: 2,
        descriptionPt: direction === 'vertical' ? 2 : 2.5,
        descriptionPl: direction === 'vertical' ? 28 : 8,
      } as const;
    },
  }),
  propVariant({
    props: [
      {
        name: 'direction',
        responsive: true,
        default: 'vertical',
      },
    ],
    variants: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    } as const,
  })
);
