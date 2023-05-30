import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from '../Body';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { Drawer } from './Drawer';

describe('<Drawer />', () => {
  const { render } = createReactRenderer();

  describe('when Drawer is rendering each placement', () => {
    let placementRightRenderer: ReactRenderer;
    let placementLeftRenderer: ReactRenderer;
    let placementTopRenderer: ReactRenderer;
    let placementBottomRenderer: ReactRenderer;

    beforeEach(async () => {
      placementRightRenderer = render(
        <Drawer type="standard" placement="right" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );

      placementLeftRenderer = render(
        <Drawer type="standard" placement="left" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );

      placementTopRenderer = render(
        <Drawer type="standard" placement="top" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );

      placementBottomRenderer = render(
        <Drawer type="standard" placement="bottom" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );
    });

    it('match snapshot', () => {
      expect(placementRightRenderer.container).toMatchSnapshot();

      expect(placementLeftRenderer.container).toMatchSnapshot();

      expect(placementTopRenderer.container).toMatchSnapshot();

      expect(placementBottomRenderer.container).toMatchSnapshot();
    });
  });

  describe('when Drawer is rendering each placement', () => {
    let typeStandardRenderer: ReactRenderer;
    let typeOverlayRenderer: ReactRenderer;
    let typeModalRenderer: ReactRenderer;

    beforeEach(async () => {
      typeStandardRenderer = render(
        <Drawer type="standard" placement="right" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );

      typeOverlayRenderer = render(
        <Drawer type="overlay" placement="right" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );

      typeModalRenderer = render(
        <Drawer type="modal" placement="right" open={true}>
          <VStack spacing={10} width="100%">
            <Paper width="100%" height={295} backgroundColor="primary">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
            <HStack spacing={10} width="100%">
              <Paper width={400} height={295} minWidth={400} backgroundColor="error">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>400px - 295px(set minWidth)</Body>
                </VStack>
              </Paper>
              <Paper width="100%" height={295} backgroundColor="success">
                <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                  <Body level={1}>100% - 295px</Body>
                </VStack>
              </Paper>
            </HStack>
          </VStack>
          <Drawer.Panel defaultSize={320}>
            <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
            <VStack spacing={30} p={8}>
              <Body level={2}>
                Excepturi assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa
                tempore magnam, ex doloribus.
              </Body>
              <Body level={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit?
              </Body>
            </VStack>
            <Drawer.Footer>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </Drawer.Footer>
          </Drawer.Panel>
        </Drawer>
      );
    });

    it('match snapshot', () => {
      expect(typeStandardRenderer.container).toMatchSnapshot();

      expect(typeOverlayRenderer.container).toMatchSnapshot();

      expect(typeModalRenderer.container).toMatchSnapshot();
    });
  });
});
