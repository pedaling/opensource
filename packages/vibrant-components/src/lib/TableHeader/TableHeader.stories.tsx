import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableHeader } from './TableHeader';

export default {
  title: 'TableHeader',
  component: TableHeader,
  args: {},
} as ComponentMeta<typeof TableHeader>;

export const Basic: ComponentStory<typeof TableHeader> = props => (
  <TableHeader {...props}>
    <TableHeader.Button kind="tertiary">다운로드</TableHeader.Button>
    <TableHeader.Button kind="tertiary">새로고침</TableHeader.Button>
    <TableHeader.Button kind="primary">추가</TableHeader.Button>
  </TableHeader>
);
