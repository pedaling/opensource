import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableHeaderButton } from './TableHeaderButton';

export default {
  title: 'TableHeaderButton',
  component: TableHeaderButton,
  args: {
    kind: 'outlined',
    children: 'Button',
  },
} as ComponentMeta<typeof TableHeaderButton>;

export const Basic: ComponentStory<typeof TableHeaderButton> = props => <TableHeaderButton {...props} />;
