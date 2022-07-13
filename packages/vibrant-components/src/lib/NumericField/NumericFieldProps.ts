import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../Input';

export type NumericFieldProps = BaseInputProps<number> & {
  min?: number;
  max?: number;
};

export const withNumericFieldVariation = withVariation<NumericFieldProps>()(
  propVariant({
    props: [
      {
        name: 'disabled',
        keep: true,
        default: false,
      },
    ],
    variants: {
      false: {
        color: 'onView1',
        backgroundColor: 'onView3',
      },
      true: {
        color: 'onView3',
        backgroundColor: 'disable',
      },
    },
  })
);
