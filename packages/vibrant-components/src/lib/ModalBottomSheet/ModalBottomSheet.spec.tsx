import { fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Box, PortalRootProvider } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { BrowserTesting, createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Pressable } from '../Pressable';
import { ModalBottomSheet } from './ModalBottomSheet';

describe('<ModalBottomSheet />', () => {
  const { render } = createReactRenderer(children => <PortalRootProvider zIndex={1}>{children}</PortalRootProvider>);
  let renderer: ReactRenderer;

  describe('when defaultOpen is false', () => {
    beforeEach(() => {
      renderer = render(
        <ModalBottomSheet
          defaultOpen={false}
          renderOpener={({ open }) => <Pressable data-testid="opener" onClick={open} />}
        />
      );
    });

    it('should not open the content', () => {
      expect(renderer.queryByRole('dialog')).toBeFalsy();
    });

    describe('after clicking the opener button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByTestId('opener'))).then(done);
      });

      it('should open the content', () => {
        expect(renderer.queryByRole('dialog')).toBeTruthy();
      });
    });
  });

  describe('when defaultOpen is true', () => {
    let mockOnClose: jest.Mock<any, any>;

    beforeEach(() => {
      mockOnClose = jest.fn();

      renderer = render(<ModalBottomSheet defaultOpen={true} onClose={mockOnClose} renderOpener={() => null} />);
    });

    it('should open the content', () => {
      expect(renderer.queryByRole('dialog')).toBeTruthy();
    });

    describe('after clicking the close button', () => {
      beforeEach(async () => {
        fireEvent.click(renderer.getByRole('button', { name: 'Close' }));

        await waitForElementToBeRemoved(() => renderer.queryByRole('dialog'));
      });

      it.skip('should call onClose function', () => {
        expect(mockOnClose).toBeCalled();
      });

      it.skip('should close the content', () => {
        expect(renderer.queryByRole('dialog')).toBeFalsy();
      });
    });
  });

  describe('when renderContents is provided', () => {
    beforeEach(() => {
      renderer = render(<ModalBottomSheet open={true} renderContents={() => <Box data-testid="contents" />} />);
    });

    it('should render returned element of renderContents', () => {
      expect(renderer.queryByTestId('contents')).toBeTruthy();
    });
  });

  describe('when title is provided', () => {
    beforeEach(() => {
      renderer = render(<ModalBottomSheet open={true} title="title" />);
    });

    it('should show title text', () => {
      expect(renderer.queryByRole('heading', { name: 'title' })).toBeTruthy();
    });
  });

  describe('when subtitle is provided', () => {
    beforeEach(() => {
      renderer = render(<ModalBottomSheet open={true} subtitle="subtitle" />);
    });

    it('should show subtitle text', () => {
      expect(renderer.queryByText('subtitle')).toBeTruthy();
    });
  });

  describe('when primaryButtonOptions are provided', () => {
    let mockOnPrimaryButtonClick: jest.Mock<any, any>;

    beforeEach(() => {
      mockOnPrimaryButtonClick = jest.fn();

      renderer = render(
        <ModalBottomSheet
          defaultOpen={true}
          primaryButtonOptions={{
            text: 'primaryButtonText',
            onClick: mockOnPrimaryButtonClick,
          }}
          secondaryButtonOptions={undefined}
          subButtonOptions={undefined}
          renderOpener={({ open }) => <Pressable onClick={open} />}
        />
      );
    });

    it('should show the primary button', () => {
      expect(renderer.queryByRole('button', { name: 'primaryButtonText' })).toBeTruthy();
    });

    describe('after clicking the primary button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByRole('button', { name: 'primaryButtonText' }))).then(done);
      });

      it('should call OnPrimaryButtonClick function', () => {
        expect(mockOnPrimaryButtonClick).toBeCalled();
      });
    });
  });

  describe('when primaryButtonOptions, secondaryButtonOptions are provided', () => {
    let mockOnPrimaryButtonClick: jest.Mock<any, any>;
    let mockOnSecondaryButtonClick: jest.Mock<any, any>;

    beforeEach(() => {
      mockOnPrimaryButtonClick = jest.fn();

      mockOnSecondaryButtonClick = jest.fn();

      renderer = render(
        <ModalBottomSheet
          defaultOpen={true}
          primaryButtonOptions={{
            text: 'primaryButtonText',
            onClick: mockOnPrimaryButtonClick,
          }}
          secondaryButtonOptions={{
            text: 'secondaryButtonText',
            onClick: mockOnSecondaryButtonClick,
          }}
          subButtonOptions={undefined}
          renderOpener={({ open }) => <Pressable onClick={open} />}
        />
      );
    });

    it('should show the primary button', () => {
      expect(renderer.queryByRole('button', { name: 'primaryButtonText' })).toBeTruthy();
    });

    describe('after clicking the primary button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByRole('button', { name: 'primaryButtonText' }))).then(done);
      });

      it('should call OnPrimaryButtonClick function', () => {
        expect(mockOnPrimaryButtonClick).toBeCalled();
      });
    });

    it('should show the secondary button', () => {
      expect(renderer.queryByRole('button', { name: 'secondaryButtonText' })).toBeTruthy();
    });

    describe('after clicking the secondary button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByRole('button', { name: 'secondaryButtonText' }))).then(done);
      });

      it('should call OnSecondaryButtonClick function', () => {
        expect(mockOnSecondaryButtonClick).toBeCalled();
      });
    });
  });

  describe('when primaryButtonOptions, subButtonOptions are provided', () => {
    let mockOnPrimaryButtonClick: jest.Mock<any, any>;
    let mockOnSubButtonClick: jest.Mock<any, any>;

    beforeEach(() => {
      mockOnPrimaryButtonClick = jest.fn();

      mockOnSubButtonClick = jest.fn();

      renderer = render(
        <ModalBottomSheet
          defaultOpen={true}
          primaryButtonOptions={{
            text: 'primaryButtonText',
            onClick: mockOnPrimaryButtonClick,
          }}
          secondaryButtonOptions={undefined}
          subButtonOptions={{
            text: 'subButtonText',
            onClick: mockOnSubButtonClick,
          }}
          renderOpener={({ open }) => <Pressable onClick={open} />}
        />
      );
    });

    it('should show the primary button', () => {
      expect(renderer.queryByRole('button', { name: 'primaryButtonText' })).toBeTruthy();
    });

    describe('after clicking the primary button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByRole('button', { name: 'primaryButtonText' }))).then(done);
      });

      it('should call OnPrimaryButtonClick function', () => {
        expect(mockOnPrimaryButtonClick).toBeCalled();
      });
    });

    it('should show the sub button', () => {
      expect(renderer.queryByRole('button', { name: 'subButtonText' })).toBeTruthy();
    });

    describe('after clicking the sub button', () => {
      beforeEach(done => {
        waitFor(() => userEvent.click(renderer.getByRole('button', { name: 'subButtonText' }))).then(done);
      });

      it('should call onSubButtonClick function', () => {
        expect(mockOnSubButtonClick).toBeCalled();
      });
    });
  });

  describe('given mobile viewport width', () => {
    beforeEach(async () => {
      await BrowserTesting.resize(639, 768);

      renderer = render(<ModalBottomSheet open={true} renderContents={() => null} />);
    });

    it('match snapshot', async () => {
      await waitFor(() => expect(renderer.getByRole('dialog').style.transform).toBe(''));

      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('given viewport width larger than mobile', () => {
    beforeEach(async () => {
      await BrowserTesting.resize(1024, 768);

      renderer = render(<ModalBottomSheet open={true} renderContents={() => null} />);
    });

    it('match snapshot', async () => {
      await waitFor(() => expect(renderer.getByRole('dialog').style.opacity).toBe('1'));

      expect(renderer.container).toMatchSnapshot();
    });
  });
});
