import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchField } from './SearchField';

export default {
  title: 'SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

export const Basic: ComponentStory<typeof SearchField> = props => <SearchField {...props} />;
