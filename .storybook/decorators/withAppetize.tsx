import { DeepLinkRenderer } from '@storybook/native-components';
import type { DecoratorFn } from '@storybook/react';
import { HStack, Paper, Title, VStack } from '@vibrant-ui/components';

export const withAppetize: DecoratorFn = (storyFn, context) => {
  const { platform } = context.globals;

  if (platform === 'off') {
    return storyFn();
  }

  return (
    <HStack>
      <Paper width="70%" minHeight="100vh" backgroundColor="background">
        {storyFn()}
      </Paper>
      <Paper width="30%" minHeight="100vh">
        <VStack>
          <Title level={4}>
            {platform} ({process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR ? 'Simulator' : 'Appetize'})
          </Title>
          <DeepLinkRenderer
            apiKey={platform === 'ios' ? 'mvu4lu2aff4nn5kp55dwtc5kc4' : 'rgetydg4vc2bro4mrxwybgprdy'}
            platform={platform}
            deepLinkBaseUrl={process.env.NODE_ENV === 'development' ? 'exp://127.0.0.1:8081' : 'vibrant://class101.net'}
            storyParams={{
              component: context.title.split('/').pop(),
              story: context.story,
              props: JSON.stringify(context.args),
            }}
            context={platform}
          />
        </VStack>
      </Paper>
    </HStack>
  );
};
