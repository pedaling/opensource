import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { matchers } from '@emotion/jest';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/utils';
import { render } from '@testing-library/react';

export type ReactRenderer = ReturnType<typeof render>;

expect.extend(matchers);

export const createReactRenderer = (wrapper: (children: ReactElement) => ReactElement = children => children) => {
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
    render: (element: ReactElement): ReactRenderer =>
      render(<EmotionCacheProvider value={emotionCache}>{wrap(wrapper(element))}</EmotionCacheProvider>),
    rerender: (renderer: ReactRenderer, element: ReactElement) =>
      renderer.rerender(<EmotionCacheProvider value={emotionCache}>{wrap(wrapper(element))}</EmotionCacheProvider>),
  };
};
