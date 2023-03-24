import { ThemeProvider } from '@emotion/react';
import { fireEvent, waitFor } from '@testing-library/react';
import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from '../Body';
import { GridList } from './GridList';

describe('<GridList />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe("when the 'columns' prop provided", () => {
    beforeEach(async () => {
      renderer = render(
        <GridList
          data={[1, 2, 3, 4, 5]}
          columns={2}
          renderItem={({ item }) => (
            <Body level={1} color="onPrimary">
              {item}
            </Body>
          )}
          keyExtractor={item => item.toString()}
        />
      );

      element = await renderer.getByTestId('grid-list');
    });

    it('the number of columns should be columns', () => {
      expect(element).toHaveStyleRule('grid-template-columns', 'repeat(2, 1fr)');
    });
  });

  describe("when the 'breakpoints' prop provided", () => {
    beforeEach(async () => {
      renderer = render(
        <ThemeProvider theme={{ breakpoints: [640, 1024, 1312] }}>
          <GridList
            data={[1, 2, 3, 4, 5]}
            columns={[1, 2, 3]}
            renderItem={({ item }) => (
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            )}
            keyExtractor={item => item.toString()}
            breakpoints={[200, 400, 600, 800]}
          />
        </ThemeProvider>
      );

      element = await renderer.getByTestId('grid-list');
    });

    it("other responsive props should work based on the 'breakpoints' prop, not the theme breakpoints", () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe("when the 'maxRows' prop provided", () => {
    beforeEach(async () => {
      renderer = render(
        <GridList
          data={[1, 2, 3, 4, 5]}
          columns={2}
          maxRows={2}
          renderItem={({ item }) => (
            <Body level={1} color="onPrimary">
              {item}
            </Body>
          )}
          keyExtractor={item => item.toString()}
        />
      );

      element = await renderer.getByTestId('grid-list');
    });

    it('Any items exceeding maxRow should not be displayed.', () => {
      expect(element.children[4]).toHaveStyleRule('display', 'none');
    });
  });

  describe("when the 'onEndReached' prop provided and the user has scrolled to the end of an item", () => {
    const onEndReachedMockFn = jest.fn();

    beforeEach(async () => {
      renderer = render(
        <GridList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          columns={1}
          renderItem={({ item }) => (
            <Box height={50}>
              <Body level={1} color="onPrimary">
                {item}
              </Body>
            </Box>
          )}
          keyExtractor={item => item.toString()}
          onEndReached={onEndReachedMockFn}
        />
      );

      element = await renderer.getByTestId('grid-list');

      fireEvent.scroll(element, { target: { scrollY: 500 } });
    });

    it('onEndReached should be called', async () => {
      await waitFor(() => expect(onEndReachedMockFn).toBeCalled());
    });
  });
});
