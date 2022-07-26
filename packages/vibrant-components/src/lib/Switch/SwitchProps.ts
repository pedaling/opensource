import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SwitchProps = {
  id?: string;
  name?: string;
  size?: ResponsiveValue<'md' | 'sm'>;
  defaultValue?: boolean;
  onValueChange?: (state: boolean) => void;
  disabled?: boolean;
};

export const withSwitchVariation = withVariation<SwitchProps>()(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'md',
      },
    ],
    variants: {
      sm: {
        width: 34,
        height: 20,
        roundSize: 14,
        roundRadius: 7,
        borderRadius: 10,
      },
      md: {
        width: 46,
        height: 26,
        roundSize: 20,
        roundRadius: 10,
        borderRadius: 13,
      },
    },
  }),
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
        activeColor: 'disable',
        inActiveBorderColor: 'transparent',
      },
      false: {
        backgroundColor: 'surface1',
        activeColor: 'informative',
        inActiveBorderColor: 'outline2',
      },
    } as const,
  })
);
