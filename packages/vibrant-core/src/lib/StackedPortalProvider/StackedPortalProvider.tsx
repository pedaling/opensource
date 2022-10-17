import type { FC } from 'react';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { addStyleValues, isDefined } from '@vibrant-ui/utils';
import { useSafeArea } from '../SafeAreaProvider';
import type {
  ChangePortalHeight,
  GetCalculatedOffset,
  Offset,
  OffsetChangeEvent,
  RegisterPortal,
  RenderedIndex,
  StackOptions,
  StackedPortalContextValue,
  StackedPortalData,
  StackedPortalProviderProps,
  UnregisterPortal,
} from './StackedPortalProviderProps';

export const StackedPortalContext = createContext<StackedPortalContextValue>({
  registerPortal: () => {},
  unregisterPortal: () => {},
  changePortalHeight: () => {},
  getCalculatedOffset: () => ({}),
});

export const StackedPortalProvider: FC<StackedPortalProviderProps> = ({ children, priorityOrder }) => {
  const { generateStyle } = useSafeArea();

  const heights = useRef<StackedPortalData>({ top: {}, bottom: {} });

  const getPrevPortals = useCallback(
    ({ position, id, order }: StackOptions) => {
      const index = priorityOrder[position].findIndex(value => value === id);

      const prevRenderedIds = priorityOrder[position]
        .slice(0, index)
        .filter(value => isDefined(heights.current[position][value]));

      return [
        ...prevRenderedIds.flatMap(prevRenderedId => Object.values(heights.current[position][prevRenderedId])),
        ...Object.entries(heights.current[position][id] ?? {})
          .filter(([key]) => Number(key) < order)
          .flatMap(([_, value]) => value),
      ];
    },
    [priorityOrder]
  );

  const getNextPortals = useCallback(
    ({ position, id, order }: StackOptions) => {
      const index = priorityOrder[position].findIndex(value => value === id);

      const nextIds = priorityOrder[position]
        .slice(index + 1)
        .filter(value => isDefined(heights.current[position][value]));

      return [
        ...Object.entries(heights.current[position][id])
          .filter(([key]) => Number(key) > order)
          .map(([key, value]) => ({
            id,
            order: Number(key),
            ...value,
          })),
        ...nextIds.flatMap(nextId =>
          Object.entries(heights.current[position][nextId]).map(([key, value]) => ({
            id: nextId,
            order: Number(key),
            ...value,
          }))
        ),
      ];
    },
    [priorityOrder]
  );

  const getCalculatedOffset = useCallback<GetCalculatedOffset>(
    ({ position, id, order, offset, safeAreaInset }) => {
      const prevItems = getPrevPortals({ position, id, order });

      if (prevItems.length === 0) {
        const generatedStyle = generateStyle({ edges: [position], minInsets: { [position]: offset } });

        const newOffset = (safeAreaInset ? generatedStyle[position] : offset) ?? 0;

        heights.current[position][id] = {
          ...heights.current[position][id],
          [order]: {
            ...heights.current[position][id]?.[order],
            offset: newOffset,
          },
        };

        return {
          offset: newOffset,
          renderedIndex: 1,
        };
      }

      if (prevItems.some(item => !isDefined(item.offset))) {
        return {};
      }

      return {
        offset: addStyleValues(...prevItems.flatMap(item => [item.offset, item.height]), offset ?? 0),
        renderedIndex: prevItems.length + 1,
      };
    },
    [generateStyle, getPrevPortals]
  );

  const updateNextPortalsOffset = useCallback(
    ({ position, id, order }: StackOptions) => {
      const nextItems = getNextPortals({ position, id, order });

      for (const nextItem of nextItems) {
        const result = getCalculatedOffset({
          position,
          ...nextItem,
        });

        nextItem.onOffsetChange?.(result);
      }
    },
    [getCalculatedOffset, getNextPortals]
  );

  const changePortalHeight = useCallback<ChangePortalHeight>(
    ({ position, id, order, height }) => {
      heights.current[position][id][order].height = height;

      updateNextPortalsOffset({ position, id, order });
    },
    [updateNextPortalsOffset]
  );

  const registerPortal = useCallback<RegisterPortal>(
    ({ position, id, order, offset, safeAreaInset, onOffsetChange }) => {
      if (isDefined(heights.current[position][id]?.[order])) {
        return;
      }

      heights.current[position][id] = {
        ...heights.current[position][id],
        [order]: {
          offset,
          safeAreaInset,
          onOffsetChange,
        },
      };
    },
    []
  );

  const unregisterPortal = useCallback<UnregisterPortal>(
    ({ position, id, order, offset }) => {
      if (!isDefined(heights.current[position][id]?.[order])) {
        return;
      }

      delete heights.current[position][id][order];

      updateNextPortalsOffset({ position, id, order, offset });

      if (Object.keys(heights.current[position][id]).length === 0) {
        delete heights.current[position][id];
      }
    },
    [updateNextPortalsOffset]
  );

  const contextValue = {
    registerPortal,
    unregisterPortal,
    changePortalHeight,
    getCalculatedOffset,
  };

  return <StackedPortalContext.Provider value={contextValue}>{children}</StackedPortalContext.Provider>;
};

export const useStackedPortal = ({ position, id, order, offset = 0, safeAreaInset = false }: StackOptions) => {
  const { registerPortal, unregisterPortal, getCalculatedOffset, changePortalHeight } =
    useContext(StackedPortalContext);

  const [calculatedOffset, setCalculatedOffset] = useState<Offset>();
  const [renderedIndex, setRenderedIndex] = useState<RenderedIndex>();

  const handleOffsetChange: OffsetChangeEvent = ({ offset, renderedIndex }) => {
    setCalculatedOffset(offset);

    setRenderedIndex(renderedIndex);
  };

  registerPortal({
    position,
    id,
    order,
    offset,
    safeAreaInset,
    onOffsetChange: handleOffsetChange,
  });

  useEffect(() => {
    const { offset: newOffset, renderedIndex: newRenderedIndex } = getCalculatedOffset({
      position,
      id,
      order,
      offset,
      safeAreaInset,
    });

    setCalculatedOffset(newOffset);

    setRenderedIndex(newRenderedIndex);
  }, [getCalculatedOffset, id, offset, order, position, safeAreaInset]);

  return {
    offset: calculatedOffset,
    renderedIndex,
    unregister: () => unregisterPortal({ position, id, order, offset }),
    changeHeight: (height: number) => changePortalHeight({ position, id, order, offset, height }),
  };
};
