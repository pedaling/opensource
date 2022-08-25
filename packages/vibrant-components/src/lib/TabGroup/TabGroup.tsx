import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react';
import { Divider } from '../Divider';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { withTabGroupVariation } from './TabGroupProps';

export const TabGroup = withTabGroupVariation(
  ({ BoxComponent, tabFlexGrow, tabFlexShrink, tabFlexBasis, tabId, onTabChange, children, ...restProps }) => {
    const tabElements = (Children.toArray(children).filter(child => isValidElement(child)) as typeof children) ?? [];
    const tabRefs = useRef<Record<string, HTMLElement>>({});
    const tabGroupRef = useRef<HTMLElement>(null);

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

    return (
      <VStack width="100%">
        <BoxComponent
          ref={tabGroupRef}
          flexDirection="row"
          hideScroll={true}
          overflowX="auto"
          mb={-1}
          px={[20, 20, 0]}
          {...restProps}
        >
          {tabElements.map((element, index) => (
            <HStack
              mr={index !== tabElements.length - 1 ? [20, 20, 28] : 0}
              flexGrow={tabFlexGrow}
              flexShrink={tabFlexShrink}
              flexBasis={tabFlexBasis}
              hidden={element.props.hidden}
              key={element.props.id}
            >
              {cloneElement(element, {
                active: element.props.id === tabId,
                onClick: onTabChange,
                ref: (domRef: HTMLElement | null) => {
                  if (!domRef) {
                    return;
                  }

                  tabRefs.current[element.props.id] = domRef;
                },
              })}
            </HStack>
          ))}
        </BoxComponent>
        <Divider direction="horizontal" />
      </VStack>
    );
  }
);
