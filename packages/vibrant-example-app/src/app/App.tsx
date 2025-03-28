import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import { SafeAreaView, ToastProvider } from '@vibrant-ui/components';
import type { Dependencies } from '@vibrant-ui/core';
import { PageScroll, PopoverProvider, VibrantProvider, createShadowsComponent } from '@vibrant-ui/core';
import { StoryView } from './StoryView';
import { useAppUpdate } from './useAppUpdate';
import { useStorybookInformation } from './useStorybookInformation';

const dependencies: Dependencies = {
  nativeLinearGradient: LinearGradient,
  nativeShadows: createShadowsComponent(Shadow),
};

const App = () => {
  const { story } = useStorybookInformation();
  const { isLastVersion } = useAppUpdate();

  if (!story || !isLastVersion) {
    return null;
  }

  return (
    <VibrantProvider
      theme={{
        typographyWeight: {
          regular: {
            // fontFamily: 'Pretendard-Regular',
            fontWeight: '400',
          },
          medium: {
            // fontFamily: 'Pretendard-Medium',
            fontWeight: '500',
          },
          bold: {
            // fontFamily: 'Pretendard-Bold',
            fontWeight: '700',
          },
          extraBold: {
            // fontFamily: 'Pretendard-ExtraBold',
            fontWeight: '800',
          },
        },
      }}
      dependencies={dependencies}
      portalBottomPriorityOrder={['bottom-bar', 'floating-action-button']}
    >
      <ToastProvider>
        <PopoverProvider>
          <PageScroll>
            <SafeAreaView>
              <StoryView {...story} />
            </SafeAreaView>
          </PageScroll>
        </PopoverProvider>
      </ToastProvider>
    </VibrantProvider>
  );
};

export default App;
