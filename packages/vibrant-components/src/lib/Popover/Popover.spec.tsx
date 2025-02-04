import React, { useRef } from 'react';
import { getByTestId } from '@testing-library/react';
import { PopoverProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { BrowserTesting, createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Popover } from './Popover';

const RenderCounter = ({ children }: { children: React.ReactElement }) => {
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  return (
    <div>
      <div data-testid="render-count">{renderCountRef.current}</div>
      {children}
    </div>
  );
};

describe('<Popover />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when popover is open', () => {
    beforeEach(async () => {
      await BrowserTesting.resize(1024, 768);

      renderer = render(
        <PopoverProvider>
          <Popover position="top" open={true} title="Test Popover">
            <RenderCounter>
              <button>Opener</button>
            </RenderCounter>
          </Popover>
        </PopoverProvider>
      );
    });

    it('should not re-render infinitely', async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const renderCountElement = getByTestId(renderer.container, 'render-count');
      const renderCount = parseInt(renderCountElement.textContent || '0', 10);

      expect(renderCount).toBeLessThan(20);
    });
  });
});
