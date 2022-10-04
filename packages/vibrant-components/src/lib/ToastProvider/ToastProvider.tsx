import { createContext, useContext, useEffect, useState } from 'react';
import type { Dispatch, FC } from 'react';
import { HStack, StackedPortal, Toast } from '@vibrant-ui/components';
import type { ReactElementChild } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import type { ToastProps } from '../Toast/ToastProps';

const DURATION = 2500;

type ToastProviderProps = {
  children: ReactElementChild;
};

const ToastPropsContext = createContext<ToastProps | undefined>(undefined);
const ToastActionContext = createContext<Dispatch<ToastProps | undefined>>(() => {});

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | undefined>(undefined);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toastProps) {
      setShow(true);
    }

    const timer = setTimeout(() => {
      setShow(false);

      setToastProps(undefined);
    }, toastProps?.duration || DURATION);

    return () => clearTimeout(timer);
  }, [toastProps]);

  return (
    <ToastActionContext.Provider value={setToastProps}>
      <ToastPropsContext.Provider value={toastProps}>
        {children}
        {show && toastProps && (
          <StackedPortal id="toast" order={1} left={0} right={0} bottom={0} zIndex={10} safeAreaMode="margin">
            <Transition animation={{ opacity: show ? 1 : 0 }} duration={200} easing="easeOutQuad">
              <HStack mx={20} mb={[20, 0]} mt={[0, 16]} flexGrow={[1, 0]} alignment="center">
                <Toast {...toastProps} />
              </HStack>
            </Transition>
          </StackedPortal>
        )}
      </ToastPropsContext.Provider>
    </ToastActionContext.Provider>
  );
};

export const useToastProps = () => useContext(ToastPropsContext);

export const useToast = () => {
  const setToastProps = useContext(ToastActionContext);

  return {
    showToast: (props: ToastProps) => setToastProps(props),
  };
};
