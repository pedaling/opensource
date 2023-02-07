import { fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableFilterGroup } from '../TableFilterGroup';
import { TableStringFilter } from '../TableStringFilter';
import { ko as TableFilterGroupTranslation } from '../translation';

describe('<TableStringFilter />', () => {
  const { render } = createReactRenderer(children => (
    <PortalRootProvider zIndex={1}>
      <ConfigProvider
        translations={{
          tableFilterGroup: TableFilterGroupTranslation,
        }}
      >
        {children}
      </ConfigProvider>
    </PortalRootProvider>
  ));
  let renderer: ReactRenderer;

  describe('when defaultValue not provided', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" />
        </TableFilterGroup>
      );
    });

    it('should render FilterChip with label', () => {
      expect(renderer.queryByRole('button', { name: 'ID' })).toBeTruthy();
    });
  });

  describe('when defaultValue provided with value and operator that requires value', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" defaultValue={{ value: '1234', operator: 'equals' }} />
        </TableFilterGroup>
      );
    });

    it('should render FilterChip with label and value', () => {
      expect(renderer.queryByRole('button', { name: 'ID: 1234' })).toBeTruthy();
    });

    describe('when FilterChip clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button'));
      });

      it('should render TextField and operator label text', async () => {
        await waitFor(() => {
          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.equals)).toBeTruthy();

          expect(renderer.queryByRole('textbox')).toBeTruthy();
        });
      });
    });
  });

  describe('when defaultValue provided with empty value and operator that requires value ', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" defaultValue={{ value: '', operator: 'equals' }} />
        </TableFilterGroup>
      );
    });

    it('should render FilterChip with label', () => {
      expect(renderer.queryByRole('button', { name: 'ID' })).toBeTruthy();
    });
  });

  describe("when defaultValue provided with the operator that doesn't require value", () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" defaultValue={{ value: '', operator: 'empty' }} />
        </TableFilterGroup>
      );
    });

    it('should render FilterChip with label and operator label', () => {
      expect(
        renderer.queryByRole('button', { name: `ID: ${TableFilterGroupTranslation.stringFilter.filterLabel.empty}` })
      ).toBeTruthy();
    });

    describe('when FilterChip clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button'));
      });

      it('should render TextField and operator label text', async () => {
        await waitFor(() => {
          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.empty)).toBeTruthy();

          expect(renderer.queryByRole('textbox')).toBeNull();
        });
      });
    });
  });
});
