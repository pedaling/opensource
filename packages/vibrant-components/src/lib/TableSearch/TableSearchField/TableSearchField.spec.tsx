import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableSearchField } from './TableSearchField';

describe('<TableSearchField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when maxWidth is default', () => {
    beforeEach(async () => {
      renderer = render(<TableSearchField />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when maxWidth is set', () => {
    beforeEach(async () => {
      renderer = render(<TableSearchField maxWidth={1200} />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
