import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/utils';
import * as matchers from '@testing-library/jest-native';
import { render } from '@testing-library/react-native';

export type ReactNativeRenderer = ReturnType<typeof render>;

export const createReactNativeRenderer = () => {
  expect.extend(matchers);

  let emotionCache: EmotionCache;

  beforeEach(() => {
    emotionCache = createEmotionCache({ key: 'emotion' });
  });

  afterEach(() => {
    emotionCache.sheet.tags.forEach(styleTag => {
      styleTag.remove();
    });
  });

  return {
    render: (element: ReactElement): ReactNativeRenderer =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
