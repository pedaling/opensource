import { PressableBox, usePopover } from '@vibrant-ui/core';
import { withPopoverOpenerVariation } from './PopoverOpenerProps';

export const PopoverOpener = withPopoverOpenerVariation(
  ({ popoverId = '', openInteraction, isOpen, open, close, children }) => {
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

    return (
      <PressableBox
        cursor={openInteraction === 'click' ? 'pointer' : 'default'}
        onClick={() => openInteraction === 'click' && toggleOpener()}
        onHoverIn={() => openInteraction === 'hover' && openOpener()}
        onHoverOut={() => openInteraction === 'hover' && closeOpener()}
        as="label"
      >
        {children}
      </PressableBox>
    );
  }
);
