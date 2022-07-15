import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectOptionGroup } from './SelectOptionGroup';

export default {
  title: 'SelectOptionGroup',
  component: SelectOptionGroup,
  args: {
    options: [
      {
        label: '데일리 원피스 제작 올인원 패키지',
        value: '1',
      },
      {
        label: '데일리 원피스 제작 패턴 도안 패키지',
        value: '2',
      },
    ],
  },
} as ComponentMeta<typeof SelectOptionGroup>;

export const Basic: ComponentStory<typeof SelectOptionGroup> = props => <SelectOptionGroup {...props} />;
