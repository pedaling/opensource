import type { ReactElement } from 'react';
import { FlatList } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import type { GridListProps } from './GridListProps';
import { withGridListVariation } from './GridListProps';

export const GridList = withGridListVariation(
  ({
    testId = 'grid-list',
    data,
    renderItem,
    loading,
    keyExtractor,
    skeletonItemCount = 0,
    renderSkeleton,
    onItemImpressed,
    ...props
  }) => (
    <FlatList
      testId={testId}
      data={loading ? data.concat(new Array(skeletonItemCount).fill(null)) : data}
      keyExtractor={(item, index) => (item !== null ? keyExtractor(item, index) : `grid-list-skeleton-${index}`)}
      renderItem={itemInfo => {
        if (itemInfo.item == null) {
          return isDefined(renderSkeleton) ? renderSkeleton() : null;
        }

        return renderItem(itemInfo);
      }}
      onItemImpressed={
        isDefined(onItemImpressed)
          ? (item, index) => {
              if (item !== null) {
                onItemImpressed(item, index);
              }
            }
          : undefined
      }
      {...props}
    />
  )
) as <Data extends NonNullable<unknown>>(props: GridListProps<Data>) => ReactElement;
