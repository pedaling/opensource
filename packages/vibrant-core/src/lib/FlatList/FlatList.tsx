import type { FC, ReactElement } from 'react';
import { isDefined, useInView } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

const ImpressibleItem: FC<{ onImpressed?: () => void; children: ReactElement | null }> = ({
  onImpressed,
  ...props
}) => {
  const { ref } = useInView({ initialInView: true, onChange: inView => inView && onImpressed?.() });

  return <Box as="li" ref={isDefined(onImpressed) ? ref : null} {...props} />;
};

export const FlatList = withFlatListVariation(
  ({
    testId,
    data,
    renderItem,
    keyExtractor,
    columns,
    columnSpacing,
    rowSpacing,
    onEndReached,
    onItemImpressed,
    ...props
  }) => (
    <Box
      as="ul"
      display="grid"
      width="100%"
      gridTemplateColumns={transformResponsiveValue(columns, column => `repeat(${column}, 1fr)`)}
      columnGap={columnSpacing}
      rowGap={rowSpacing}
      data-testId={testId}
      {...props}
    >
      {data.map((item, index) => (
        <ImpressibleItem
          key={keyExtractor(item, index)}
          onImpressed={
            isDefined(onItemImpressed) || index === data.length - 1
              ? () => {
                  onItemImpressed?.(item, index);

                  if (index === data.length - 1) {
                    onEndReached?.();
                  }
                }
              : undefined
          }
        >
          {renderItem({ item, index })}
        </ImpressibleItem>
      ))}
    </Box>
  )
) as <Data>(props: FlatListProps<Data>) => ReactElement;
