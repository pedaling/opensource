import React, { Profiler } from 'react';
import styled from '@emotion/styled';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Box } from './Box';

describe('<Box /> Performance', () => {
  const { render } = createReactRenderer();
  let vibrantRenderer: ReactRenderer;
  let emotionRenderer: ReactRenderer;

  const createOnRenderCallback = () => {
    let totalDuration = 0;
    let renderCount = 0;
    const onRender = (
      _id: string,
      _phase: 'mount' | 'update',
      actualDuration: number,
      _baseDuration: number,
      _startTime: number,
      _commitTime: number,
      _interactions: Set<any>
    ) => {
      totalDuration += actualDuration;
      renderCount++;
    };

    return { onRender, getAverageDuration: () => (renderCount ? totalDuration / renderCount : 0) };
  };

  const EmotionBoxComponent = () => {
    const StyledComponent = styled.div`
      display: flex;
      align-content: stretch;
      flex-shrink: 1;
      flex-direction: column;
      box-sizing: border-box;
      position: relative;
      width: 300px;
      height: 300px;
      background-color: red;
    `;

    return <StyledComponent />;
  };

  describe('Mount Performance', () => {
    beforeEach(() => {
      vibrantRenderer = render(
        <Profiler id="vibrant" onRender={createOnRenderCallback().onRender}>
          <Box width={300} height={300} backgroundColor="red" />
        </Profiler>
      );

      emotionRenderer = render(
        <Profiler id="emotion" onRender={createOnRenderCallback().onRender}>
          <EmotionBoxComponent />
        </Profiler>
      );
    });

    it('div element created', () => {
      expect(vibrantRenderer.container.querySelector('div')).toBeTruthy();
      expect(emotionRenderer.container.querySelector('div')).toBeTruthy();
    });

    it('match snapshot', () => {
      expect(vibrantRenderer.container).toMatchSnapshot('vibrant box snapshot');
      expect(emotionRenderer.container).toMatchSnapshot('emotion box snapshot');
    });

    it('should mount <Box /> quickly over multiple iterations', () => {
      const iterations = 1000;
      let vibrantTotal = 0;
      let emotionTotal = 0;

      for (let i = 0; i < iterations; i++) {
        const vibrantCallback = createOnRenderCallback();
        const emotionCallback = createOnRenderCallback();

        vibrantRenderer = render(
          <Profiler id={`vibrant-${i}`} onRender={vibrantCallback.onRender}>
            <Box width={300} height={300} backgroundColor="red" />
          </Profiler>
        );

        emotionRenderer = render(
          <Profiler id={`emotion-${i}`} onRender={emotionCallback.onRender}>
            <EmotionBoxComponent />
          </Profiler>
        );

        vibrantTotal += vibrantCallback.getAverageDuration();
        emotionTotal += emotionCallback.getAverageDuration();
      }

      const vibrantAvg = vibrantTotal / iterations;
      const emotionAvg = emotionTotal / iterations;

      expect(vibrantAvg / emotionAvg).toBeLessThan(3);
    });
  });
});
