import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text';
import { ScrollBox } from './ScrollBox';

export default {
  title: 'ScrollBox',
  component: ScrollBox,
  args: {},
} as ComponentMeta<typeof ScrollBox>;

export const Basic: ComponentStory<typeof ScrollBox> = props => (
  <ScrollBox width={200} height={200} borderWidth={1} {...props}>
    <Text typography="body3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum natus tempora maiores laudantium neque vel
      commodi architecto, a et laboriosam. Facilis eaque fugit laborum. Atque qui magni sunt. Suscipit, hic. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Quis nisi tempora vel repellat soluta, expedita tenetur doloremque
      architecto dolore dolor saepe facere sint tempore ullam, libero ex quisquam velit quas. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Similique libero aliquid asperiores ducimus, modi voluptatem earum autem atque non
      minus totam sint saepe, eveniet illum voluptatum a veritatis excepturi aut. Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Reprehenderit hic voluptas perferendis nobis assumenda et aliquam nulla cum? Quos
      rem dignissimos recusandae rerum est voluptates saepe vel aliquam voluptatibus ipsam.
    </Text>
  </ScrollBox>
);
