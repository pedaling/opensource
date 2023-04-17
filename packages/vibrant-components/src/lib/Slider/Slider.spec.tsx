import { fireEvent, waitFor } from '@testing-library/react';
import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from '../Body';
import { VStack } from '../VStack';
import { Slider } from './Slider';

describe('<Slider />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let panel: HTMLElement;

  describe("when the 'panelWidth' prop", () => {
    describe('is set as 100', () => {
      beforeEach(async () => {
        renderer = render(
          <VStack width={500}>
            <Slider
              panelWidth={100}
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => (
                <Body level={1} color="onPrimary">
                  {item}
                </Body>
              )}
              keyExtractor={item => item.toString()}
            />
          </VStack>
        );

        element = await renderer.getByTestId('slider');

        panel = element.firstChild?.firstChild as HTMLElement;
      });

      it('it should have same width style rule', () => {
        expect(panel).toHaveStyleRule('width', '100px');
      });
    });
  });

  describe("when the 'panelsPerView' prop", () => {
    describe('is set as 3', () => {
      beforeEach(async () => {
        renderer = render(
          <Slider
            panelsPerView={3}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => <Box data-testid={`panel-${index}`}>{item}</Box>}
            keyExtractor={item => item.toString()}
          />
        );

        renderer.debug();

        element = await renderer.getByTestId('slider-container');

        panel = await renderer.getByTestId('panel-0');
      });

      it('it should have same width style rule', async () => {
        await waitFor(() => expect(panel.clientWidth).toBe(Math.floor(element.clientWidth / 3)));
      });
    });
  });

  describe("when the 'px' prop", () => {
    beforeEach(async () => {
      renderer = render(
        <VStack width={500}>
          <Slider
            panelWidth={100}
            px={8}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = await renderer.getByTestId('slider');
    });

    it('it should have set style', () => {
      expect(element).toHaveStyleRule('padding-left', '8px');

      expect(element).toHaveStyleRule('padding-right', '8px');
    });
  });

  describe("when the 'snap' prop", () => {
    beforeEach(async () => {
      renderer = render(
        <VStack width={500}>
          <Slider
            panelWidth={100}
            snap={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = await renderer.getByTestId('slider-container');

      panel = element.firstChild as HTMLElement;
    });

    it('it should have snap style in Slider container', () => {
      expect(element).toHaveStyleRule('scroll-snap-type', 'x mandatory');
    });

    it('children should have default snap alignment', () => {
      expect(panel).toHaveStyleRule('scroll-snap-align', 'start');
    });
  });

  describe("when the 'loop' prop", () => {
    const loopBuffer = 2;
    const dataLength = 5;

    beforeEach(async () => {
      renderer = render(
        <VStack width={500}>
          <Slider
            panelWidth={100}
            loop={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = await renderer.getByTestId('slider-container');
    });

    it('it should have snap style in Slider container', () => {
      expect(element.childElementCount).toBe(loopBuffer * 2 + dataLength);
    });
  });

  describe("when the 'snapAlignment' prop is set as 'end'", () => {
    beforeEach(async () => {
      renderer = render(
        <VStack width={500}>
          <Slider
            panelWidth={100}
            snap={true}
            snapAlignment="end"
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = await renderer.getByTestId('slider-container');

      panel = element.firstChild as HTMLElement;
    });

    it("children should have 'end' style rule", () => {
      expect(panel).toHaveStyleRule('scroll-snap-align', 'end');
    });
  });

  describe("when the 'onEndReached' prop provided and the user has scrolled to the end of an item", () => {
    const onEndReachedMockFn = jest.fn();
    const panelWidth = 100;
    const panelLength = 5;

    beforeEach(async () => {
      renderer = render(
        <VStack width={500}>
          <Slider
            onEndReached={onEndReachedMockFn}
            panelWidth={100}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = await renderer.getByTestId('slider-container');

      fireEvent.scroll(element, { target: { scrollLeft: panelWidth * panelLength } });
    });

    it('onEndReached should be called', async () => {
      await waitFor(() => expect(onEndReachedMockFn).toBeCalled());
    });
  });
});
