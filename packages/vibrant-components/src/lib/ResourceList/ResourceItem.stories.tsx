import { action } from '@storybook/addon-actions';
import type { ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';
import { ImageThumbnail } from '../ImageThumbnail';
import { ResourceItem } from './ResourceItem';

export default {
  title: 'ResourceList/Item',
  component: ResourceItem,
  args: {
    size: 'lg',
    title: 'Resource Item',
    subtitle: 'Subtitle',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'lg',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
    onToggleSelect: {
      action: action('onToggleSelect'),
    },
    id: {
      control: 'text',
      defaultValue: '1',
    },
  },
};

export const Default: ComponentStory<typeof ResourceItem> = args => <ResourceItem {...args} />;

export const WithImage: ComponentStory<typeof ResourceItem> = args => (
  <ResourceItem {...args} ImageComponent={<ImageThumbnail src="https://picsum.photos/200/300" aspectRatio={1} />} />
);

export const WithAvatar: ComponentStory<typeof ResourceItem> = args => (
  <ResourceItem {...args} ImageComponent={<Avatar alt="Avatar" size="md" src="https://picsum.photos/200/300" />} />
);

export const WithIconButton: ComponentStory<typeof ResourceItem> = args => (
  <ResourceItem
    {...args}
    ImageComponent={<Avatar alt="Avatar" size="md" src="https://picsum.photos/200/300" />}
    ActionComponent={<IconButton size="md" IconComponent={Icon.Add.Thin} />}
  />
);
