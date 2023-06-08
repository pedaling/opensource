import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Title } from '../../Title';
import { DrawerHeader } from './DrawerHeader';

describe('<DrawerHeader />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when title is activated', () => {
    beforeEach(async () => {
      renderer = render(<DrawerHeader title="DrawerHeader test" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when children is set', () => {
    beforeEach(async () => {
      renderer = render(
        <DrawerHeader closable={true}>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="stretch">
            <Title level={3}>DrawerHeader custom title</Title>
            <Title level={3}>DrawerHeader custom subtitle</Title>
          </Box>
        </DrawerHeader>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when closable is true', () => {
    beforeEach(async () => {
      renderer = render(<DrawerHeader title="DrawerHeader test" closable={true} />);
    });

    it('should render close button', () => {
      expect(renderer.getByRole('button', { name: 'close-button' })).toBeTruthy();
    });
  });
});
