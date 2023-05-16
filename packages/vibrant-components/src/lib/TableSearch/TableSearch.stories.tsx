import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { TableHeader } from '../TableHeader';
import { TableSearch } from './TableSearch';

export default {
  title: 'TableSearch',
  component: TableSearch,
  args: {},
} as ComponentMeta<typeof TableSearch>;

export const Basic: ComponentStory<typeof TableHeader> = props => (
  <TableSearch {...props}>
    <TableSearch.Field placeholder="검색할 단어를 입력하세요." />
  </TableSearch>
);

export const withOption: ComponentStory<typeof TableHeader> = props => (
  <TableSearch {...props}>
    <TableSearch.Option
      options={[
        { label: 'id', value: 'id' },
        { label: 'title', value: 'title' },
        { label: 'content', value: 'content' },
        { label: 'author', value: 'author' },
        { label: 'createdAt', value: 'createdAt' },
      ]}
    />
    <TableSearch.Field placeholder="옵션과 함께 검색할 단어를 입력하세요." />
  </TableSearch>
);
