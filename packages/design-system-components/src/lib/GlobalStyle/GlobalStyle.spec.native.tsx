import { GlobalStyle } from '@class101/design-system-components';
import type { ReactNativeRenderer } from '@class101/design-system-utils';
import { createReactNativeRenderer } from '@class101/design-system-utils';

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
