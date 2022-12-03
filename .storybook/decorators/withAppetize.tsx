import { Global, css } from '@emotion/react';
import { DeepLinkRenderer } from '@storybook/native-components';
import type { DecoratorFn } from '@storybook/react';
import { HStack, Paper, Title, VStack } from '@vibrant-ui/components';

export const withAppetize: DecoratorFn = (StoryComponent, context) => {
  const { platform } = context.globals;

  if (platform === 'web') {
    return <StoryComponent />;
  }

  return (
    <HStack>
      <Global styles={appetizeIframeStyle} />
      <Paper width="50%" minHeight="100vh" backgroundColor="background">
        <StoryComponent />
      </Paper>
      <Paper width="50%" minHeight="100vh">
        <VStack>
          <Title level={4}>
            {platform} ({process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR ? 'Simulator' : 'Appetize'})
          </Title>
          <DeepLinkRenderer
            apiKey={platform === 'ios' ? 'mvu4lu2aff4nn5kp55dwtc5kc4' : 'rgetydg4vc2bro4mrxwybgprdy'}
            platform={platform}
            deepLinkBaseUrl={
              process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR ? 'exp://127.0.0.1:8081' : 'vibrant://class101.net'
            }
            storyParams={{
              component: context.title.split('/').pop(),
              story: context.story,
              props: JSON.stringify(context.args).replace(/%/g, '%25'),
            }}
            context={platform}
          />
        </VStack>
      </Paper>
    </HStack>
  );
};

const appetizeIframeStyle = css`
  #appetize-iframe-ios,
  #appetize-iframe-android {
    width: 50vw !important;
    position: fixed;
    right: 0;
    top: 50px;
  }
`;
