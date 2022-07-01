import { GlobalStyle } from '@vibrant-ui/components';
import type { ReactNativeRenderer } from '@vibrant-ui/utils/testing';
import { createReactNativeRenderer } from '@vibrant-ui/utils/testing';

describe('<GlobalStyle />', () => {
  const { render } = createReactNativeRenderer();

  let renderer: ReactNativeRenderer;

  beforeEach(() => {
    renderer = render(<GlobalStyle />);
  });

  it('should return null', () => {
    expect(renderer.toJSON()).toBeNull();
  });
});
