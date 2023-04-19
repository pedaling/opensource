import { fireEvent } from '@testing-library/react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { lightModeColors } from '../../../../vibrant-theme/src/lib/theme/lightModeColors';
import { BreadCrumb } from '../BreadCrumb';
import { BreadCrumbs } from './BreadCrumbs';

describe('<BreadCrumbs />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let mockOnClick: jest.Mock;
  let breadcrumbTexts: HTMLElement[];

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  describe('when BreadCrumbs with 3 items rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <BreadCrumbs testId="BreadCrumbs">
          <BreadCrumb testId="BreadCrumb">BreadCrumb1</BreadCrumb>
          <BreadCrumb testId="BreadCrumb">BreadCrumb2</BreadCrumb>
          <BreadCrumb testId="BreadCrumb">BreadCrumb3</BreadCrumb>
        </BreadCrumbs>
      );

      breadcrumbTexts = await renderer.findAllByTestId('breadcrumb-text');
    });

    it('should render 3 BreadCrumb', async () => {
      expect(renderer.getAllByTestId('BreadCrumb').length).toBe(3);
    });

    it('should render 2 separators', async () => {
      expect(renderer.getAllByTestId('separator').length).toBe(2);
    });

    it('non last BreadCrumb should have onView2 color', () => {
      breadcrumbTexts.forEach((text, idx, arr) => {
        if (idx === arr.length - 1) return;

        expect(text).toHaveStyleRule('color', lightModeColors.onView2);
      });
    });

    it('last BreadCrumb should have onView1 color', () => {
      expect(breadcrumbTexts[breadcrumbTexts.length - 1]).toHaveStyleRule('color', lightModeColors.onView1);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when separator is provided at BreadCrumbs', () => {
    beforeEach(() => {
      renderer = render(
        <BreadCrumbs testId="BreadCrumbs" Separator="*">
          <BreadCrumb testId="BreadCrumb">BreadCrumb1</BreadCrumb>
          <BreadCrumb testId="BreadCrumb">BreadCrumb2</BreadCrumb>
        </BreadCrumbs>
      );
    });

    it('should render separator with provided text', () => {
      expect(renderer.getByTestId('separator').textContent).toBe('*');
    });
  });

  describe('when href provided at BreadCrumb', () => {
    beforeEach(() => {
      renderer = render(
        <BreadCrumbs testId="BreadCrumbs">
          <BreadCrumb testId="BreadCrumb" href="https://www.vibrant-design.com">
            BreadCrumb1
          </BreadCrumb>
        </BreadCrumbs>
      );
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });

  describe('when isExternal is true at BreadCrumb', () => {
    beforeEach(() => {
      renderer = render(
        <BreadCrumbs testId="BreadCrumbs">
          <BreadCrumb testId="BreadCrumb" href="https://www.vibrant-design.com" isExternal={true}>
            BreadCrumb1
          </BreadCrumb>
        </BreadCrumbs>
      );
    });

    it('should open link with new tab', () => {
      expect(renderer.getByRole('link').getAttribute('target')).toBe('_blank');
    });
  });

  describe('when onClick provided at BreadCrumb and is clicked', () => {
    beforeEach(() => {
      renderer = render(
        <BreadCrumbs testId="BreadCrumbs">
          <BreadCrumb testId="BreadCrumb" onClick={mockOnClick}>
            BreadCrumb1
          </BreadCrumb>
        </BreadCrumbs>
      );

      fireEvent.click(renderer.getByTestId('BreadCrumb'));
    });

    it('should call onClick', () => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
