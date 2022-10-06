import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/utils';
import * as matchers from '@testing-library/jest-native';
import { render } from '@testing-library/react-native';

export type ReactNativeRenderer = ReturnType<typeof render>;

export const createReactNativeRenderer = (wrapper: (children: ReactElement) => ReactElement = children => children) => {
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

  const wrap = (global as any).wrap ?? ((component: any) => component);

  return {
    render: (element: ReactElement): ReactNativeRenderer =>
      render(<EmotionCacheProvider value={emotionCache}>{wrap(wrapper(element))}</EmotionCacheProvider>),
    rerender: (renderer: ReactNativeRenderer, element: ReactElement) =>
      renderer.rerender(<EmotionCacheProvider value={emotionCache}>{wrap(wrapper(element))}</EmotionCacheProvider>),
  };
};
