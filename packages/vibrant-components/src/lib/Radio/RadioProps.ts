import type { Ref } from 'react';
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type RadioProps = {
  ref?: Ref<any>;
  testId?: string;
  children?: ReactElementChild;
  value: string;
  checked?: boolean;
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
        name: 'direction',
        responsive: true,
        default: 'vertical',
        keep: true,
      },
    ],
    variants: {
      vertical: {
        flexDirection: 'column',
        width: '100%',
      },
      horizontal: {
        flexDirection: 'row',
        width: 'auto',
      },
    } as const,
  })
);

export const withRadioIconVariation = withVariation<Pick<RadioProps, 'checked' | 'disabled' | 'size'>>('RadioIcon')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'md' as const,
      },
    ],
    variants: {
      md: {
        size: 24,
      },
      sm: {
        size: 20,
      },
    },
  })
);

export const withRadioLabelVariation = withVariation<Pick<RadioProps, 'disabled' | 'label' | 'size'>>('RadioLabel')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'md' as const,
      },
    ],
    variants: {
      md: {
        bodyLevel: 2,
        pl: 8,
        pt: 3,
      },
      sm: {
        bodyLevel: 4,
        pl: 8,
        pt: 2,
      },
    } as const,
  })
);

export const withRadioDescriptionVariation = withVariation<
  Pick<RadioProps, 'description' | 'direction' | 'disabled' | 'size'>
>('RadioDescription')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'md' as const,
      },
      {
        name: 'direction',
        responsive: true,
        default: 'vertical' as const,
      },
    ],
    variants: ({ size, direction }) => {
      if (size === 'md') {
        return {
          bodyLevel: 4,
          pt: 4,
          pl: direction === 'vertical' ? 32 : 8,
        } as const;
      }

      return {
        bodyLevel: 5,
        pt: direction === 'vertical' ? 2 : 3,
        pl: direction === 'vertical' ? 28 : 8,
      } as const;
    },
  })
);
