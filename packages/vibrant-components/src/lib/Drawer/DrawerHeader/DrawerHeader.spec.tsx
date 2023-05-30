import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { HStack } from '../../HStack';
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
          <HStack>
            <Title level={3}>DrawerHeader custom title</Title>
            <Title level={3}>DrawerHeader custom subtitle</Title>
          </HStack>
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

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
