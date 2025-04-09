import type { ReactElement } from 'react';
import { Children, isValidElement, useEffect, useMemo, useState } from 'react';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import { useCallbackRef } from '@vibrant-ui/utils';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(
  ({ children, tabId, onTabChange, renderTobBarContainer, renderTobBarItem }) => {
    const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);
    const [currentIndex, setCurrentIndex] = useState(childrenElement.findIndex(el => el.props.tabId === tabId) ?? 0);

    const routes = childrenElement.map(element => ({
      key: element.props.tabId,
      title: element.props.title,
    }));

    const handleTabChange = (index: number) => {
      const currentTab = childrenElement.find((_, index) => index === currentIndex);

      currentTab?.props?.onTabSelected?.();

      setCurrentIndex(index);

      onTabChange?.();
    };

    const changeTabById = useCallbackRef((tabId?: string) => {
      if (!tabId) {
        return;
      }

      const tabIndex = childrenElement.findIndex(element => element.props.tabId === tabId);

      if (tabIndex > -1) {
        handleTabChange(tabIndex);
      }
    });

    useEffect(() => {
      changeTabById(tabId);
    }, [tabId, changeTabById]);

    const renderScene = useMemo(() => {
      const tabObject: { [key: string]: () => ReactElement } = {};

      childrenElement.forEach(element => (tabObject[element.props.tabId] = element.props.renderContent));

      return SceneMap(tabObject);
    }, [childrenElement]);

    return (
      <RNTabView
        renderTabBar={() =>
          renderTobBarContainer(
            routes.map((route, index) => (
              <Box key={index}>
                {renderTobBarItem({
                  title: route.title,
                  isSelected: currentIndex === index,
                  onClick: () => handleTabChange(index),
                  tabId: route.key,
                })}
              </Box>
            ))
          )
        }
        sceneContainerStyle={{ overflow: 'visible' }}
        navigationState={{ index: currentIndex, routes }}
        renderScene={renderScene}
        onIndexChange={setCurrentIndex}
      />
    );
  }
);
