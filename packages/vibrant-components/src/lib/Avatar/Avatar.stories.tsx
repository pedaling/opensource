import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    size: 'lg',
    src: 'https://cdn.class101.net/images/7776e542-d6db-49c6-b86f-7e93f0cf5425/200x200.png',
    placeholder: 'https://cdn.class101.net/images/2483a7e5-8c20-4ac7-a209-805b4482664d',
    alt: 'avatar',
  },
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = props => <Avatar {...props} />;

export const Placeholder: ComponentStory<typeof Avatar> = props => <Avatar {...props} src="" />;
