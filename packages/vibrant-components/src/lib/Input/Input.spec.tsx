import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { Input } from './Input';

describe('<Input />', () => {
  const mockHandleFocus = jest.fn();
  const mockHandleBlur = jest.fn();
  const mockHandleKeyPress = jest.fn();
  const mockHandleValueChange = jest.fn();

  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let inputElement: HTMLInputElement;

  afterEach(() => {
    mockHandleFocus.mockClear();

    mockHandleBlur.mockClear();

    mockHandleKeyPress.mockClear();

    mockHandleValueChange.mockClear();
  });

  describe('when allowPattern is undefined', () => {
    beforeEach(async () => {
      renderer = render(
        <Input
          onFocus={mockHandleFocus}
          onBlur={mockHandleBlur}
          onKeyPress={({ key }) => mockHandleKeyPress(key)}
          onValueChange={mockHandleValueChange}
        />
      );

      inputElement = renderer.container.querySelector('input')!;
    });

    describe('user click input', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(inputElement));
      });

      it('should trigger focus event', () => {
        expect(mockHandleFocus).toBeCalled();
      });

      describe('and click anywhere else', () => {
        beforeEach(async () => {
          await waitFor(() => userEvent.click(document.body));
        });

        it('should trigger blur event', () => {
          expect(mockHandleBlur).toBeCalled();
        });
      });
    });

    describe('typing value', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(inputElement, 'a'));
      });

      it('keyPress event should called with entered value', () => {
        expect(mockHandleKeyPress).toBeCalledWith('a');
      });

      it('valueChange event should called with entered value', () => {
        expect(mockHandleValueChange).toBeCalledWith('a');
      });

      it('value is not replaced', () => {
        expect(inputElement.value).toStrictEqual('a');
      });
    });

    describe('paste value', () => {
      beforeEach(() => {
        inputElement.focus();

        userEvent.paste('123asdf456');
      });

      it('keyPress event should not called', () => {
        expect(mockHandleKeyPress).not.toBeCalled();
      });

      it('valueChange event should called with entered value', () => {
        expect(mockHandleValueChange).toBeCalledWith('123asdf456');
      });

      it('value is not replaced', () => {
        expect(inputElement.value).toStrictEqual('123asdf456');
      });
    });
  });

  describe('when allowPattern is number', () => {
    beforeEach(async () => {
      renderer = render(
        <Input
          allowPattern={/\d/}
          onKeyPress={({ key }) => mockHandleKeyPress(key)}
          onValueChange={mockHandleValueChange}
        />
      );

      inputElement = await renderer.container.querySelector('input')!;
    });

    afterEach(() => {
      mockHandleKeyPress.mockClear();

      mockHandleValueChange.mockClear();
    });

    describe('typing alphabet', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(inputElement, 'a'));
      });

      it('keyPress event should called with entered value', () => {
        expect(mockHandleKeyPress).toBeCalledWith('a');
      });

      it('valueChange event should not called', () => {
        expect(mockHandleValueChange).not.toBeCalled();
      });

      it('value is replaced', () => {
        expect(inputElement.value).toStrictEqual('');
      });
    });

    describe('typing number', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(inputElement, '1'));
      });

      it('keyPress event should called with entered value', () => {
        expect(mockHandleKeyPress).toBeCalledWith('1');
      });

      it('valueChange event should called with entered value', () => {
        expect(mockHandleValueChange).toBeCalledWith('1');
      });

      it('value is not replaced', () => {
        expect(inputElement.value).toStrictEqual('1');
      });
    });

    describe('paste text', () => {
      beforeEach(() => {
        inputElement.focus();

        userEvent.paste('123asdf456');
      });

      it('keyPress event should not called', () => {
        expect(mockHandleKeyPress).not.toBeCalled();
      });

      it('valueChange event should called with replaced value', () => {
        expect(mockHandleValueChange).toBeCalledWith('123456');
      });

      it('value is replaced', () => {
        expect(inputElement.value).toStrictEqual('123456');
      });
    });
  });
});
