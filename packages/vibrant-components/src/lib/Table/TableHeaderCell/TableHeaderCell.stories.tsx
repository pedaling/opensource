import type { ComponentStory } from '@storybook/react';
import { HStack } from '../../HStack';
import { OutlinedButton } from '../../OutlinedButton';
import { TableHeaderCell } from './TableHeaderCell';

export default {
  title: 'TableHeaderCell',
  component: TableHeaderCell,
};

export const Basic: ComponentStory<typeof TableHeaderCell> = props => (
  <HStack width="100%">
    <TableHeaderCell title="name" flexGrow={1} flexBasis={0} flexShrink={0} {...props} />
    <TableHeaderCell title="calories" flexGrow={1} flexBasis={0} flexShrink={0} {...props} />
    <TableHeaderCell
      title="fat"
      flexGrow={1}
      flexBasis={0}
      flexShrink={0}
      description="animal tissue consisting chiefly of cells distended with greasy or oily matter"
      sortable={true}
      sortDirection="none"
      {...props}
    />
    <TableHeaderCell title="carbs" flexGrow={1} flexBasis={0} flexShrink={0} {...props} />
    <TableHeaderCell title="protein" flexGrow={1} flexBasis={0} flexShrink={0} {...props} />
    <TableHeaderCell
      flexGrow={1}
      flexBasis={0}
      flexShrink={0}
      renderCell={() => <OutlinedButton size="sm">가격 일괄 수정</OutlinedButton>}
      {...props}
    />
  </HStack>
);
