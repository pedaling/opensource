import type { ReactElement } from 'react';
import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { render } from '@testing-library/react';

export const createRenderer = () => {
  const emotionCache = createEmotionCache({ key: 'emotion-test-renderer' });

  return {
    render: (element: ReactElement) =>
      render(<EmotionCacheProvider value={emotionCache}>{element}</EmotionCacheProvider>),
  };
};
