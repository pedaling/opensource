import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import * as ReactSpring from '@react-spring/native';
import { ToastProvider } from '@vibrant-ui/components';
import type { Dependencies } from '@vibrant-ui/core';
import { Box, PageScroll, ScrollBox, VibrantProvider, createShadowsComponent } from '@vibrant-ui/core';
import { StoryView } from './StoryView';
import { useAppUpdate } from './useAppUpdate';
import { useStorybookInformation } from './useStorybookInformation';

const dependencies: Dependencies = {
  nativeLinearGradient: LinearGradient,
  nativeShadows: createShadowsComponent(Shadow),
  reactSpringModule: ReactSpring,
};

const App = () => {
  const [loaded] = useFonts({
    'Pretendard-Regular': 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf',
    'Pretendard-Medium': 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf',
    'Pretendard-Bold': 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf',
    'Pretendard-ExtraBold': 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf',
  });

  const { story } = useStorybookInformation();
  const { isLastVersion } = useAppUpdate();

  if (!loaded || !story || !isLastVersion) {
    return null;
  }

  return (
    <VibrantProvider
      theme={{
        typographyWeight: {
          regular: {
            fontFamily: 'Pretendard-Regular',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'Pretendard-Medium',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'Pretendard-Bold',
            fontWeight: '700',
          },
          extraBold: {
            fontFamily: 'Pretendard-ExtraBold',
            fontWeight: '800',
          },
        },
      }}
      dependencies={dependencies}
      portalBottomPriorityOrder={['bottom-bar', 'floating-action-button']}
    >
      <ToastProvider>
        <PageScroll>
          <ScrollBox height="100%" keyboardShouldPersistTaps="always">
            <Box base={SafeAreaView} alignItems="start">
              <StoryView {...story} />
            </Box>
          </ScrollBox>
        </PageScroll>
      </ToastProvider>
    </VibrantProvider>
  );
};

export default App;
