import { VStack } from '../VStack';
import { withTableFilterGroupPropsVariation } from './TableFilterGroupProps';

export const TableFilterGroup = withTableFilterGroupPropsVariation(({ initialFilter, onFilterChange }) => <VStack />);
