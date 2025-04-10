import React, { memo, useEffect, useMemo, useState } from 'react';
import type { ComponentWithRef, ResponsiveValue } from '@vibrant-ui/core';
import { VStack } from '../VStack';
import { ResourceItem } from './ResourceItem';

type ResourceItemProps = {
  id: string;
  [key: string]: any;
};

export type ResourceListProps = {
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
      selectedIds?: undefined;
    }
);

const ResourceListComponent = ({ size, children, ...props }: ResourceListProps) => {
  const initialSelectedIds = useMemo(
    () => (props.multiSelect ? props.selectedIds || [] : []),
    [props.multiSelect, props.selectedIds]
  );
  const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>(initialSelectedIds);

  useEffect(() => {
    setInternalSelectedIds(initialSelectedIds);
  }, [initialSelectedIds]);

  const handleToggleSelect = (args: { id: string; selected: boolean }) => {
    if (!props.multiSelect && props.onSelect) {
      props.onSelect(args.id);

      return;
    }

    const newSelectedIds = args.selected
      ? [...internalSelectedIds, args.id]
      : internalSelectedIds.filter(id => id !== args.id);

    setInternalSelectedIds(newSelectedIds);

    if (props.selectedIds && props.onChangeSelectedIds) {
      props.onChangeSelectedIds(newSelectedIds);
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
              selectable: props.multiSelect,
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
ResourceList.displayName = 'ResourceList';
