import { PressableBox, usePopover } from '@vibrant-ui/core';
import { withPopoverOpenerVariation } from './PopoverOpenerProps';

export const PopoverOpener = withPopoverOpenerVariation(
  ({ popoverId = '', openToHover, openToClick, isOpen, open, close, children }) => {
    const { isOpen: registeredIsOpen, open: registeredOpen, close: registeredClose } = usePopover({ id: popoverId });
    const toggleOpener = () => {
      if (popoverId) return registeredIsOpen ? registeredClose?.() : registeredOpen?.();

      return isOpen ? close?.() : open?.();
    };
    const openOpener = () => {
      if (popoverId) return registeredOpen?.();

      return open?.();
    };
    const closeOpener = () => {
      if (popoverId) return registeredClose?.();

      return close?.();
    };

    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     console.log(registeredIsOpen);
    //   }, 1000);

    //   return () => clearInterval(timer);
    // }, [isOpen, registeredIsOpen]);

    return (
      <PressableBox
        cursor={openToClick ? 'pointer' : 'default'}
        onClick={() => openToClick && toggleOpener()}
        onHoverIn={() => openToHover && openOpener()}
        onHoverOut={() => openToHover && closeOpener()}
        as="label"
      >
        {children}
      </PressableBox>
    );
  }
);
