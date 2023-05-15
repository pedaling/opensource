import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableSearch } from './TableSearch';

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

describe('<TableSearch />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when component is rendering', () => {
    beforeEach(async () => {
      renderer = render(
        <TableSearch>
          <TableSearch.Field />
          <TableSearch.Option options={options} />
        </TableSearch>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when options change', () => {
    let searchField: HTMLInputElement;

    beforeEach(async () => {
      renderer = render(
        <TableSearch>
          <TableSearch.Field />
          <TableSearch.Option options={options} />
        </TableSearch>
      );

      const selectField = await renderer.findByTestId('select-field');

      await waitFor(() => userEvent.click(selectField.children[1]));

      searchField = (await renderer.findByTestId('table-search-field')) as HTMLInputElement;
    });

    it('TableSearch.Field is focused', () => {
      expect(searchField.id).toEqual(document.activeElement?.id);
    });
  });
});
