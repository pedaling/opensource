import { TabViewItem } from '@vibrant-ui/core';
import { withViewPagerTabGroupItemVariation } from './ViewPagerTabGroupItemProps';

export const ViewPagerTabGroupItem = withViewPagerTabGroupItemVariation(
  ({ tabId, title, testId, onTabSelected, renderContent }) => (
    <TabViewItem
      tabId={tabId}
      title={title}
      testId={testId}
      onTabSelected={onTabSelected}
      renderContent={renderContent}
    />
  )
);
