import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from '../TableFilterGroup';
import { TableRadioFilter } from './TableRadioFilter';

export default {
  title: 'TableRadioFilter',
  component: TableRadioFilter,
  args: {
    dataKey: 'isHidden',
    label: '숨김 여부',
    options: [
      {
        value: 'true',
        label: '숨김',
      },
      {
        value: 'false',
        label: '숨기지 않음',
      },
    ],
  },
} as ComponentMeta<typeof TableRadioFilter>;

export const Basic: ComponentStory<typeof TableRadioFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['isHidden']}>
    <TableRadioFilter {...props} />
  </TableFilterGroup>
);

export const DefaultFilter: ComponentStory<typeof TableRadioFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['isHidden']}>
    <TableRadioFilter {...props} />
  </TableFilterGroup>
);
