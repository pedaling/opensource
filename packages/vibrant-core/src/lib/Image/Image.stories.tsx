import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from './Image';

export default {
  title: 'Image',
  component: Image,
  args: {
    src: [
      'https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d',
      'https://cdn.class101.net/images/d86d2ab8-0726-403b-9d60-d133f9c5eacd',
      'https://cdn.class101.net/images/f9191e82-606e-4012-b049-30ece34fb863',
    ],
    alt: 'image',
    objectFit: 'cover',
  },
} as ComponentMeta<typeof Image>;

export const Basic: ComponentStory<typeof Image> = props => <Image width={200} height={200} {...props} />;
