import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    size: 'lg',
    src: 'https://cdn-media.class101.net/images/e4415fdb-dea2-4527-8aed-cada0b7c1bed/100x100.webp',
    placeholder: 'https://cdn.class101.net/images/e1cba897-73d1-43de-864b-c36cefdea670/100x100.webp',
    alt: 'avatar',
  },
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = props => <Avatar {...props} />;
