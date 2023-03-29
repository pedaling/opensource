import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text';
import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
  args: {
    href: 'https://www.vibrant-design.com',
    isExternal: true,
  },
} as ComponentMeta<typeof Link>;

export const Basic: ComponentStory<typeof Link> = props => (
  <Link {...props}>
    <Text typography="body1">Link</Text>
  </Link>
);
