import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { ContentArea } from '../ContentArea';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    maxWidth: 800,
    content:
      '테이블 프리뷰가 나왔습니다 .. 아직 리뷰 중이긴 하지만요! Table/ TableColumn 컴포넌트로 QA 해주시면 될 것 같아요!',
    position: 'bottom',
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
