import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Body, Display, Divider, HStack, Paper, Title, VStack } from '@vibrant-ui/components';

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
      <VStack maxWidth={1024} width="100%" mx="auto" px={40}>
        <HStack py={48}>
          <VStack width="50%" justifyContent="center" spacing={10}>
            <Display as="h1" level={4}>
              Vibrant Design System
            </Display>
            <Body as="p" level={1}>
              <Translate id="homePage.visit-vibrant">
                Class101의 사용자들이 보다 일관적인 서비스를 경험하기 위하여 효율적이고 우수한 성능의 프로덕트를 제작할
                수 있도록 고안된 시스템입니다.
              </Translate>
            </Body>
          </VStack>
          <Paper width="50%" backgroundColor="surface1">
            <img src="/img/hero.png" alt="" />
          </Paper>
        </HStack>

        <Divider direction="horizontal" margin="none" />

        <VStack py={64} spacing={24}>
          <Title as="h2" level={4}>
            Core Value
          </Title>

          <HStack spacing={64}>
            <VStack spacing={12}>
              <Paper width={120} height={120} backgroundColor="surface1" />
              <Title as="h3" level={6}>
                Performant
              </Title>
              <Body as="p" level={1} color="onView2">
                <Translate id="homepage.core-value.performant">
                  효과적으로 제작된 Class101의 프로덕트는 최고의 성능으로 기능하여 유저에게 긍정적인 사용자 경험을 줄 수
                  있습니다.
                </Translate>
              </Body>
            </VStack>
            <VStack spacing={12}>
              <Paper width={120} height={120} backgroundColor="surface1" />
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
            <VStack spacing={12}>
              <Paper width={120} height={120} backgroundColor="surface1" />
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
      </VStack>
    </Layout>
  );
};

export default Home;
