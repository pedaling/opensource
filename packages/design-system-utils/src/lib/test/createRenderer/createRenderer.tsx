import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { matchers } from '@emotion/jest';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { render } from '@testing-library/react';

expect.extend(matchers);

export const createRenderer = () => {
  const emotionCache = createEmotionCache({ key: 'emotion' });

  return {
    render: (element: ReactElement) =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
