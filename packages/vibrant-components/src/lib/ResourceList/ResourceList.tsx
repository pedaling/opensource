import React, { memo, useState } from 'react';
import type { ComponentWithRef, ResponsiveValue } from '@vibrant-ui/core';
import { VStack } from '../VStack';
import { ResourceItem } from './ResourceItem';

type ResourceItemProps = {
  id: string;
  [key: string]: any;
};

type ResourceListProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  children: React.ReactElement<ResourceItemProps> | React.ReactElement<ResourceItemProps>[];
} & (
  | {
      multiSelect: true;
      selectedIds?: string[];
      onChangeSelectedIds?: (selectedIds: string[]) => void;
    }
  | {
      multiSelect?: false;
      onSelect?: (selectedId: string) => void;
    }
);

const ResourceListComponent = ({ size, children, multiSelect = false, ...props }: ResourceListProps) => {
  const initialSelectedIds = multiSelect ? (props as { selectedIds?: string[] }).selectedIds || [] : [];
  const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>(initialSelectedIds);

  const handleToggleSelect = (args: { id: string; selected: boolean }) => {
    if (!multiSelect && (props as { onSelect?: (id: string) => void }).onSelect) {
      (props as { onSelect: (id: string) => void }).onSelect(args.id);

      return;
    }

    const newSelectedIds = args.selected
      ? [...internalSelectedIds, args.id]
      : internalSelectedIds.filter(id => id !== args.id);

    setInternalSelectedIds(newSelectedIds);

    if (multiSelect && (props as { onChangeSelectedIds?: (ids: string[]) => void }).onChangeSelectedIds) {
      (props as { onChangeSelectedIds: (ids: string[]) => void }).onChangeSelectedIds(newSelectedIds);
    }
  };

  return (
    <VStack>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const childProps = child.props as ResourceItemProps;

          if (childProps.id) {
            return React.cloneElement(child, {
              ...childProps,
              size,
              selectable: multiSelect,
              selected: internalSelectedIds.includes(childProps.id),
              onToggleSelect: handleToggleSelect,
            });
          }
        }

        return child;
      })}
    </VStack>
  );
};

export const ResourceList = memo(ResourceListComponent) as unknown as ComponentWithRef<ResourceListProps> & {
  Item: typeof ResourceItem;
};

ResourceList.Item = ResourceItem;
ResourceList.displayName = 'Popover';
