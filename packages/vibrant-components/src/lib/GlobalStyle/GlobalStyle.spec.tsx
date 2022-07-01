import { waitFor } from '@testing-library/react';
import { GlobalStyle } from '@vibrant-ui/components';
import { createReactRenderer } from '@vibrant-ui/utils';

describe('<GlobalStyle />', () => {
  const { render } = createReactRenderer();

  beforeEach(() => {
    render(<GlobalStyle />);
  });

  it('should rendered', async () => {
    await waitFor(() =>
      expect(document.head.querySelectorAll('style[data-emotion="emotion-global"]').length).toBeGreaterThan(0)
    );
  });

  it('match snapshot', async () => {
    await waitFor(() =>
      expect(document.head.querySelectorAll('style[data-emotion="emotion-global"]')).toMatchSnapshot()
    );
  });
});
