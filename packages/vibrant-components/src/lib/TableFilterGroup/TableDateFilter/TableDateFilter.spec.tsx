import { fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableFilterGroup } from '../TableFilterGroup';
import { ko as TableFilterGroupTranslation } from '../translation';
import { TableDateFilter } from './TableDateFilter';

describe('<TableDateFilter />', () => {
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
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter dataKey="createdAt" label="생성일" />
        </TableFilterGroup>
      );
    });

    it('should render button with label', () => {
      expect(renderer.queryByRole('button', { name: '생성일' })).toBeTruthy();
    });
  });

  describe('when defaultValue provided with a date value and operator that requires a date', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter
            dataKey="createdAt"
            label="생성일"
            defaultValue={{ value: [new Date('2023-02-22')], operator: 'equals' }}
          />
        </TableFilterGroup>
      );
    });

    it('should render button with label and formatted date', () => {
      expect(renderer.queryByRole('button', { name: '생성일: 2023/02/22' })).toBeTruthy();
    });

    describe('when the button with label and formatted date clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button'));
      });

      it('should render date input with value and operator label text', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('button', { name: '2023/02/22' })).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.equals)).toBeTruthy();
        });
      });
    });
  });

  describe('when defaultValue provided with empty value and operator that requires a date ', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter dataKey="createdAt" label="생성일" defaultValue={{ value: [], operator: 'equals' }} />
        </TableFilterGroup>
      );
    });

    it('should render button with label', () => {
      expect(renderer.queryByRole('button', { name: '생성일' })).toBeTruthy();
    });
  });

  describe('when defaultValue provided with two dates value and operator that requires two dates', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter
            dataKey="createdAt"
            label="생성일"
            defaultValue={{ value: [new Date('2023-02-22'), new Date('2023-03-22')], operator: 'between' }}
          />
        </TableFilterGroup>
      );
    });

    it('should render button with label and formatted date', () => {
      expect(renderer.queryByRole('button', { name: '생성일: 2023/02/22 - 2023/03/22' })).toBeTruthy();
    });

    describe('when the button with label and formatted date clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button', { name: '생성일: 2023/02/22 - 2023/03/22' }));
      });

      it('should render date input with value and operator label text', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('button', { name: '2023/02/22 - 2023/03/22' })).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.between)).toBeTruthy();
        });
      });
    });
  });

  describe('when defaultValue provided with a date value and operator that requires two dates', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter
            dataKey="createdAt"
            label="생성일"
            defaultValue={{ value: [new Date('2023-02-22')], operator: 'between' }}
          />
        </TableFilterGroup>
      );
    });

    it('should render button with label', () => {
      expect(renderer.queryByRole('button', { name: '생성일' })).toBeTruthy();
    });

    describe('when the button with label clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button', { name: '생성일' }));
      });

      it('should render empty date input', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('button', { name: '' })).toBeTruthy();
        });
      });
    });
  });

  describe('when operators not provided and button clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter dataKey="createdAt" label="생성일" />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByRole('button'));
    });

    it('should render button with equal operator label', async () => {
      await waitFor(() => {
        expect(
          renderer.queryByRole('button', { name: TableFilterGroupTranslation.dateFilter.operators.equals })
        ).toBeTruthy();
      });
    });

    describe('when the button with the equal operator label clicked', () => {
      beforeEach(async () => {
        const element = await renderer.findByRole('button', {
          name: TableFilterGroupTranslation.dateFilter.operators.equals,
        });

        fireEvent.click(element);
      });

      it('should render all operator options', async () => {
        await waitFor(() => {
          expect(renderer.queryAllByText(TableFilterGroupTranslation.dateFilter.operators.equals)[1]).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.notEquals)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.before)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.after)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.onOrBefore)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.onOrAfter)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.between)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.empty)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.notEmpty)).toBeTruthy();
        });
      });
    });
  });

  describe('when operators provided and button clicked', () => {
    beforeEach(() => {
      renderer = render(
        <TableFilterGroup initialFilterDataKeys={['createdAt']}>
          <TableDateFilter dataKey="createdAt" label="생성일" operators={['before', 'between']} />
        </TableFilterGroup>
      );

      fireEvent.click(renderer.getByRole('button'));
    });

    it('should render button with first operator label', async () => {
      await waitFor(() => {
        expect(
          renderer.queryByRole('button', { name: TableFilterGroupTranslation.dateFilter.operators.before })
        ).toBeTruthy();
      });
    });

    describe('when the button with operator label clicked', () => {
      beforeEach(async () => {
        const element = await renderer.findByRole('button', {
          name: TableFilterGroupTranslation.dateFilter.operators.before,
        });

        fireEvent.click(element);
      });

      it('should render only provided operator options', async () => {
        await waitFor(() => {
          expect(renderer.queryAllByText(TableFilterGroupTranslation.dateFilter.operators.equals)[1]).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.notEquals)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.before)).toBeTruthy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.after)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.onOrBefore)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.onOrAfter)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.empty)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.empty)).toBeFalsy();

          expect(renderer.queryByText(TableFilterGroupTranslation.dateFilter.operators.notEmpty)).toBeFalsy();
        });
      });
    });
  });
});
