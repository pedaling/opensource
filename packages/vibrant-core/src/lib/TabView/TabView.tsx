import { Children, isValidElement, useState } from 'react';
import type { TabViewItemProps } from './TabViewProps';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(({ children, onChangeTab, renderTobBarItem, renderTobBarContainer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);

  const selectedTab = childrenElement.find((_, index) => index === currentIndex);

  const handleTabChange = (index: number) => {
    const currentTab = childrenElement.find((_, index) => index === currentIndex);

    currentTab?.props?.onTabSelected?.();

    setCurrentIndex(index);

    onChangeTab?.();
  };

  return (
    <>
      {renderTobBarContainer(
        childrenElement.map((element, index) =>
          renderTobBarItem(element.props.title, currentIndex === index, () => handleTabChange(index))
        )
      )}
      {selectedTab}
    </>
  );
});
