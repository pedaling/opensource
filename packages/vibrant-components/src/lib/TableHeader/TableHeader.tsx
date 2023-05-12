import { Children } from 'react';
import type { ReactElement } from 'react';
import { HStack } from '../HStack';
import { TableSearch } from '../TableSearch/TableSearch';
import { TableHeaderButton } from './TableHeaderButton';
import type { TableHeaderProps } from './TableHeaderProps';

export const TableHeader = ({ children, testId = 'table-header' }: TableHeaderProps) => {
  const buttons: ReactElement[] = [];
  const search: ReactElement[] = [];

  const childArray = Children.toArray(children) as ReactElement[];

  childArray.forEach(child => {
    if (child.type === TableSearch) {
      search.push(child);
    }

    if (child.type === TableHeaderButton) {
      buttons.push(child);
    }
  });

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
