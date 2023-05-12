import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSearchOption } from './TableSearchOption';

export default {
  title: 'TableSearchOption',
  component: TableSearchOption,
  args: {},
} as ComponentMeta<typeof TableSearchOption>;

export const Basic: ComponentStory<typeof TableSearchOption> = props => <TableSearchOption {...props} />;
