import type { FC } from 'react';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';

type PopoverProviderProps = {
  children: ReactElementChild;
};

type PopoverValue = {
  getIsOpen: (id: string) => boolean | undefined;
  open: (id: string) => void;
  close: (id: string) => void;
  registerPopover: (id: string) => void;
  unregisterPopover: (id: string) => void;
  checkIsRegistered: (id: string) => boolean | undefined;
};

const PopoverContext = createContext<PopoverValue>({
  getIsOpen: () => undefined,
  open: () => {},
  close: () => {},
  registerPopover: () => {},
  unregisterPopover: () => {},
  checkIsRegistered: () => undefined,
});

export const PopoverProvider: FC<PopoverProviderProps> = ({ children }) => {
  const popovers = useRef(new Map<string, boolean>());
  const getIsOpen = useCallback((id: string) => popovers.current.get(id), []);
  const [_, setCount] = useState(0);

  const checkIsRegistered = useCallback((id: string) => popovers.current.get(id) !== undefined, []);

  const open = useCallback(
    (id: string) => {
      if (!checkIsRegistered(id)) {
        return;
      }

      popovers.current.set(id, true);

      setCount(count => count + 1);
    },
    [checkIsRegistered]
  );
  const close = useCallback(
    (id: string) => {
      if (!checkIsRegistered(id)) {
        return;
      }

      setCount(count => count + 1);

      popovers.current.set(id, false);
    },
    [checkIsRegistered]
  );

  const registerPopover = useCallback(
    (id: string) => {
      if (checkIsRegistered(id)) {
        return;
      }

      popovers.current.set(id, false);
    },
    [checkIsRegistered]
  );

  const unregisterPopover = useCallback(
    (id: string) => {
      if (!checkIsRegistered(id)) {
        return;
      }

      popovers.current.delete(id);
    },
    [checkIsRegistered]
  );

  const contextValue = {
    getIsOpen,
    open,
    close,
    registerPopover,
    unregisterPopover,
    checkIsRegistered,
  };

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export const usePopover = ({ id = '', value }: { id?: string; value?: boolean | undefined }) => {
  const { getIsOpen, open, close, registerPopover, unregisterPopover, checkIsRegistered } = useContext(PopoverContext);
  const [nonRegisteredIsOpen, setNonRegisteredIsOpen] = useState(value);

  if (checkIsRegistered(id) === undefined) {
    throw Error('Provider cannot be found');
  }

  const isOpen = checkIsRegistered(id) ? getIsOpen(id) : nonRegisteredIsOpen;

  const openPopover = useCallback(() => {
    if (id && checkIsRegistered(id)) {
      return open(id);
    }

    setNonRegisteredIsOpen(true);
  }, [checkIsRegistered, id, open]);

  const closePopover = useCallback(() => {
    if (id && checkIsRegistered(id)) {
      return close(id);
    }

    setNonRegisteredIsOpen(false);
  }, [checkIsRegistered, close, id]);

  useEffect(() => {
    if (id) {
      registerPopover(id);
    }

    return () => {
      if (id) {
        unregisterPopover(id);
      }
    };
  }, [id, registerPopover, unregisterPopover]);

  useEffect(() => {
    if (isDefined(value)) {
      return value ? openPopover() : closePopover();
    }
  }, [closePopover, openPopover, value]);

  return {
    isOpen,
    open: () => openPopover(),
    close: () => closePopover(),
  };
};
