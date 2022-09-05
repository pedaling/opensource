import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type CheckboxProps = {
  size: ResponsiveValue<'md' | 'sm'>;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
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
        iconOutlineColor: 'disableOutline',
      },
      false: {
        iconFillColor: 'primary',
        iconOutlineColor: 'outline1',
      },
    } as const,
  })
);
