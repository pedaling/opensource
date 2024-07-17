import { fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TableFilterGroup } from '../TableFilterGroup';
import { ko as TableFilterGroupTranslation } from '../translation';
import { TableRadioFilter } from './TableRadioFilter';

describe('<TableRadioFilter />', () => {
  const { render } = createReactRenderer(children => (
    <PortalRootProvider zIndex={1}>
      <ConfigProvider
        translations={{
          tableFilterGroup: TableFilterGroupTranslation,
        }}
      >
        <TableFilterGroup initialFilterDataKeys={['isHidden']}>{children}</TableFilterGroup>
      </ConfigProvider>
    </PortalRootProvider>
  ));
  let renderer: ReactRenderer;

  describe('when defaultValue not provided', () => {
    beforeEach(() => {
      renderer = render(
        <TableRadioFilter
          dataKey="isHidden"
          label="숨김 여부"
          options={[
            {
              value: 'true',
              label: '숨김',
            },
            {
              value: 'false',
              label: '숨기지 않음',
            },
          ]}
        />
      );
    });

    it('should render button with label', () => {
      expect(renderer.queryByRole('button', { name: '숨김 여부' })).toBeTruthy();
    });
  });

  describe('when defaultValue provided with selected option value and operator that requires value', () => {
    beforeEach(() => {
      renderer = render(
        <TableRadioFilter
          dataKey="isHidden"
          label="숨김 여부"
          options={[
            {
              value: 'true',
              label: '숨김',
            },
            {
              value: 'false',
              label: '숨기지 않음',
            },
          ]}
          defaultValue={{
            value: 'true',
            operator: 'equals',
          }}
        />
      );
    });

    it('should render button with label and selected option label', () => {
      expect(renderer.queryByRole('button', { name: '숨김 여부: 숨김' })).toBeTruthy();
    });

    describe('when the button with label and selected option label', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByRole('button', { name: '숨김 여부: 숨김' }));
      });

      it('should render selected option with checked radio', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('radio', { name: '숨김', checked: true })).toBeTruthy();
        });
      });

      it('should render options that are not selected with unchecked radio', async () => {
        await waitFor(() => {
          expect(renderer.queryByRole('radio', { name: '숨기지 않음', checked: false })).toBeTruthy();
        });
      });
    });
  });
});
