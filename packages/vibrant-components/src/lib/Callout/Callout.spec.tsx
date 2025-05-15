import { fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@vibrant-ui/core';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Callout } from './Callout';
import type { CalloutProps, CalloutType } from './CalloutProps';

describe('<Callout />', () => {
  const { render } = createReactRenderer();

  let mockOnButtonClick: jest.Mock;

  beforeEach(() => {
    mockOnButtonClick = jest.fn();
  });

  const renderCallout = (props: Partial<CalloutProps> = {}) => {
    const calloutProps: any = {
      title: props.title,
      kind: props.kind,
      testId: props.testId || 'callout',
    };

    // Handle content props - must choose one or the other
    if (props.contents) {
      calloutProps.contents = props.contents;
    } else if (props.renderContents) {
      calloutProps.renderContents = props.renderContents;
    }

    // Handle button props conditionally
    if (props.buttonText) {
      calloutProps.buttonText = props.buttonText;
      calloutProps.onButtonClick = props.onButtonClick;
    }

    return render(
      <ThemeProvider theme={{ mode: 'light' }}>
        <Callout {...calloutProps} />
      </ThemeProvider>
    );
  };

  describe('Basic rendering', () => {
    it('renders with default props', () => {
      const renderer = renderCallout();

      expect(renderer.getByTestId('callout')).toBeTruthy();
    });

    it('renders with custom testId', () => {
      const renderer = renderCallout({ testId: 'custom-callout' });

      expect(renderer.getByTestId('custom-callout')).toBeTruthy();
    });
  });

  describe('Content rendering', () => {
    it('renders title when provided', () => {
      const title = 'Test Title';
      const renderer = renderCallout({ title });

      expect(renderer.getByText(title)).toBeTruthy();
    });

    it('renders content when provided', () => {
      const contents = 'Test content message';
      const renderer = renderCallout({ contents });

      expect(renderer.getByText(contents)).toBeTruthy();
    });

    it('renders both title and content when provided', () => {
      const title = 'Test Title';
      const contents = 'Test content message';
      const renderer = renderCallout({ title, contents });

      expect(renderer.getByText(title)).toBeTruthy();
      expect(renderer.getByText(contents)).toBeTruthy();
    });

    it('renders custom content with renderContents', () => {
      const customContent = 'Custom rendered content';
      const renderer = renderCallout({
        renderContents: () => <div data-testid="custom-content">{customContent}</div>,
      });

      const customElements = renderer.getAllByTestId('custom-content');

      expect(customElements.length).toBeGreaterThan(0);
      const textElements = renderer.getAllByText(customContent);

      expect(textElements.length).toBeGreaterThan(0);
    });
  });

  describe('Button behavior', () => {
    it('renders button when buttonText is provided', () => {
      const buttonText = 'Click Me';
      const renderer = renderCallout({ buttonText });

      expect(renderer.getByText(buttonText)).toBeTruthy();
    });

    it('does not render button when buttonText is not provided', () => {
      const renderer = renderCallout({ contents: 'Test content' });

      expect(renderer.queryByRole('button')).toBeNull();
    });

    it('calls onButtonClick when button is clicked', () => {
      const buttonText = 'Click Me';
      const renderer = renderCallout({
        buttonText,
        onButtonClick: mockOnButtonClick,
      });

      fireEvent.click(renderer.getByText(buttonText));
      expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling variations', () => {
    const calloutTypes: CalloutType[] = ['default', 'error', 'informative', 'success', 'warning'];

    it.each(calloutTypes)('renders with correct styling for %s kind', kind => {
      const renderer = renderCallout({
        kind,
        title: `${kind} Callout`,
        contents: `This is a ${kind} callout message`,
      });

      expect(renderer.getByTestId('callout')).toBeTruthy();
    });
  });

  describe('Box styling', () => {
    it('has the correct border radius', () => {
      const renderer = renderCallout({ contents: 'Test content' });

      expect(renderer.getByTestId('callout')).toHaveStyleRule('border-radius', '8px');
    });

    it('has the correct padding', () => {
      const renderer = renderCallout({ contents: 'Test content' });
      const element = renderer.getByTestId('callout');

      expect(element).toHaveStyleRule('padding-right', '14px');
      expect(element).toHaveStyleRule('padding-left', '16px');
      expect(element).toHaveStyleRule('padding-top', '8px');
      expect(element).toHaveStyleRule('padding-bottom', '8px');
    });
  });

  it('matches snapshot', () => {
    const renderer = renderCallout({
      title: 'Test Callout',
      contents: 'This is a test callout message',
      buttonText: 'Click Me',
      onButtonClick: mockOnButtonClick,
    });

    expect(renderer.container).toMatchSnapshot();
  });
});
