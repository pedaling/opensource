import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import * as ReactSpring from '@react-spring/native';
import { createShadowsComponent } from '@vibrant-ui/components';
import type { Dependencies } from '@vibrant-ui/core';
import { Box, VibrantProvider } from '@vibrant-ui/core';
import { StoryView } from './StoryView';
import { useStorybookInformation } from './useStorybookInformation';

const dependencies: Dependencies = {
  nativeLinearGradient: LinearGradient,
  nativeShadows: createShadowsComponent(Shadow),
  reactSpringModule: ReactSpring,
};

const App = () => {
  const [loaded] = useFonts({
    Pretendard: 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf',
  });

  const { story } = useStorybookInformation();

  if (!loaded || !story) {
    return null;
  }

  return (
    <VibrantProvider dependencies={dependencies}>
      <Box base={ScrollView} height="100%">
        <Box base={SafeAreaView}>
          <StoryView {...story} />
        </Box>
      </Box>
    </VibrantProvider>
  );
};

export default App;
