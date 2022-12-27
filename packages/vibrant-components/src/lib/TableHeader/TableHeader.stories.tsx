import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableHeader } from './TableHeader';

export default {
  title: 'TableHeader',
  component: TableHeader,
  args: {
    buttonOptions: [
      { text: '다운로드', kind: 'tertiary' },
      { text: '새로고침', kind: 'tertiary' },
      { text: '추가', kind: 'primary' },
    ],
  },
} as ComponentMeta<typeof TableHeader>;

export const Basic: ComponentStory<typeof TableHeader> = props => <TableHeader {...props} />;
