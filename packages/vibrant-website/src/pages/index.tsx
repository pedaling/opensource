import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Body, Display, HStack, Title, VStack } from '@vibrant-ui/components';
import { Image } from '@vibrant-ui/core';

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
      <VStack width="100%">
        <Image src="/img/graphic_background.png" />

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
          <Body as="p" color="white" level={[4, 4, 2]} textAlign="center">
            Class101의 사용자들이 보다 일관적인 서비스를 경험하기 위하여\n효율적이고 우수한 성능의 프로덕트를 제작할 수
            있도록 고안된 시스템입니다.
          </Body>
        </VStack>
      </VStack>

      <VStack px={32} py={64} spacing={24}>
        <Title as="h2" level={4}>
          Core Value
        </Title>

        <HStack spacing={100}>
          <VStack spacing={12}>
            <Image src="/img/graphic_background_2.png" />
            <Title as="h3" level={6}>
              Performant
            </Title>
            <Body as="p" level={1} color="onView2">
              <Translate id="homepage.core-value.performant">
                효과적으로 제작된 Class101의 로덕트는 최고의 성능으로 기능하여 유저에게 긍정적인 사용자 경험을 줄 수
                있습니다.
              </Translate>
            </Body>
          </VStack>
          <VStack spacing={12}>
            <Image src="/img/graphic_background_2.png" />
            <VStack p={20}>
              <Title as="h3" level={6}>
                Productive
              </Title>
              <Body as="p" level={1} color="onView2">
                <Translate id="homepage.core-value.productive">
                  Class101의 빌더들이 보다 생산적으로 일할 수 있도록 하여 보다 적은 노력으로 같은 조건의 결과물을 산출할
                  수 있습니다.
                </Translate>
              </Body>
            </VStack>
          </VStack>
          <VStack spacing={12}>
            <Image src="/img/graphic_background_2.png" />
            <Title as="h3" level={6}>
              Consistent
            </Title>
            <Body as="p" level={1} color="onView2">
              <Translate id="homepage.core-value.consistent">
                사용자들이 플랫폼에 관계 없이 일관된 프로덕트를 경험할 수 있는 일관적인 사용자 경험을 줄 수 있습니다.
              </Translate>
            </Body>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Home;
