import type { ReactElement } from 'react';
import { Children, isValidElement, useCallback, useEffect, useMemo, useState } from 'react';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(
  ({ children, tabId, onTabChange, renderTobBarContainer, renderTobBarItem }) => {
    const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);
    const tabIds = useMemo(() => childrenElement.map(el => el.props.tabId), [childrenElement]);
    const [currentIndex, setCurrentIndex] = useState(tabIds.findIndex(id => id === tabId) ?? 0);

    const routes = childrenElement.map(element => ({
      key: element.props.tabId,
      title: element.props.title,
    }));

    const handleTabChange = useCallback(
      (index: number) => {
        const currentTab = childrenElement.find((_, i) => i === index);

        currentTab?.props?.onTabSelected?.();

        setCurrentIndex(index);

        onTabChange?.();
      },
      [childrenElement, onTabChange]
    );

    useEffect(() => {
      const tabIndex = childrenElement.findIndex(el => el.props.tabId === tabId);

      if (tabIndex > 0) {
        handleTabChange(tabIndex);
      }
    }, [tabIds, tabId, handleTabChange, childrenElement]);

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
