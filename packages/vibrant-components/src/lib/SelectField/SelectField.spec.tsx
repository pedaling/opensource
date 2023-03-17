import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { SelectField } from './SelectField';

describe('<SelectField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="lg"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="md"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="sm"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
