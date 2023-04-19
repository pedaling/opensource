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

        element = await renderer.getByTestId('slider-container');

        panel = await renderer.getByTestId('panel-3');
      });

      it('it should be divided slider width', async () => {
        await waitFor(() => expect(panel.clientWidth).toBe(Math.floor(element.clientWidth / 3)));
      });
    });
  });

  describe("when the 'initialIndex' prop", () => {
    const initialIndex = 1;

    beforeEach(async () => {
      renderer = render(
        <Slider
          panelsPerView={1}
          initialIndex={initialIndex}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => <Box data-testid={`panel-${index}`}>{item}</Box>}
          keyExtractor={item => item.toString()}
        />
      );

      element = await renderer.getByTestId('slider-container');
    });

    it('it should be at initial position', async () => {
      await waitFor(() => expect(element.scrollLeft).toBe(element.clientWidth * initialIndex));
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

  describe("when the 'loop' prop and scrolls to end", () => {
    const panelWidth = 500;
    const panelLength = 5;
    const onItemImpressed = jest.fn(index => `${index} is called`);

    beforeEach(done => {
      renderer = render(
        <VStack width={panelWidth}>
          <Slider
            panelWidth={panelWidth}
            loop={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            onItemImpressed={index => onItemImpressed(index)}
            keyExtractor={item => item.toString()}
          />
        </VStack>
      );

      element = renderer.getByTestId('slider-container');

      setTimeout(() => {
        fireEvent.scroll(element, { target: { scrollLeft: panelLength * panelWidth } });

        done();
      }, 1000);
    });

    it('it should go back to first', async () => {
      await waitFor(() => expect(onItemImpressed).toHaveBeenCalledWith(2));
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

  describe("when the 'onItemImpressed' prop provided and the user has scrolled to certain item", () => {
    const onItemImpressed = jest.fn(index => `${index} is called`);
    const panelWidth = 500;
    const panelLength = 5;

    beforeEach(done => {
      renderer = render(
        <VStack width={panelWidth}>
          <Slider
            onItemImpressed={index => onItemImpressed(index)}
            panelsPerView={1}
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

      element = renderer.getByTestId('slider-container');

      setTimeout(() => {
        fireEvent.scroll(element, { target: { scrollLeft: panelWidth * (panelLength + 1) } });

        done();
      }, 1000);
    });

    it('onItemImpressed should be called', async () => {
      await waitFor(() => {
        expect(onItemImpressed).toHaveBeenCalledWith(1);
      });
    });
  });
});
