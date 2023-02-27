import type { ReactElement } from 'react';
import { Children, isValidElement, useMemo, useState } from 'react';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';
import type { TabViewItemProps } from './TabViewProps';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(({ children, onChangeTab, renderTobBarContainer, renderTobBarItem }) => {
  const childrenElement = Children.toArray(children).filter(isValidElement) as ReactElement<TabViewItemProps>[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [routes] = useState(
    childrenElement.map(element => ({
      key: element.props.tabId,
      title: element.props.title,
    }))
  );

  const handleTabChange = (index: number) => {
    const currentTab = childrenElement.find((_, index) => index === currentIndex);

    currentTab?.props?.onTabSelected?.();

    setCurrentIndex(index);

    onChangeTab?.();
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
          routes.map((route, index) =>
            renderTobBarItem(route.title, index === currentIndex, () => handleTabChange(index))
          )
        )
      }
      sceneContainerStyle={{ overflow: 'visible' }}
      navigationState={{ index: currentIndex, routes }}
      renderScene={renderScene}
      onIndexChange={setCurrentIndex}
    />
  );
});
