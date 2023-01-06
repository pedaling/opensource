import { useRef } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { ContentArea } from '../ContentArea';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    position: 'bottom',
  },
  argTypes: {
    content: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = props => (
  <ContentArea>
    <VStack height={300} alignHorizontal="center" alignVertical="center">
      <Tooltip {...props}>
        <Box width={100} height={100} backgroundColor="warning" />
      </Tooltip>
    </VStack>
  </ContentArea>
);

export const ElementContent: ComponentStory<typeof Tooltip> = props => (
  <ContentArea>
    <VStack height={300} alignHorizontal="center" alignVertical="center">
      <Tooltip {...props} content={<Box width={200} height={200} backgroundColor="informative" />}>
        <Box width={100} height={100} backgroundColor="warning" />
      </Tooltip>
    </VStack>
  </ContentArea>
);

export const CustomRefTooltip: ComponentStory<typeof Tooltip> = props => {
  const openerRef = useRef(null);

  return (
    <ContentArea>
      <HStack height={300} alignHorizontal="center" alignVertical="center" spacing={8}>
        <Body ref={openerRef} level={3} weight="medium">
          이 텍스트 영역을 기준으로 툴팁의 위치가 설정됩니다.
        </Body>
        <Tooltip {...props} anchorRef={openerRef}>
          <Icon.InfoCircle.Fill fill="informative" size={20} />
        </Tooltip>
      </HStack>
    </ContentArea>
  );
};
