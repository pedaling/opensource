import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchInput } from './SearchInput';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const Basic: ComponentStory<typeof SearchInput> = props => <SearchInput {...props} />;
