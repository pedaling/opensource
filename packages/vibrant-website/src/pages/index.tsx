import React from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Display, Paragraph, Stack, Title, VStack } from '@vibrant-ui/components';
import { Image } from '@vibrant-ui/core';
import { CoreValueCard } from '../components/CoreValueCard';

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={translate({
        id: 'homepage.vibrant.title-message',
        message: 'Open source design system for building modern, cross-platform web and mobile applications.',
        description: 'Title of',
      })}
    >
      <VStack width="100%" height="100%">
        <Image
          aspectRatio={3 / 4}
          maxHeight={720}
          objectFit="cover"
          alt=""
          src="https://cdn.class101.net/images/8f5f548c-78dd-4469-8da0-d8f7d32a1cac/2048xauto.webp"
        />
        <VStack
          width="100%"
          height="100%"
          spacing={16}
          position="absolute"
          alignHorizontal="center"
          alignVertical="center"
        >
          <Display as="h1" level={[4, 4, 3]} color="white">
            Vibrant Design System
          </Display>
          <Paragraph as="p" color="white" weight="regular" level={3} textAlign="center">
            Class101의 사용자들이 보다 일관적인 서비스를 경험하기 위하여\n효율적이고 우수한 성능의 프로덕트를 제작할 수
            있도록 고안된 시스템입니다.
          </Paragraph>
        </VStack>
      </VStack>

      <VStack width="100%" px={32} pt={80} pb={64} spacing={32} alignHorizontal="center">
        <Title as="h2" level={3} weight="extraBold">
          Core Value
        </Title>

        <Stack
          direction={['vertical', 'vertical', 'horizontal']}
          width="100%"
          height="100%"
          alignVertical="center"
          alignHorizontal="center"
          spacing={40}
        >
          <CoreValueCard
            content="효과적으로 제작된 Class101의 프로덕트는 최고의 성능으로 기능하여\n유저에게 긍정적인 사용자 경험을 줄 수 있습니다."
            coreValueEmoji="🚀"
            title="Performant"
            key="Performant"
          />
          <CoreValueCard
            content="Class101의 빌더들이 보다 생산적으로 일할 수 있도록 하여\n보다 적은 노력으로 같은 조건의 결과물을 산출할 수 있습니다."
            coreValueEmoji="⚡"
            title="Productive"
            key="Productive"
          />

          <CoreValueCard
            content="사용자들이 플랫폼에 관계 없이 일관된 프로덕트를 경험할 수 있는\n일관적인 사용자 경험을 줄 수 있습니다."
            coreValueEmoji="🏰"
            title="Consistent"
            key="consistent"
          />
        </Stack>
      </VStack>
    </Layout>
  );
};

export default Home;
