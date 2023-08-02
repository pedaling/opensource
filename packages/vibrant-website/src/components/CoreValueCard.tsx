import React from 'react';
import { Body, Display, HStack, Paper, Title, VStack } from '@vibrant-ui/components';

type CoreValueCardProps = {
  coreValueEmoji: string;
  title: string;
  content: string;
};

export const CoreValueCard = ({ content, coreValueEmoji, title }: CoreValueCardProps) => (
  <VStack spacing={32} alignHorizontal="center" p={24}>
    <Paper width={150} height={150} rounded="xxl" backgroundColor="informativeContainer">
      <HStack height="100%" alignHorizontal="center" alignVertical="center">
        <Display level={3}>{coreValueEmoji}</Display>
      </HStack>
    </Paper>

    <VStack alignHorizontal="center" spacing={12}>
      <Title as="h3" level={5} color="informative">
        {title}
      </Title>
      <Body as="p" level={[1, 2, 2]} color="onView2" textAlign="center" wordBreak="keep-all">
        {content}
      </Body>
    </VStack>
  </VStack>
);
