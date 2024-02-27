import { fireEvent, waitFor } from '@testing-library/react';
import { PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { RangePickerField } from './RangePickerField';

describe('<RangePickerField />', () => {
  const mockOnValueChange = jest.fn();
  const { render } = createReactRenderer(children => <PortalRootProvider zIndex={1}>{children}</PortalRootProvider>);

  let renderer: ReactRenderer;

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(<RangePickerField size="lg" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(<RangePickerField size="md" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(<RangePickerField size="sm" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when the date selection button is clicked', () => {
    beforeEach(() => {
      renderer = render(<RangePickerField size="sm" label="label" onValueChange={mockOnValueChange} />);

      fireEvent.click(renderer.getByRole('button', { name: '날짜 선택' }));
    });

    it('a dialog should appear to allow date selection.', async () => {
      await waitFor(() => {
        expect(renderer.queryByRole('dialog')).toBeTruthy();
      });
    });

    describe('When selecting the dates 15th and 16th, ', () => {
      beforeEach(async () => {
        const firstDayButtonElement = await renderer.findByRole('button', { name: '15' });

        fireEvent.click(firstDayButtonElement);

        const secondDayButtonElement = await renderer.findByRole('button', { name: '16' });

        fireEvent.click(secondDayButtonElement);
      });

      it('the start is set to 15th 00:00, and the end is set to 16th 23:59, triggering the OnValue function.', async () => {
        const startDate = new Date();
        const endDate = new Date();

        startDate.setDate(15);

        startDate.setHours(0, 0, 0, 0);

        endDate.setDate(16);

        endDate.setHours(23, 59, 59, 999);

        await waitFor(() => {
          expect(mockOnValueChange).toBeCalledWith({
            value: {
              end: endDate,
              start: startDate,
            },
            prevent: expect.anything(),
          });
        });
      });
    });
  });
});
