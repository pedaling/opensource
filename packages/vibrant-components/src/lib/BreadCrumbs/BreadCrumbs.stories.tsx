import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@vibrant-ui/utils';
import { BreadCrumb } from '../BreadCrumb';
import { VStack } from '../VStack';
import { BreadCrumbs } from './BreadCrumbs';

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
  args: {},
} as ComponentMeta<typeof BreadCrumbs>;

export const Basic: ComponentStory<typeof BreadCrumbs> = props => (
  <VStack p={10}>
    <BreadCrumbs {...props}>
      <BreadCrumb href="/">Depth1 has link</BreadCrumb>
      <BreadCrumb href="/" isExternal={true}>
        Depth2 has external link
      </BreadCrumb>
      <BreadCrumb onClick={action('Depth3 is clicked')}>Depth3 has onClick function</BreadCrumb>
      <BreadCrumb>Last depth is highlighted</BreadCrumb>
    </BreadCrumbs>
  </VStack>
);

export const withStringSeparator: ComponentStory<typeof BreadCrumbs> = props => (
  <VStack p={10}>
    <BreadCrumbs Separator="+" {...props}>
      <BreadCrumb href="/">Depth1 has link</BreadCrumb>
      <BreadCrumb href="/" isExternal={true}>
        Depth2 has external link
      </BreadCrumb>
      <BreadCrumb onClick={action('Depth3 is clicked')}>Depth3 has onClick function</BreadCrumb>
      <BreadCrumb>Last depth is highlighted</BreadCrumb>
    </BreadCrumbs>
  </VStack>
);

export const withLongName: ComponentStory<typeof BreadCrumbs> = props => (
  <VStack p={10}>
    <BreadCrumbs {...props}>
      <BreadCrumb>{'Depth1 has long name '.repeat(3)}</BreadCrumb>
      <BreadCrumb>{'Depth2 has long name '.repeat(5)}</BreadCrumb>
      <BreadCrumb>{'Depth3 has long name '.repeat(30)}</BreadCrumb>
      <BreadCrumb>{'Depth4 has long name '.repeat(30)}</BreadCrumb>
    </BreadCrumbs>
  </VStack>
);
