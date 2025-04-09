import { Children, Fragment, isValidElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(
  ({ children, tabId, testId = 'tab-view', onTabChange, renderTobBarItem, renderTobBarContainer }) => {
    const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);
    const tabIds = useMemo(() => childrenElement.map(el => el.props.tabId), [childrenElement]);
    const [currentIndex, setCurrentIndex] = useState(tabIds.findIndex(id => id === tabId) ?? 0);

    const selectedTab = childrenElement.find((_, index) => index === currentIndex);

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

    return (
      <Box width="100%" height="100%" data-testid={testId}>
        {renderTobBarContainer(
          childrenElement.map((element, index) => (
            <Fragment key={index}>
              {renderTobBarItem({
                title: element.props.title,
                isSelected: currentIndex === index,
                onClick: () => handleTabChange(index),
                tabId: element.props.tabId,
              })}
            </Fragment>
          ))
        )}
        {selectedTab}
      </Box>
    );
  }
);
