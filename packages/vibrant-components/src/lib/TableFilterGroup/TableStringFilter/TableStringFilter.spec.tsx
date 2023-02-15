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

    it('should render button with label', () => {
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

    it('should render button with label and value', () => {
      expect(renderer.queryByRole('button', { name: 'ID: 1234' })).toBeTruthy();
    });

    describe('when button clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button'));
      });

      it('should render text input and operator label text', async () => {
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

    it('should render button with label', () => {
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

    it('should render button with label and operator label', () => {
      expect(
        renderer.queryByRole('button', { name: `ID: ${TableFilterGroupTranslation.stringFilter.filterLabel.empty}` })
      ).toBeTruthy();
    });

    describe('when FilterChip clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button'));
      });

      it('should render text input and operator label text', async () => {
        await waitFor(() => {
          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.empty)).toBeTruthy();

          expect(renderer.queryByRole('textbox')).toBeNull();
        });
      });
    });
  });

  describe('when operators not provided and button clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByRole('button'));
    });

    it('should render button with equal operator label', async () => {
      await waitFor(() => {
        expect(
          renderer.queryByRole('button', { name: TableFilterGroupTranslation.stringFilter.operators.equals })
        ).toBeTruthy();
      });
    });

    describe('when the button with operator label clicked', () => {
      beforeEach(async () => {
        const element = await renderer.findByRole('button', {
          name: TableFilterGroupTranslation.stringFilter.operators.equals,
        });

        fireEvent.click(element);
      });

      it('should render all operator options', async () => {
        await waitFor(() => {
          expect(renderer.queryAllByText(TableFilterGroupTranslation.stringFilter.operators.equals)[1]).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notEquals)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.contains)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notContains)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.empty)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notEmpty)).toBeTruthy();
        });
      });
    });
  });

  describe('when operators provided and button clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" operators={['contains', 'empty']} />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByRole('button'));
    });

    it('should render button with first operator label', async () => {
      await waitFor(() => {
        expect(
          renderer.queryByRole('button', { name: TableFilterGroupTranslation.stringFilter.operators.contains })
        ).toBeTruthy();
      });
    });

    describe('when the button with operator label clicked', () => {
      beforeEach(async () => {
        const element = await renderer.findByRole('button', {
          name: TableFilterGroupTranslation.stringFilter.operators.contains,
        });

        fireEvent.click(element);
      });

      it('should render only provided operator options', async () => {
        await waitFor(() => {
          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.equals)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notEquals)).toBeFalsy();

          expect(renderer.queryAllByText(TableFilterGroupTranslation.stringFilter.operators.contains)[1]).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notContains)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.empty)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.stringFilter.operators.notEmpty)).toBeFalsy();
        });
      });
    });
  });

  describe('when placeholder provided and button clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['id']}>
          <TableStringFilter dataKey="id" label="ID" operators={['contains', 'empty']} placeholder="1234" />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByRole('button'));
    });

    it('should render text input with placeholder', async () => {
      await waitFor(() => {
        expect(renderer.queryByPlaceholderText('1234')).toBeTruthy();
      });
    });
  });
});
