import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableFilterGroup } from './TableFilterGroup';
import type { TableFilterGroupProps } from './TableFilterGroupProps';
import { TableStringFilter } from './TableStringFilter';

describe('<TableFilterGroup />', () => {
  const { render } = createReactRenderer();

  const onFilterChangeFunction = jest.fn().mockReturnValue('callback when filters change').mockName('onFilterChange');
  let element: HTMLElement;
  let renderer: ReactRenderer;

  const props: TableFilterGroupProps = {
    children: (
      <TableStringFilter
        dataKey="id"
        label="ID"
        defaultValue={{
          value: 'loulee',
          operator: 'equals',
        }}
      />
    ),
    initialFilterDataKeys: [],
    onFilterChange: onFilterChangeFunction,
  };

  describe('when initialFilterDataKeys prop', () => {
    describe('is empty', () => {
      beforeEach(() => {
        props.initialFilterDataKeys = [];

        renderer = render(<TableFilterGroup {...props} />);
      });

      it('no filter is shown', () => {
        element = renderer.getByTestId('filter-wrapper');

        expect(element.childElementCount).toEqual(1);
      });
    });

    describe('contains specific key', () => {
      beforeEach(() => {
        props.initialFilterDataKeys = ['id'];

        renderer = render(<TableFilterGroup {...props} />);
      });

      it('no filter is shown', () => {
        element = renderer.getByTestId('id-filter');

        expect(renderer.getByTestId('id-filter')).toBeTruthy();
      });
    });

    // describe.each(['default', 'error'])('is set to %s', state => {});
  });

  //   describe('label prop', () => {
  //     describe('is set', () => {
  //       beforeEach(() => {
  //         props.label = faker.lorem.word();
  //       });

  //       it('should ', () => {
  //         expect(subject().container.getElementsByTagName('label')[0].textContent).toEqual(props.label);
  //       });
  //     });
  //   });
});
