import { propVariant, withVariation } from '@vibrant-ui/core';
import type { CheckboxProps } from '../Checkbox';

export type CheckboxFieldProps = CheckboxProps & {
  label: string;
  helperText?: string;
};

export const withCheckboxFieldVariation = withVariation<CheckboxFieldProps>('CheckboxField')(
  propVariant({
    props: [{ name: 'size', responsive: true, keep: true }],
    variants: {
      sm: {
        labelLevel: 5,
        helperTextLevel: 6,
      },
      md: {
        labelLevel: 2,
        helperTextLevel: 4,
      },
    } as const,
  }),
  propVariant({
    props: [{ name: 'disabled', default: false, keep: true }],
    variants: {
      true: {
        labelColor: 'onView3',
        helperTextColor: 'onView3',
      },
      false: {
        labelColor: 'onView1',
        helperTextColor: 'onView2',
      },
    } as const,
  })
);
