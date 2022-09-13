import type { FC } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactElementChild } from '../../types';
import { PortalRootView } from '../PortalRootView';

type CreateContainer = () => Promise<{ index: number; container: Element | number | null } | null>;
type RemoveContainer = (index: number) => void;

type PortalRootContextValue = {
  container: Element | number | null;
  createContainer: CreateContainer;
  removeContainer: RemoveContainer;
};

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
  createContainer: () => Promise.resolve(null),
  removeContainer: () => {},
});

type PortalRootProviderProps = {
  children: ReactElementChild;
  zIndex: number;
};

export const PortalRootProvider: FC<PortalRootProviderProps> = ({ children, zIndex }) => {
  const [container, setContainer] = useState<Element | number | null>(null);
  const [rootViews, setRootViews] = useState<ReactElementChild[]>([
    <PortalRootView key={1} zIndex={zIndex} onRender={setContainer} />,
  ]);

  const createContainer = useCallback<CreateContainer>(
    async () =>
      new Promise(resolve =>
        setRootViews(prevState => [
          ...prevState,
          <PortalRootView
            key={prevState.length + 1}
            zIndex={zIndex}
            onRender={newContainer =>
              resolve({
                index: prevState.length,
                container: newContainer,
              })
            }
          />,
        ])
      ),
    [zIndex]
  );

  const removeContainer = useCallback<RemoveContainer>(index => {
    setRootViews(prevState => {
      prevState[index] = null;

      return prevState;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      container,
      createContainer,
      removeContainer,
    }),
    [container, createContainer, removeContainer]
  );

  return (
    <PortalRootContext.Provider value={contextValue}>
      {children}
      {rootViews}
    </PortalRootContext.Provider>
  );
};

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
