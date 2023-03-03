import { TabViewItem } from '@vibrant-ui/core';
import { withViewPagerTabGroupItemVariation } from './ViewPagerTabGroupItemProps';

export const ViewPagerTabGroupItem = withViewPagerTabGroupItemVariation(
  ({ tabId, title, onTabSelected, renderContent }) => (
    <TabViewItem tabId={tabId} title={title} onTabSelected={onTabSelected} renderContent={renderContent} />
  )
);
