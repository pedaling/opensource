import { withScrollTabGroupLayoutItemVariation } from './ScrollTabGroupLayoutItemProps';

export const ScrollTabGroupLayoutItem = withScrollTabGroupLayoutItemVariation(({ renderContent }) => (
  <>{renderContent()}</>
));
