import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSearchOption } from './TableSearchOption';

export default {
  title: 'TableSearchOption',
  component: TableSearchOption,
  args: {
    options: [
      { label: 'id', value: 'id' },
      { label: 'title', value: 'title' },
      { label: 'content', value: 'content' },
      { label: 'author', value: 'author' },
      { label: 'createdAt', value: 'createdAt' },
    ],
  },
} as ComponentMeta<typeof TableSearchOption>;

export const Basic: ComponentStory<typeof TableSearchOption> = props => <TableSearchOption {...props} />;
