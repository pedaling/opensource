import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { Title, VStack } from '@vibrant-ui/components';
import { VibrantProvider } from '@vibrant-ui/core';
import { createShadowsComponent } from '@vibrant-ui/utils';

const dependencies = {
  nativeLinearGradient: LinearGradient,
  nativeShadow: createShadowsComponent(Shadow),
};

const App = () => {
  const [loaded] = useFonts({
    Pretendard: 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf',
  });

  if (!loaded) {
    return null;
  }

  return (
    <VibrantProvider dependencies={dependencies}>
      <VStack alignment="center" justifyContent="center" height="100%" px={20}>
        <Title level={5}>Welcome VibrantExampleApp 👋</Title>
      </VStack>
    </VibrantProvider>
  );
};

export default App;
