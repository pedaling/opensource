import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Slider } from './Slider';

const data = [
  {
    id: 'idx0',
    image: 'https://cdn.class101.net/images/518a534c-fec3-4407-99c2-bc29b874c198/3840xauto.webp',
    color: 'primary',
  },
  {
    id: 'idx1',
    image: 'https://cdn.class101.net/images/f4f99ea0-e506-471d-b82e-16f01a960c69/3840xauto.webp',
    color: 'surface1',
  },
  {
    id: 'idx2',
    image: 'https://cdn.class101.net/images/29b7e8e6-a30c-4447-9124-17121b5c51db/3840xauto.webp',
    color: 'informativeContainer',
  },
  {
    id: 'idx3',
    image: 'https://cdn.class101.net/images/f43dd700-33b7-4218-a2d3-7612cb1eb3ad/3840xauto.webp',
    color: 'warningContainer',
  },
  {
    id: 'idx4',
    image: 'https://cdn.class101.net/images/53b28edd-2731-4fa4-aa9a-e6ba28cd7c0e/3840xauto.webp',
    color: 'primaryContainer',
  },
  {
    id: 'idx5',
    image: 'https://cdn.class101.net/images/db96cc47-174c-4a45-8824-99dce005761a/3840xauto.webp',
    color: 'surface4',
  },
  {
    id: 'idx6',
    image: 'https://cdn.class101.net/images/4df03911-57e0-4d39-bf01-a737eeba913d/3840xauto.webp',
    color: 'primary',
  },
  {
    id: 'idx7',
    image: 'https://cdn.class101.net/images/664ab038-0b3d-4384-b70c-3b03ebbde82d/3840xauto.webp',
    color: 'surface1',
  },
];

export default {
  title: 'Slider',
  component: Slider,
  args: {
    data,
    keyExtractor: item => item.id,
    renderItem: ({ item: { id, color } }) => (
      <Box height={240} width="100%" backgroundColor={color} alignItems="center" justifyContent="center">
        <Body level={1} weight="bold">
          {id}
        </Body>
      </Box>
    ),
  },
} as ComponentMeta<typeof Slider>;

export const Basic: ComponentStory<typeof Slider> = props => <Slider {...props} />;

export const WithPanelWidthSlider: ComponentStory<typeof Slider> = () => (
  <Slider
    data={data}
    snap={true}
    panelWidth={300}
    keyExtractor={item => item.id}
    renderItem={({ item: { id, color } }) => (
      <Box height={240} width="100%" backgroundColor={color} alignItems="center" justifyContent="center">
        <Body level={1} weight="bold">
          {id}
        </Body>
      </Box>
    )}
  />
);

export const LoopSlider: ComponentStory<typeof Slider> = () => (
  <Slider
    data={data}
    snap={true}
    loop={true}
    panelsPerView={1}
    keyExtractor={item => item.id}
    renderItem={({ item: { id, color } }) => (
      <Box height={240} width="100%" backgroundColor={color} alignItems="center" justifyContent="center">
        <Body level={1} weight="bold">
          {id}
        </Body>
      </Box>
    )}
  />
);

export const WithInitialIndex: ComponentStory<typeof Slider> = () => (
  <Slider
    data={data}
    initialIndex={2}
    panelsPerView={1}
    keyExtractor={item => item.id}
    renderItem={({ item: { id, color } }) => (
      <Box height={240} width="100%" backgroundColor={color} alignItems="center" justifyContent="center">
        <Body level={1} weight="bold">
          {id}
        </Body>
      </Box>
    )}
  />
);
