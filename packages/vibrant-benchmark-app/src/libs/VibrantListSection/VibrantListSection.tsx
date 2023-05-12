import { useState } from 'react';
import { Body, GhostButton, HStack, IconButton, Slider, Title, VStack } from '@vibrant-ui/components';
import { Image } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { cardData } from '../DummyData';

type VibrantListSectionProps = {
  title: string;
};

export const VibrantListSection = ({ title }: VibrantListSectionProps) => {
  const [liked, setLiked] = useState(false);
  const shuffledData = cardData.sort(() => Math.random() - 0.5);

  return (
    <VStack spacing={16} px={20}>
      <HStack width="100%" alignHorizontal="space-between" height={20} alignVertical="center">
        <Title level={6}>{title}</Title>
        <GhostButton size="sm" onClick={() => {}}>
          <Body level={2} color="onView3">
            더보기
          </Body>
        </GhostButton>
      </HStack>
      <VStack height={230}>
        <Slider
          data={shuffledData}
          snap={true}
          spacing={12}
          keyExtractor={item => item.image}
          panelsPerView={2}
          renderItem={({ item }) => (
            <VStack>
              <Image borderRadius={1} src={item.image} width="100%" aspectRatio={4 / 3} objectFit="cover" />
              <VStack position="absolute" right={10} top={8}>
                <IconButton
                  size="md"
                  onClick={() => setLiked(!liked)}
                  color={liked ? 'error' : 'onView1'}
                  IconComponent={liked ? Icon.Heart.Fill : Icon.Heart.Thin}
                />
              </VStack>
              <VStack mt={12} height="auto" spacing={6}>
                <Title level={7} weight="regular" lineLimit={2} flexShrink={0}>
                  {item.title}
                </Title>
                <Body level={5} color="onView2" lineLimit={1}>
                  {item.category}&nbsp;&nbsp;|&nbsp;&nbsp;{item.creator}
                </Body>
              </VStack>
            </VStack>
          )}
        />
      </VStack>
    </VStack>
  );
};
