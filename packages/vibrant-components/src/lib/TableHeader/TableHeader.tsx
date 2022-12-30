import { HStack } from '@vibrant-ui/components';
import { TableHeaderButton } from './TableHeaderButton';
import type { TableHeaderProps } from './TableHeaderProps';

export const TableHeader = ({ children }: TableHeaderProps) => (
  <HStack width="100%" alignVertical="center" alignHorizontal="end" spacing={8}>
    {children}
  </HStack>
);

TableHeader.displayName = 'TableHeader';

TableHeader.Button = TableHeaderButton;
