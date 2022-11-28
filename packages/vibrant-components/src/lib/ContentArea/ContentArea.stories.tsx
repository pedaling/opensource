import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paper } from '../Paper';
import { ContentArea } from './ContentArea';

export default {
  title: 'ContentArea',
  component: ContentArea,
  args: {},
} as ComponentMeta<typeof ContentArea>;

export const Basic: ComponentStory<typeof ContentArea> = props => (
  <ContentArea {...props}>
    <Paper width="100%" height={200} backgroundColor="primary" />
  </ContentArea>
);
