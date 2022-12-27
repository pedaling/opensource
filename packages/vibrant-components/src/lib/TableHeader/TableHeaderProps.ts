import type { TextChildren } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import type { PressableProps } from '../Pressable';

export type TableHeaderProps = {
  buttonOptions: {
    kind: 'primary' | 'secondary' | 'tertiary';
    IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
    disclosure?: boolean;
    loading?: boolean;
    onClick?: PressableProps['onClick'];
    text: TextChildren;
    disabled?: boolean;
  }[];
};

export const withTableHeaderVariation = withVariation<TableHeaderProps>('TableFooter')();
