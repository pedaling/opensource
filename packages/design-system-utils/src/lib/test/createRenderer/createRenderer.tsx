import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { matchers } from '@emotion/jest';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { render } from '@testing-library/react';

export const createRenderer = () => {
  expect.extend(matchers);
  const emotionCache = createEmotionCache({ key: 'emotion' });

  return {
    render: (element: ReactElement) =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
