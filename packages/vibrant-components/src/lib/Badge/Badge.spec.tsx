import { Icon } from '@vibrant-ui/icons';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Badge } from './Badge';

describe('<Badge />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when size is sm and kind is primary with IconComponent', () => {
    beforeEach(async () => {
      renderer = render(
        <Badge size="sm" IconComponent={Icon.Pin.Fill} kind="primary">
          this is a badge
        </Badge>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
