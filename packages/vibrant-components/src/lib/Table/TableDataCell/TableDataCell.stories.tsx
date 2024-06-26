import type { ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { HStack } from '../../HStack';
import { OutlinedButton } from '../../OutlinedButton';
import { TableDataCell } from './TableDataCell';

export default {
  title: 'TableDataCell',
  component: TableDataCell,
};

export const Basic: ComponentStory<typeof TableDataCell> = props => (
  <HStack width="100%">
    <TableDataCell flexGrow={1} flexBasis={0} flexShrink={0} {...props}>
      Frozen yoghurt
    </TableDataCell>
    <TableDataCell flexGrow={1} flexBasis={0} flexShrink={0} {...props}>
      159
    </TableDataCell>
    <TableDataCell flexGrow={1} flexBasis={0} flexShrink={0} {...props}>
      6
    </TableDataCell>
    <TableDataCell flexGrow={1} flexBasis={0} flexShrink={0} {...props}>
      24
    </TableDataCell>
    <TableDataCell
      flexGrow={1}
      flexBasis={0}
      flexShrink={0}
      renderCell={() => (
        <OutlinedButton size="sm" IconComponent={Icon.Edit.Regular}>
          Edit
        </OutlinedButton>
      )}
      {...props}
    />
  </HStack>
);
