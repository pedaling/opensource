import { withTooltipVariation } from './TooltipProps';

export const Tooltip = () =>
  withTooltipVariation(
    ({
      content,
      enterDelay = 100,
      enterTouchDelay = 700,
      leaveDelay = 0,
      leaveTouchDelay = 1500,
      maxWidth = 320,
      onClose,
      onOpen,
      open,
      position = 'top',
    }) => {}
  );
