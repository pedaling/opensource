import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableSearchOption } from './TableSearchOption';

const options = [
  {
    label: 'option 1',
    value: '1',
  },
  {
    label: 'option 2',
    value: '2',
  },
  {
    label: 'option 3',
    value: '3',
  },
];

describe('<TableSearchOption />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when width is default', () => {
    beforeEach(async () => {
      renderer = render(<TableSearchOption options={options} />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when width is 1200px', () => {
    beforeEach(async () => {
      renderer = render(<TableSearchOption options={options} width={1200} />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when defaultOption is not set', () => {
    let selectedOption: string;

    beforeEach(async () => {
      renderer = render(<TableSearchOption options={options} />);

      const tableSearchOption = await renderer.findByTestId('table-search-option');

      selectedOption = tableSearchOption.firstChild?.textContent ?? '';
    });

    it('match to first item of options', () => {
      expect(selectedOption).toEqual(options[0].label);
    });
  });

  describe('when defaultOption is set', () => {
    let selectedOption: string;

    beforeEach(async () => {
      renderer = render(<TableSearchOption options={options} defaultOption={options[2].value} />);

      const tableSearchOption = await renderer.findByTestId('table-search-option');

      selectedOption = tableSearchOption.firstChild?.textContent ?? '';
    });

    it('match to selected item of options', () => {
      expect(selectedOption).toEqual(options[2].label);
    });
  });
});
