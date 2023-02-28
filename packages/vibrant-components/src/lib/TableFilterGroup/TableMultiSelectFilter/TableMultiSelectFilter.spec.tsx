import { fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableMultiSelectFilter } from '..';
import { TableFilterGroup } from '../TableFilterGroup';
import { ko as TableFilterGroupTranslation } from '../translation';

describe('<TableMultiSelectFilter />', () => {
  const { render } = createReactRenderer(children => (
    <PortalRootProvider zIndex={1}>
      <ConfigProvider
        translations={{
          tableFilterGroup: TableFilterGroupTranslation,
        }}
      >
        <TableFilterGroup initialFilterDataKeys={['status']}>{children}</TableFilterGroup>
      </ConfigProvider>
    </PortalRootProvider>
  ));
  let renderer: ReactRenderer;

  describe('when defaultValue not provided', () => {
    beforeEach(() => {
      renderer = render(
        <TableMultiSelectFilter
          dataKey="status"
          label="상태"
          options={[
            {
              value: '1',
              label: 'Option1',
            },
            {
              value: '2',
              label: 'Option2',
            },
          ]}
        />
      );
    });

    it('should render button with label', () => {
      expect(renderer.queryByRole('button', { name: '상태' })).toBeTruthy();
    });
  });

  describe('when defaultValue provided with selected option values and operator that requires value', () => {
    beforeEach(() => {
      renderer = render(
        <TableMultiSelectFilter
          dataKey="status"
          label="상태"
          options={[
            {
              value: '1',
              label: 'Option1',
            },
            {
              value: '2',
              label: 'Option2',
            },
            {
              value: '3',
              label: 'Option3',
            },
          ]}
          defaultValue={{
            value: ['1', '2'],
            operator: 'equals',
          }}
        />
      );
    });

    it('should render button with label and selected options labels', () => {
      expect(renderer.queryByRole('button', { name: '상태: Option1, Option2' })).toBeTruthy();
    });

    describe('when the button with label and selected options labels', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button', { name: '상태: Option1, Option2' }));
      });

      it('should render selected options with checked checkbox', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('checkbox', { name: 'Option1', checked: true })).toBeTruthy();

          expect(renderer.queryByRole('checkbox', { name: 'Option2', checked: true })).toBeTruthy();
        });
      });

      it('should render not selected options with unchecked checkbox ', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('checkbox', { name: 'Option3', checked: false })).toBeTruthy();
        });
      });
    });
  });
});
