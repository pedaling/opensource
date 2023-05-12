import type { FC } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';

type PopoverProviderProps = {
  children: ReactElementChild;
};

type PopoverValue = {
  getIsOpen: (id: string) => boolean | undefined;
  open: (id: string) => void;
  close: (id: string) => void;
  registerPopover: ({ id }: RegisterPopoverType) => void;
  unregisterPopover: (id: string) => void;
};

type RegisterPopoverType = {
  id: string;
};

const PopoverContext = createContext<PopoverValue>({
  getIsOpen: () => undefined,
  open: () => {},
  close: () => {},
  registerPopover: () => {},
  unregisterPopover: () => {},
});

export const PopoverProvider: FC<PopoverProviderProps> = ({ children }) => {
  const popovers = useRef(new Map<string, boolean>());
  const getIsOpen = useCallback((id: string) => popovers.current.get(id), []);
  const open = useCallback((id: string) => {
    popovers.current.set(id, true);
  }, []);
  const close = useCallback((id: string) => {
    popovers.current.set(id, false);
  }, []);

  const registerPopover = useCallback(({ id }: RegisterPopoverType) => {
    if (isDefined(popovers.current.get(id)) || !id) {
      return;
    }

    popovers.current.set(id, false);
  }, []);

  const unregisterPopover = useCallback((id: string) => {
    if (isDefined(popovers.current.get(id)) || !id) {
      return;
    }

    popovers.current.delete(id);
  }, []);

  const contextValue = useMemo(
    () => ({
      getIsOpen,
      open,
      close,
      registerPopover,
      unregisterPopover,
    }),
    [close, getIsOpen, open, registerPopover, unregisterPopover]
  );

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export const usePopover = ({ id = '', value }: { id?: string; value?: boolean | undefined }) => {
  const { getIsOpen, open, close, registerPopover, unregisterPopover } = useContext(PopoverContext);
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  const openPopover = useCallback(() => {
    if (id) {
      open(id);

      return setIsOpen(getIsOpen(id));
    }

    setIsOpen(true);
  }, [id, setIsOpen, open, getIsOpen]);

  const closePopover = useCallback(() => {
    if (id) {
      close(id);

      return setIsOpen(getIsOpen(id));
    }

    setIsOpen(false);
  }, [close, getIsOpen, id, setIsOpen]);

  useEffect(() => {
    if (id) registerPopover({ id });

    return () => {
      if (id) unregisterPopover(id);
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
