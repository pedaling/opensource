import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from './Image';

export default {
  title: 'Image',
  component: Image,
  args: {
    src: 'https://cdn.class101.net/images/042c6702-8036-4a3f-9b5f-c7848833b4f0',
    alt: 'image',
  },
} as ComponentMeta<typeof Image>;

export const Basic: ComponentStory<typeof Image> = props => <Image width={400} height={300} {...props} />;

export const ExternalComponent: ComponentStory<typeof Image> = props => <Image width={400} height={300} {...props} />;
