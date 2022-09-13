import type { FC } from 'react';
import { createContext, useContext, useRef } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import type { ReactElementChild } from '../../types';

type Position = 'bottom' | 'top';

type StackOptions = { position: Position; id: string; order: number };

type EventListener = {
  offsetChange?: (offset: number | 'loading') => void;
};

type AddEventListener = (stackOptions: StackOptions, listener: EventListener) => void;
type RegisterPortal = (stackOptions: StackOptions) => void;
type UnregisterPortal = (stackOptions: StackOptions) => void;
type SetPortalHeight = ({ position, id, order, height }: StackOptions & { height: number }) => void;

type StackedPortalContextValue = {
  addEventListener: AddEventListener;
  registerPortal: RegisterPortal;
  unregisterPortal: UnregisterPortal;
  setPortalHeight: SetPortalHeight;
};

const StackedPortalContext = createContext<StackedPortalContextValue>({
  addEventListener: () => {},
  registerPortal: () => {},
  unregisterPortal: () => {},
  setPortalHeight: () => {},
});

type StackedPortalProviderProps = {
  children: ReactElementChild;
  priorityOrder: {
    [key in Position]: string[];
  };
};

type StackedPortalData = {
  [position in Position]: {
    [id in string]: {
      [order in string]: {
        height: number | 'loading';
        listener: EventListener;
      };
    };
  };
};

export const StackedPortalProvider: FC<StackedPortalProviderProps> = ({ children, priorityOrder }) => {
  const portals = useRef<StackedPortalData>({ top: {}, bottom: {} });

  const getOffset = ({ position, id, order }: StackOptions) => {
    const index = priorityOrder[position].findIndex(value => value === id);

    const prevRenderedIds = priorityOrder[position]
      .slice(0, index)
      .filter(value => isDefined(portals.current[position][value]));

    const prevItems: (number | 'loading')[] = [
      ...prevRenderedIds.reduce(
        (result: (number | 'loading')[], prevRenderedId) => [
          ...result,
          ...Object.entries(portals.current[position][prevRenderedId]).map(([_, value]) => value.height),
        ],
        []
      ),
      ...Object.entries(portals.current[position][id])
        .filter(([key]) => Number(key) < order)
        .map(([_, value]) => value.height),
    ];

    if (prevItems.length === 0) {
      return 0;
    }

    if (prevItems.some(item => item === 'loading')) {
      return 'loading';
    }

    return prevItems.reduce((previousValue: number, item) => previousValue + Number(item), 0);
  };

  const updateOffset = ({ position, id, order }: StackOptions) => {
    const index = priorityOrder[position].findIndex(value => value === id);

    const nextIds = priorityOrder[position]
      .slice(index + 1)
      .filter(value => isDefined(portals.current[position][value]));

    const nextItems = [
      ...Object.entries(portals.current[position][id])
        .filter(([key]) => Number(key) > order)
        .map(([key, value]) => ({ id, order: key, listener: value.listener })),
      ...nextIds.flatMap(nextId =>
        Object.entries(portals.current[position][nextId]).map(([key, value]) => ({
          id: nextId,
          order: key,
          listener: value.listener,
        }))
      ),
    ];

    for (const nextItem of nextItems) {
      nextItem.listener.offsetChange?.(getOffset({ id: nextItem.id, order: Number(nextItem.order), position }));
    }
  };

  const addEventListener: AddEventListener = ({ position, id, order }, listener) => {
    if (isDefined(portals.current[position][id]?.[order])) {
      return;
    }

    portals.current[position][id] = {
      ...portals.current[position][id],
      [order]: {
        listener,
        height: 'loading',
      },
    };
  };

  const registerPortal: RegisterPortal = ({ position, id, order }) => {
    if (!isDefined(portals.current[position][id][order])) {
      return;
    }

    portals.current[position][id][order].listener.offsetChange?.(getOffset({ position, id, order }));
  };

  const unregisterPortal: UnregisterPortal = ({ position, id, order }) => {
    if (!isDefined(portals.current[position][id]?.[order])) {
      return;
    }

    delete portals.current[position][id]?.[order];

    updateOffset({ position, id, order });
  };

  const setPortalHeight: SetPortalHeight = ({ id, order = 1, position, height }) => {
    if (!isDefined(portals.current[position][id]?.[order])) {
      return;
    }

    portals.current[position][id][order].height = height;

    updateOffset({ position, id, order });
  };

  const contextValue = {
    addEventListener,
    registerPortal,
    unregisterPortal,
    setPortalHeight,
  };

  return <StackedPortalContext.Provider value={contextValue}>{children}</StackedPortalContext.Provider>;
};

export const useStackedPortal = (): StackedPortalContextValue => useContext(StackedPortalContext);
