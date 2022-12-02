import type { ReactElementChild } from '../../types';

export type Position = 'bottom' | 'top';

export type Offset = number | string;
export type RenderedIndex = number;

export type StackOptions = {
  position: Position;
  id: string;
  order: number;
  offset?: Offset;
  safeAreaInset?: boolean;
};

export type OffsetChangeEvent = (_: { offset?: Offset; renderedIndex?: RenderedIndex }) => void;

export type StackedPortalData = {
  [position in Position]: {
    [id in string]: {
      [order in string]: {
        height: number;
        offset: Offset;
        safeAreaInset: boolean;
        onOffsetChange?: OffsetChangeEvent;
      };
    };
  };
};

export type EventListener = { onOffsetChange: OffsetChangeEvent };

export type RegisterPortal = (_: StackOptions & EventListener) => void;
export type UnregisterPortal = (_: StackOptions) => void;
export type ChangePortalHeight = (_: StackOptions & { height: number }) => void;
export type GetCalculatedOffset = (_: StackOptions) => { offset?: Offset; renderedIndex?: RenderedIndex };
export type AddEventListener = (_: { position: Position; listener: EventListener }) => () => void;

export type StackedPortalContextValue = {
  registerPortal: RegisterPortal;
  unregisterPortal: UnregisterPortal;
  changePortalHeight: ChangePortalHeight;
  getCalculatedOffset: GetCalculatedOffset;
  addEventListener: AddEventListener;
};

export type StackedPortalProviderProps = {
  children: ReactElementChild;
  priorityOrder: {
    [key in Position]: string[];
  };
};
