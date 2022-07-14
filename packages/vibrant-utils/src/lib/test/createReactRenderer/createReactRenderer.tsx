import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { matchers } from '@emotion/jest';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/utils';
import { render } from '@testing-library/react';

export type ReactRenderer = ReturnType<typeof render>;

export const createReactRenderer = () => {
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
    render: (element: ReactElement): ReactRenderer =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
    rerender: (renderer: ReactRenderer, element: ReactElement) =>
      renderer.rerender(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
