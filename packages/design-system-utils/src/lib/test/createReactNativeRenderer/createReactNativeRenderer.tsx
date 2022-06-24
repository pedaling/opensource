import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import * as matchers from '@testing-library/jest-native';
import { render } from '@testing-library/react-native';

export type ReactNativeRenderer = ReturnType<typeof render>;

export const createReactNativeRenderer = () => {
  expect.extend(matchers);
  const emotionCache = createEmotionCache({ key: 'emotion' });

  return {
    render: (element: ReactElement): ReactNativeRenderer =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
