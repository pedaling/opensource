import type { ForwardedRef, FunctionComponentElement, MouseEventHandler } from 'react';
import { Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from 'react';
import { useResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { useInView } from '@vibrant-ui/utils';
import { Divider } from '../Divider';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { Space } from '../Space';
import { VStack } from '../VStack';
import { withTabGroupVariation } from './TabGroupProps';

const InView = ({
  onChange,
  children,
  options,
}: {
  onChange: (inView: boolean) => void;
  children: FunctionComponentElement<{ ref?: ForwardedRef<any> }>;
  options?: IntersectionObserverInit;
}) => {
  const { ref: inViewRef } = useInView({ initialInView: true, onChange, options });

  const composeRef = useCallback(
    (node: HTMLElement) => {
      if (children.ref) {
        if (typeof children.ref === 'function') {
          children.ref(node);
        } else {
          children.ref.current = node;
        }
      }

      inViewRef(node);
    },
    [children, inViewRef]
  );

  return cloneElement(children, {
    ref: composeRef,
  });
};

export const TabGroup = withTabGroupVariation(
  ({ BoxComponent, tabFlexGrow, tabFlexShrink, tabFlexBasis, tabId, onTabChange, children, ...restProps }) => {
    const tabElements = (Children.toArray(children).filter(child => isValidElement(child)) as typeof children) ?? [];
    const tabRefs = useRef<Record<string, HTMLElement>>({});
    const tabGroupRef = useRef<HTMLUListElement>(null);
    const [lastTabIsInView, setLastTabIsInView] = useState(true);
    const [firstTabIsInView, setFirstTabIsInView] = useState(true);
    const tabInViewRefs = useRef<boolean[]>(new Array(Children.count(children)).fill(false));

    const { breakpointIndex } = useResponsiveValue();
    const isLaptop = breakpointIndex > 1;

    const setTabRef = (id: string) => (node: HTMLElement | null) => {
      if (!node) {
        return;
      }

      tabRefs.current[id] = node;
    };

    useEffect(() => {
      if (!tabRefs.current[tabId] || !tabGroupRef.current) {
        return;
      }

      const defaultOffset =
        ((tabGroupRef.current.children[0] as HTMLElement)?.offsetLeft ?? 0) - tabGroupRef.current.offsetLeft;

      tabGroupRef.current.scrollTo({
        left:
          tabRefs.current[tabId].offsetLeft -
          defaultOffset -
          tabGroupRef.current.offsetWidth / 2 +
          tabRefs.current[tabId].offsetWidth / 2,
        behavior: 'smooth',
      });
    }, [tabId]);

    useEffect(() => {
      tabInViewRefs.current = new Array(Children.count(children)).fill(false);
    }, [children]);

    const goToPrevPage = () => {
      const firstTabInViewIndex = tabInViewRefs.current.indexOf(true);
      const targetTabIndex = Math.max(firstTabInViewIndex - 1, 0);
      const targetTabNode = tabRefs.current[tabElements[targetTabIndex].props.id];

      if (!targetTabNode) {
        return;
      }

      tabGroupRef.current?.scrollTo({
        left: targetTabNode.offsetLeft - (tabGroupRef.current.offsetWidth - targetTabNode.offsetWidth) + 40,
        behavior: 'smooth',
      });
    };

    const goToNextPage = () => {
      const lastTabInViewIndex = tabInViewRefs.current.lastIndexOf(true);
      const targetTabIndex = Math.min(lastTabInViewIndex + 1, tabInViewRefs.current.length - 1);
      const targetTabNode = tabRefs.current[tabElements[targetTabIndex].props.id];

      if (!targetTabNode) {
        return;
      }

      tabGroupRef.current?.scrollTo({
        left: targetTabNode.offsetLeft - 40,
        behavior: 'smooth',
      });
    };

    const isScrollingRef = useRef(false);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const clientXRef = useRef<number | null>(null);
    const scrollLeftRef = useRef<number | null>(null);

    const startScroll: MouseEventHandler = e => {
      isScrollingRef.current = true;

      clientXRef.current = e.clientX;

      scrollLeftRef.current = tabGroupRef.current ? tabGroupRef.current.scrollLeft : null;
    };

    const scrollOnMove: MouseEventHandler = e => {
      if (!isScrollingRef.current || clientXRef.current === null || scrollLeftRef.current === null) {
        return;
      }

      tabGroupRef.current?.scrollTo({ left: scrollLeftRef.current - (e.clientX - clientXRef.current) });
    };

    const resetScroll: MouseEventHandler = () => {
      isScrollingRef.current = false;
    };

    return (
      <VStack width="100%">
        <BoxComponent
          as="ul"
          ref={tabGroupRef}
          onMouseDown={startScroll}
          onMouseMove={scrollOnMove}
          onMouseUp={resetScroll}
          onMouseLeave={resetScroll}
          flexDirection="row"
          mb={-1}
          {...restProps}
        >
          <Space width={[20, 20, 0]} />
          {tabElements.map((element, index) =>
            isLaptop ? (
              <InView
                key={element.props.id}
                onChange={inView => {
                  if (index === 0) {
                    setFirstTabIsInView(inView);
                  }

                  if (index === tabElements.length - 1) {
                    setLastTabIsInView(inView);
                  }

                  tabInViewRefs.current[index] = inView;
                }}
                options={
                  index === 0 || index === tabElements.length - 1
                    ? { threshold: 0.99, root: tabGroupRef.current }
                    : { threshold: 0.99, rootMargin: '0px -40px 0px -40px', root: tabGroupRef.current }
                }
              >
                <HStack
                  as="li"
                  mr={index !== tabElements.length - 1 ? [20, 20, 28] : 0}
                  flexGrow={tabFlexGrow}
                  flexShrink={tabFlexShrink}
                  flexBasis={tabFlexBasis}
                  hidden={element.props.hidden}
                  ref={setTabRef(element.props.id)}
                >
                  {cloneElement(element, {
                    active: element.props.id === tabId,
                    onClick: onTabChange,
                  })}
                </HStack>
              </InView>
            ) : (
              <HStack
                as="li"
                key={element.props.id}
                mr={index !== tabElements.length - 1 ? [20, 20, 28] : 0}
                flexGrow={tabFlexGrow}
                flexShrink={tabFlexShrink}
                flexBasis={tabFlexBasis}
                hidden={element.props.hidden}
                ref={setTabRef(element.props.id)}
              >
                {cloneElement(element, {
                  active: element.props.id === tabId,
                  onClick: onTabChange,
                })}
              </HStack>
            )
          )}
          <Space width={[20, 20, 0]} />
        </BoxComponent>
        {isLaptop && !firstTabIsInView && (
          <HStack position="absolute" height="100%" left={0}>
            <Pressable
              ariaLabel="Go to previous page"
              onClick={goToPrevPage}
              width={40}
              height="100%"
              backgroundColor="background"
              px={12}
              justifyContent="center"
            >
              <Icon.ChevronLeft.Regular size={16} />
            </Pressable>
            <Paper width={6} height="100%" gradient="linearLeft" />
          </HStack>
        )}
        {isLaptop && !lastTabIsInView && (
          <HStack position="absolute" height="100%" right={0}>
            <Paper width={6} height="100%" gradient="linearRight" />
            <Pressable
              ariaLabel="Go to next page"
              onClick={goToNextPage}
              width={40}
              height="100%"
              backgroundColor="background"
              px={12}
              justifyContent="center"
            >
              <Icon.ChevronRight.Regular size={16} />
            </Pressable>
          </HStack>
        )}
        <Divider direction="horizontal" />
      </VStack>
    );
  }
);
