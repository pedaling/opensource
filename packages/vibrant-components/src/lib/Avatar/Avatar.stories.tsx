import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    size: 'lg',
    src: 'https://cdn.class101.net/images/7776e542-d6db-49c6-b86f-7e93f0cf5425/200x200.png',
    placeholder: 'https://cdn.class101.net/images/e1cba897-73d1-43de-864b-c36cefdea670/200x200.png',
    alt: 'avatar',
  },
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = props => <Avatar {...props} />;

export const Placeholder: ComponentStory<typeof Avatar> = props => <Avatar {...props} src="" />;
