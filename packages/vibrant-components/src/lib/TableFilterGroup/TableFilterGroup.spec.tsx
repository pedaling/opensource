import { fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableDateFilter } from './TableDateFilter';
import { TableFilterGroup } from './TableFilterGroup';
import { TableStringFilter } from './TableStringFilter';
import { ko as TableFilterGroupTranslation } from './translation';

describe('<TableFilterGroup />', () => {
  const mockOnFilterChange = jest.fn();
  const { render } = createReactRenderer(children => (
    <PortalRootProvider zIndex={1}>
      <ConfigProvider translations={{ tableFilterGroup: TableFilterGroupTranslation }}>{children}</ConfigProvider>
    </PortalRootProvider>
  ));
  let element: HTMLElement;
  let renderer: ReactRenderer;

  describe('when initialFilterDataKeys prop', () => {
    describe('has no initial values', () => {
      beforeEach(() => {
        renderer = render(
          <TableFilterGroup initialFilterDataKeys={[]}>
            <TableDateFilter testId="period-filter" dataKey="period" label="수강 기간" />
          </TableFilterGroup>
        );

        element = renderer.getByTestId('filter-wrapper');
      });

      it('no filter is displayed', () => {
        expect(element.childElementCount).toEqual(1);
      });

      it('only filter add button text is displayed', () => {
        expect(renderer.queryByTestId('filter-add-button')).toBeTruthy();
      });

      it('only filter add button is displayed', () => {
        expect(renderer.queryByTestId('filter-add-button')?.textContent).toEqual(TableFilterGroupTranslation.add);
      });
    });

    describe('has initial values', () => {
      beforeEach(() => {
        renderer = render(
          <TableFilterGroup initialFilterDataKeys={['id']}>
            <TableStringFilter
              testId="id-filter"
              dataKey="id"
              label="ID"
              defaultValue={{ value: '1234', operator: 'equals' }}
            />
            <TableStringFilter
              testId="creator-filter"
              dataKey="creator"
              label="Creator"
              defaultValue={{ value: 'Super', operator: 'empty' }}
            />
            <TableDateFilter testId="period-filter" dataKey="period" label="수강 기간" />
          </TableFilterGroup>
        );

        element = renderer.getByTestId('filter-wrapper');
      });

      it('target datakey filter exists', () => {
        expect(renderer.queryByTestId('id-filter')).toBeTruthy();
      });

      it('remaining filters do not exists', () => {
        expect(renderer.queryByTestId('creator-filter')).toBeFalsy();
      });

      it('other filters do not exist', () => {
        expect(renderer.queryByTestId('period-filter')).toBeFalsy();
      });

      it('filter add button text is still displayed', () => {
        expect(renderer.queryByTestId('filter-add-button')).toBeTruthy();
      });
    });
  });

  describe('when filter add button is clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={[]} onFilterChange={mockOnFilterChange}>
          <TableStringFilter
            testId="id-filter"
            dataKey="id"
            label="ID"
            defaultValue={{ value: '1234', operator: 'equals' }}
          />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByTestId('filter-add-button'));
    });

    describe('available filter labels', () => {
      it('should appear', async () => {
        await waitFor(() => expect(renderer.queryByTestId('id-filter-add')).toBeTruthy());
      });
    });

    describe('and filter label button is clicked', () => {
      beforeEach(async () => {
        await waitFor(() => fireEvent.click(renderer.getByTestId('id-filter-add')));
      });

      it('it creates that filter component', async () => {
        expect(renderer.queryByTestId('id-filter')).toBeTruthy();
      });

      it('onFilterChange function is called', async () => {
        expect(mockOnFilterChange).toBeCalled();
      });

      it('initialize button should be appear', () => {
        expect(renderer.queryByTestId('filter-initialize-button')).toBeTruthy();
      });

      describe('and initialize button is clicked', () => {
        beforeEach(async () => {
          await waitFor(() => fireEvent.click(renderer.getByTestId('filter-initialize-button')));
        });

        it('it restores the changes', () => {
          expect(renderer.queryByTestId('id-filter')).toBeFalsy();
        });
      });
    });
  });
});
