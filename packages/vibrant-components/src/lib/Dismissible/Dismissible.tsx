import type { FC } from 'react';
import { cloneElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { useGlobalEvent } from '@vibrant-ui/core';
import type { ClickEvent } from '@vibrant-ui/core';
import { getElementRect } from '@vibrant-ui/utils';
import type { DismissibleProps } from './DismissibleProps';

export const Dismissible: FC<DismissibleProps> = ({ active = false, onDismiss, children }) => {
  const { addEventListener, removeEventListener } = useGlobalEvent();

  const targetRef = useRef<HTMLElement | null>(null);

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

    requestAnimationFrame(() => {
      addEventListener('click', onClick);
    });

    return () => {
      requestAnimationFrame(() => {
        removeEventListener('click', onClick);
      });
    };
  }, [active, addEventListener, onDismiss, removeEventListener]);

  const forwardTargetRef = useCallback(
    (node: HTMLElement | null) => {
      if (children.ref) {
        if (typeof children.ref === 'function') {
          children.ref(node);
        } else {
          children.ref.current = node;
        }
      }

      targetRef.current = node;
    },
    [children]
  );

  const clonedChildren = useMemo(() => cloneElement(children, { ref: forwardTargetRef }), [children, forwardTargetRef]);

  return <>{clonedChildren}</>;
};
