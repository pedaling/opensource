import { HStack } from '../HStack';
import { TableHeaderButton } from './TableHeaderButton';
import type { TableHeaderProps } from './TableHeaderProps';

export const TableHeader = ({ children, testId = 'table-header' }: TableHeaderProps) => (
  <HStack width="100%" alignVertical="center" alignHorizontal="end" spacing={8} data-testid={testId}>
    {children}
  </HStack>
);

TableHeader.displayName = 'TableHeader';

TableHeader.Button = TableHeaderButton;
