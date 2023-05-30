import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSearchField } from './TableSearchField';

export default {
  title: 'TableSearchField',
  component: TableSearchField,
  args: {},
} as ComponentMeta<typeof TableSearchField>;

export const Basic: ComponentStory<typeof TableSearchField> = props => <TableSearchField {...props} />;
