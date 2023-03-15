import type { ReactElement, Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ResponsiveValue, TextSystemProps } from '@vibrant-ui/core';

type SelectOptionItemProps = {
  children: ReactElement | string;
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  onClick: () => void;
  active?: boolean;
  ref?: Ref<HTMLElement>;
  disabled?: boolean;
  textTransform?: TextSystemProps['textTransform'];
  testId?: string;
};

export const withSelectOptionItemVariation = withVariation<SelectOptionItemProps>('SelectOptionItem')(
  propVariant({
    props: [
      {
        name: 'disabled',
        keep: true,
        default: false,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'disable',
        color: 'onView3',
      },
      false: {
        backgroundColor: 'surface3',
        color: 'onView1',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg',
        responsive: true,
      },
    ],
    variants: {
      lg: {
        py: 16,
        px: 16,
        bodyLevel: 2,
      },
      md: {
        py: 9,
        px: 9,
        bodyLevel: 2,
      },
      sm: {
        py: 6,
        px: 7,
        bodyLevel: 4,
      },
    } as const,
  })
);
