import { Children, Fragment, isValidElement, useEffect, useState } from 'react';
import { useCallbackRef } from '@vibrant-ui/utils';
import { Box } from '../Box';
import type { TabViewItemProps } from '../TabViewItem';
import { withTabViewVariation } from './TabViewProps';

export const TabView = withTabViewVariation(
  ({ children, tabId, testId = 'tab-view', onTabChange, renderTobBarItem, renderTobBarContainer }) => {
    const childrenElement = Children.toArray(children).filter(isValidElement<TabViewItemProps>);
    const [currentIndex, setCurrentIndex] = useState(childrenElement.findIndex(el => el.props.tabId === tabId) ?? 0);

    const selectedTab = childrenElement.find((_, index) => index === currentIndex);

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
