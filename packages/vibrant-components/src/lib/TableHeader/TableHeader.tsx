import { Children } from 'react';
import type { ReactElement } from 'react';
import { HStack } from '../HStack';
import { TableSearch } from '../TableSearch/TableSearch';
import { TableHeaderButton } from './TableHeaderButton';
import type { TableHeaderProps } from './TableHeaderProps';

export const TableHeader = ({ children, testId = 'table-header' }: TableHeaderProps) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const buttons = childArray.filter(child => child.type === TableHeaderButton);
  const search = childArray.filter(child => child.type === TableSearch);

  return (
    <HStack width="100%" alignVertical="center" spacing={8} data-testid={testId}>
      {search}
      {buttons.length > 0 && (
        <HStack alignVertical="center" spacing={8} flexShrink={0}>
          {buttons}
        </HStack>
      )}
    </HStack>
  );
};

TableHeader.displayName = 'TableHeader';

TableHeader.Button = TableHeaderButton;
