import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react';
import { Divider } from '../Divider';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { withTabGroupVariation } from './TabGroupProps';

export const TabGroup = withTabGroupVariation(({ tabFlex, overflowX, tabId, onTabChange, children, ...restProps }) => {
  const tabElements = (Children.toArray(children).filter(child => isValidElement(child)) as typeof children) ?? [];
  const tabRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    if (!tabRefs.current[tabId]) {
      return;
    }
    tabRefs.current[tabId].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }, [tabId]);

  return (
    <VStack>
      <HStack overflowX={overflowX} hideScroll={true} mb={-1} px={[20, 0]} {...restProps}>
        {tabElements.map((element, index) => (
          <HStack
            mr={index !== tabElements.length - 1 ? [20, 20, 28] : 0}
            flex={tabFlex}
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
      </HStack>
      <Divider direction="horizontal" thickness={1} />
    </VStack>
  );
});
