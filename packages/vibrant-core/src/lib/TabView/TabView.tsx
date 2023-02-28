import { Children, Fragment, isValidElement, useState } from 'react';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
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
    <Box>
      {renderTobBarContainer(
        childrenElement.map((element, index) => (
          <Fragment key={index}>
            {renderTobBarItem({
              title: element.props.title,
              isSelected: currentIndex === index,
              onClick: () => handleTabChange(index),
            })}
          </Fragment>
        ))
      )}
      {selectedTab}
    </Box>
  );
});
