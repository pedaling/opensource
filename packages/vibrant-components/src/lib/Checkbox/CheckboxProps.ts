import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { BaseInputProps } from '../../types';

export type CheckboxProps = BaseInputProps<boolean> & {
  size: ResponsiveValue<'md' | 'sm'>;
  indeterminate?: boolean;
  ariaLabelledBy?: string;
  testId?: string;
};

export const withCheckboxVariation = withVariation<CheckboxProps>('Checkbox')(
  propVariant({
    props: [{ name: 'size', responsive: true }],
    variants: {
      sm: {
        iconSize: 20,
      },
      md: {
        iconSize: 24,
      },
    } as const,
  }),
  propVariant({
    props: [{ name: 'indeterminate', default: false }],
    variants: {
      true: {
        CheckboxOnIconComponent: Icon.CheckboxIndeterminate.Thin,
        CheckboxOffIconComponent: Icon.CheckboxOff.Regular,
      },
      false: {
        CheckboxOnIconComponent: Icon.CheckboxOn.Thin,
        CheckboxOffIconComponent: Icon.CheckboxOff.Regular,
      },
    } as const,
  }),
  propVariant({
    props: [{ name: 'disabled', default: false, keep: true }],
    variants: {
      true: {
        iconFillColor: 'disable',
        iconOutlineColor: 'outlineDisable',
      },
      false: {
        iconFillColor: 'primary',
        iconOutlineColor: 'outline1',
      },
    } as const,
  })
);
