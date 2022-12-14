import type { ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { Callout } from '../../Callout';
import { OutlinedButton } from '../../OutlinedButton';
import { Paper } from '../../Paper';
import { VStack } from '../../VStack';
import { TableDataCell } from '../TableDataCell';
import { TableRow } from './TableRow';

export default {
  title: 'TableRow',
  component: TableRow,
  args: {
    selectable: true,
    expandable: true,
    renderExpanded: () => (
      <Paper backgroundColor="surface1" p={10}>
        <Callout
          title="Title"
          contents="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, accusantium quam libero et ex veniam sequi
        harum illum, beatae excepturi aut? Laborum dicta in veniam consequatur laboriosam distinctio eaque iure."
        />
      </Paper>
    ),
    bottomBordered: true,
  },
};

export const Basic: ComponentStory<typeof TableRow> = ({ bottomBordered, ...props }) => (
  <VStack as="table" width="100%">
    <TableRow {...props} bottomBordered={bottomBordered}>
      <TableDataCell flexGrow={1} bottomBordered={bottomBordered}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, accusantium quam libero et ex veniam sequi
        harum illum, beatae excepturi aut? Laborum dicta in veniam consequatur laboriosam distinctio eaque iure.
      </TableDataCell>
      <TableDataCell flexGrow={0} flexBasis={50} flexShrink={0} bottomBordered={bottomBordered}>
        159
      </TableDataCell>
      <TableDataCell flexGrow={0} flexBasis={50} flexShrink={0} bottomBordered={bottomBordered}>
        6
      </TableDataCell>
      <TableDataCell flexGrow={0} flexBasis={50} flexShrink={0} bottomBordered={bottomBordered}>
        24
      </TableDataCell>
      <TableDataCell
        flexGrow={0}
        flexBasis={100}
        flexShrink={0}
        bottomBordered={bottomBordered}
        renderCell={() => (
          <OutlinedButton size="sm" IconComponent={Icon.Edit.Regular}>
            Edit
          </OutlinedButton>
        )}
      />
    </TableRow>
  </VStack>
);
