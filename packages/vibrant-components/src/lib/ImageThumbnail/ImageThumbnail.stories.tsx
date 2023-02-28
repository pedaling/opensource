import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageThumbnail } from './ImageThumbnail';

export default {
  title: 'ImageThumbnail',
  component: ImageThumbnail,
  args: {
    dim: true,
    borderRadius: 5,
    aspectRatio: 4 / 3,
    loading: 'eager',
    width: '40%',
    src: [
      'https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp',
      'https://cdn.class101.net/images/1f37098a-806a-41a7-8693-01006b4b9f35/640xauto.webp',
      'https://cdn.class101.net/images/293fda1f-431c-4b7e-8172-be64352b3c1d/640xauto.webp',
    ],
  },
} as ComponentMeta<typeof ImageThumbnail>;

export const Basic: ComponentStory<typeof ImageThumbnail> = props => <ImageThumbnail {...props} />;
