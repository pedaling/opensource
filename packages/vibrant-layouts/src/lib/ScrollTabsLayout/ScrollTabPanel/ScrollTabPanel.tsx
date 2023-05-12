import { withScrollTabPanelVariation } from './ScrollTabPanelProps';

export const ScrollTabPanel = withScrollTabPanelVariation(({ renderContent }) => <>{renderContent()}</>);
