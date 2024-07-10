import type { ReactElement } from 'react';
import { Children, isValidElement, useMemo, useState } from 'react';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(({ children, onTabChange, renderTobBarContainer, renderTobBarItem }) => {
  const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);

  const [currentIndex, setCurrentIndex] = useState(0);
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
});
