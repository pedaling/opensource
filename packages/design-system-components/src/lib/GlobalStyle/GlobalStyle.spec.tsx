import { waitFor } from '@testing-library/react';
import { GlobalStyle } from '@class101/design-system-components';
import { createReactRenderer } from '@class101/design-system-utils';

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
