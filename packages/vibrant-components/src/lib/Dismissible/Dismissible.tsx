import type { FC } from 'react';
import { useEffect } from 'react';
import { ClickEvent, useGlobalEvent } from '@vibrant-ui/core';
import { getElementRect } from '@vibrant-ui/utils';
import type { DismissibleProps } from './DismissibleProps';

export const Dismissible: FC<DismissibleProps> = ({ active = false, onDismiss, targetRef, children }) => {
  const { addEventListener, removeEventListener } = useGlobalEvent();

  useEffect(() => {
    if (!active) {
      return;
    }

    const onClick = async ({ pageX, pageY }: ClickEvent) => {
      if (!targetRef?.current) {
        return;
      }

      const targetRect = await getElementRect(targetRef.current);
      const isEventTargetInTargetRect =
        pageX >= targetRect.x &&
        pageX <= targetRect.x + targetRect.width &&
        pageY >= targetRect.y &&
        pageY <= targetRect.y + targetRect.height;

      if (!isEventTargetInTargetRect) {
        onDismiss();
      }
    };

    addEventListener('click', onClick);

    return () => {
      removeEventListener('click', onClick);
    };
  }, [active, addEventListener, onDismiss, removeEventListener, targetRef]);

  return <>{children}</>;
};
