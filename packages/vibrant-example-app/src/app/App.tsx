import { useFonts } from 'expo-font';
import { VStack, Title, SelectField } from '@vibrant-ui/components';

const App = () => {
  const [loaded] = useFonts({
    Pretendard: 'https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf',
  });

  if (!loaded) {
    return null;
  }

  return (
    <VStack alignment="center" justifyContent="center" height="100%" px={20}>
      <Title level={5}>Welcome VibrantExampleApp 👋</Title>
      <SelectField
        options={[{ label: 'ladsafasdfljdasklgjad fklgsj fldksj aksdfhasdjkfhasdkljfhjkbel', value: 'value' }]}
        label="label"
        inlineLabel={true}
      />
    </VStack>
  );
};

export default App;
