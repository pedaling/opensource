import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from '../Image';
import { FlatList } from './FlatList';

export default {
  title: 'FlatList',
  component: FlatList,
  args: {
    columns: [2, 3, 4],
    data: [
      {
        id: 'id1',
        image: 'https://cdn.class101.net/images/518a534c-fec3-4407-99c2-bc29b874c198/3840xauto.webp',
      },
      {
        id: 'id2',
        image: 'https://cdn.class101.net/images/f4f99ea0-e506-471d-b82e-16f01a960c69/3840xauto.webp',
      },
      {
        id: 'id3',
        image: 'https://cdn.class101.net/images/29b7e8e6-a30c-4447-9124-17121b5c51db/3840xauto.webp',
      },
      {
        id: 'id4',
        image: 'https://cdn.class101.net/images/f43dd700-33b7-4218-a2d3-7612cb1eb3ad/3840xauto.webp',
      },
      {
        id: 'id5',
        image: 'https://cdn.class101.net/images/53b28edd-2731-4fa4-aa9a-e6ba28cd7c0e/3840xauto.webp',
      },
      {
        id: 'id6',
        image: 'https://cdn.class101.net/images/db96cc47-174c-4a45-8824-99dce005761a/3840xauto.webp',
      },
      {
        id: 'id7',
        image: 'https://cdn.class101.net/images/4df03911-57e0-4d39-bf01-a737eeba913d/3840xauto.webp',
      },
      {
        id: 'id8',
        image: 'https://cdn.class101.net/images/664ab038-0b3d-4384-b70c-3b03ebbde82d/3840xauto.webp',
      },
      {
        id: 'id9',
        image: 'https://cdn.class101.net/images/0dbf3697-3eed-4279-88d0-77ec628108cd/3840xauto.webp',
      },
      {
        id: 'id10',
        image: 'https://cdn.class101.net/images/518a534c-fec3-4407-99c2-bc29b874c198/3840xauto.webp',
      },
    ],
    renderItem: ({ item: { image } }) => <Image src={image} aspectRatio={4 / 3} width="100%" />,
    keyExtractor: item => item.id,
    columnSpacing: 8,
    rowSpacing: 8,
  },
} as ComponentMeta<typeof FlatList>;

export const Basic: ComponentStory<typeof FlatList> = props => <FlatList {...props} />;
