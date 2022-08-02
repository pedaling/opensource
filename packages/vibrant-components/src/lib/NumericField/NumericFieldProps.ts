import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type NumericFieldProps = BaseInputProps<number> & {
  placeholder?: number;
  min?: number;
  max?: number;
};

export const withNumericFieldVariation = withVariation<NumericFieldProps>('NumericField')(
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
        placeholderColor: 'onView2',
        backgroundColor: 'surface3',
      },
      true: {
        color: 'onView3',
        placeholderColor: 'onView3',
        backgroundColor: 'disable',
      },
    },
  })
);
