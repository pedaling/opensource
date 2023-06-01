/* eslint-disable max-lines */
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { Drawer } from './Drawer';

export default {
  title: 'Drawer',
  component: Drawer,
  args: {},
} as ComponentMeta<typeof Drawer>;

export const Basic: ComponentStory<typeof Drawer> = () => (
  <Drawer type="standard" placement="right" open={false}>
    <VStack spacing={10}>
      <Paper width="100%" height={100} backgroundColor="informative">
        <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
          <Body level={1}>100% - 100px</Body>
        </VStack>
      </Paper>
      <HStack spacing={10} width="100%">
        <Paper width={300} height={600} backgroundColor="warning">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>300px - 600px</Body>
          </VStack>
        </Paper>
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
      </HStack>
      <HStack spacing={10}>
        <Paper width={1100} height={100} backgroundColor="errorContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>1100px - 100px</Body>
          </VStack>
        </Paper>
        <Paper width="100%" height={100} backgroundColor="informativeContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </HStack>
    </VStack>
    <Drawer.Panel defaultSize={['30%', '70%']}>
      <Drawer.Header closable={true} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
      <VStack spacing={30} p={8}>
        <Body level={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
      </VStack>
      <Drawer.Footer>
        <HStack alignHorizontal="space-between">
          <ContainedButton kind="secondary" size="md" full={true}>
            cancel
          </ContainedButton>
          <ContainedButton kind="primary" size="md" full={true}>
            confirm
          </ContainedButton>
        </HStack>
      </Drawer.Footer>
    </Drawer.Panel>
  </Drawer>
);

export const WithScroll: ComponentStory<typeof Drawer> = props => (
  <Drawer {...props}>
    <VStack spacing={10} maxHeight="1150px">
      <Box>
        <Paper width="100%" height={100} backgroundColor="informative">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </Box>
      <HStack spacing={10} width="100%">
        <Paper width={300} height={600} backgroundColor="warning">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>300px - 600px</Body>
          </VStack>
        </Paper>
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
      </HStack>
      <HStack spacing={10}>
        <Paper width={1100} height={100} backgroundColor="errorContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>1100px - 100px</Body>
          </VStack>
        </Paper>
        <Paper width="100%" height={100} backgroundColor="informativeContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </HStack>
      <Box>
        <Paper width="100%" height={100} backgroundColor="informative">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </Box>
      <HStack spacing={10} width="100%">
        <Paper width={300} height={600} backgroundColor="warning">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>300px - 600px</Body>
          </VStack>
        </Paper>
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
      </HStack>
      <HStack spacing={10}>
        <Paper width={1100} height={100} backgroundColor="errorContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>1100px - 100px</Body>
          </VStack>
        </Paper>
        <Paper width="100%" height={100} backgroundColor="informativeContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </HStack>
      <Box>
        <Paper width="100%" height={100} backgroundColor="informative">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </Box>
      <HStack spacing={10} width="100%">
        <Paper width={300} height={600} backgroundColor="warning">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>300px - 600px</Body>
          </VStack>
        </Paper>
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
      </HStack>
      <HStack spacing={10}>
        <Paper width={1100} height={100} backgroundColor="errorContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>1100px - 100px</Body>
          </VStack>
        </Paper>
        <Paper width="100%" height={100} backgroundColor="informativeContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </HStack>
    </VStack>
    <Drawer.Panel>
      <Drawer.Header closable={true}>
        <Title level={5}>This is Child Component for DrawerHeader</Title>
      </Drawer.Header>
      <VStack spacing={30} p={8}>
        <Body level={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
        <Body level={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi assumenda
          tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex doloribus.
        </Body>
      </VStack>
      <Drawer.Footer>
        <HStack alignHorizontal="space-between">
          <ContainedButton kind="secondary" size="md" full={true}>
            cancel
          </ContainedButton>
          <ContainedButton kind="primary" size="md" full={true}>
            confirm
          </ContainedButton>
        </HStack>
      </Drawer.Footer>
    </Drawer.Panel>
  </Drawer>
);

export const WithChildScroll: ComponentStory<typeof Drawer> = props => (
  <VStack spacing={10} width="100%">
    <Paper width="100%" height={100} backgroundColor="informative">
      <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
        <Body level={1}>100% - 100px</Body>
      </VStack>
    </Paper>
    <HStack spacing={10} width="100%">
      <Paper width={300} height={600} backgroundColor="warning">
        <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
          <Body level={1}>300px - 600px</Body>
        </VStack>
      </Paper>
      <Drawer type="overlay" placement="right" open={false}>
        <VStack spacing={10} width="100%" maxHeight={800}>
          <Paper width="100%" height={295} backgroundColor="primary">
            <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
              <Body level={1}>100% - 295px</Body>
            </VStack>
          </Paper>
          <HStack spacing={10} width="100%">
            <Paper width={400} height={295} backgroundColor="error">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>400px - 295px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={295} backgroundColor="success">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
          </HStack>
          <HStack spacing={10}>
            <Paper width={250} height={100} backgroundColor="informative">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>250px - 100px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={100} backgroundColor="warning">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 100px</Body>
              </VStack>
            </Paper>
          </HStack>
          <Paper width="100%" height={295} backgroundColor="primary">
            <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
              <Body level={1}>100% - 295px</Body>
            </VStack>
          </Paper>
          <HStack spacing={10} width="100%">
            <Paper width={400} height={295} backgroundColor="error">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>400px - 295px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={295} backgroundColor="success">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
          </HStack>
          <HStack spacing={10}>
            <Paper width={250} height={100} backgroundColor="informative">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>250px - 100px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={100} backgroundColor="warning">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 100px</Body>
              </VStack>
            </Paper>
          </HStack>
          <Paper width="100%" height={295} backgroundColor="primary">
            <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
              <Body level={1}>100% - 295px</Body>
            </VStack>
          </Paper>
          <HStack spacing={10} width="100%">
            <Paper width={400} height={295} backgroundColor="error">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>400px - 295px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={295} backgroundColor="success">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
          </HStack>
          <HStack spacing={10}>
            <Paper width={250} height={100} backgroundColor="informative">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>250px - 100px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={100} backgroundColor="warning">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 100px</Body>
              </VStack>
            </Paper>
          </HStack>
          <Paper width="100%" height={295} backgroundColor="primary">
            <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
              <Body level={1}>100% - 295px</Body>
            </VStack>
          </Paper>
          <HStack spacing={10} width="100%">
            <Paper width={400} height={295} backgroundColor="error">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>400px - 295px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={295} backgroundColor="success">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 295px</Body>
              </VStack>
            </Paper>
          </HStack>
          <HStack spacing={10}>
            <Paper width={250} height={100} backgroundColor="informative">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>250px - 100px</Body>
              </VStack>
            </Paper>
            <Paper width="100%" height={100} backgroundColor="warning">
              <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
                <Body level={1}>100% - 100px</Body>
              </VStack>
            </Paper>
          </HStack>
        </VStack>
        <Drawer.Panel>
          <Drawer.Header closable={false} title="Lorem ipsum dolor sit amet, con secte tur adipiscing elit" />
          <VStack spacing={30} p={8}>
            <Body level={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi
              assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex
              doloribus.
            </Body>
            <Body level={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi
              assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex
              doloribus.
            </Body>
            <Body level={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi
              assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex
              doloribus.
            </Body>
            <Body level={5}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? Excepturi
              assumenda tempore quae unde nobis molestias eaque nostrum? A sapiente sequi soluta ipsa tempore magnam, ex
              doloribus.
            </Body>
          </VStack>
          <Drawer.Footer>
            <HStack alignHorizontal="space-between">
              <ContainedButton kind="secondary" size="md" full={true}>
                cancel
              </ContainedButton>
              <ContainedButton kind="primary" size="md" full={true}>
                confirm
              </ContainedButton>
            </HStack>
          </Drawer.Footer>
        </Drawer.Panel>
      </Drawer>
    </HStack>
    <HStack spacing={10}>
      <Paper width={1100} height={100} backgroundColor="errorContainer">
        <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
          <Body level={1}>1100px - 100px</Body>
        </VStack>
      </Paper>
      <Paper width="100%" height={100} backgroundColor="informativeContainer">
        <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
          <Body level={1}>100% - 100px</Body>
        </VStack>
      </Paper>
    </HStack>
  </VStack>
);

export const PanelSizeAuto: ComponentStory<typeof Drawer> = props => (
  <Drawer {...props}>
    <VStack spacing={10}>
      <Paper width="100%" height={100} backgroundColor="informative">
        <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
          <Body level={1}>100% - 100px</Body>
        </VStack>
      </Paper>
      <HStack spacing={10} width="100%">
        <Paper width={300} height={600} backgroundColor="warning">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>300px - 600px</Body>
          </VStack>
        </Paper>
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
      </HStack>
      <HStack spacing={10}>
        <Paper width={1100} height={100} backgroundColor="errorContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>1100px - 100px</Body>
          </VStack>
        </Paper>
        <Paper width="100%" height={100} backgroundColor="informativeContainer">
          <VStack alignContent="center" alignVertical="center" alignHorizontal="center">
            <Body level={1}>100% - 100px</Body>
          </VStack>
        </Paper>
      </HStack>
    </VStack>
    <Drawer.Panel defaultSize="auto">
      <Drawer.Header>
        <Title level={5}>This is Child Component for DrawerHeader</Title>
      </Drawer.Header>
      <VStack spacing={30} p={8}>
        <Body level={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
        <Body level={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
        <Body level={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
        <Body level={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
        <Body level={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
        <Body level={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur vitae repellendus odit? ex doloribus.
        </Body>
      </VStack>
      <Drawer.Footer>
        <HStack alignHorizontal="space-between">
          <ContainedButton kind="secondary" size="md" full={true}>
            cancel
          </ContainedButton>
          <ContainedButton kind="primary" size="md" full={true}>
            confirm
          </ContainedButton>
        </HStack>
      </Drawer.Footer>
    </Drawer.Panel>
  </Drawer>
);
