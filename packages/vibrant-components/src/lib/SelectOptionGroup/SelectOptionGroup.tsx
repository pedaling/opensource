import { Fragment, useEffect, useRef } from 'react';
import { ScrollBox } from '@vibrant-ui/core';
import { range } from '@vibrant-ui/utils';
import { Divider } from '../Divider';
import { SelectOptionItem } from '../SelectOptionItem';
import { withSelectOptionGroupVariation } from './SelectOptionGroupProps';

export const SelectOptionGroup = withSelectOptionGroupVariation(
  ({ options, focusIndex, onOptionClick, renderOption, reverse, ...restProps }) => {
    const ref = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<HTMLElement[]>([]);
    const renderIndices = reverse ? range(options.length).reverse() : range(options.length);

    useEffect(() => {
      if (!ref.current) {
        return;
      }

      const index = renderIndices[Math.min(renderIndices.length - 1, Math.max(0, focusIndex))];

      const focusElement = itemRefs.current[index];

      if (!focusElement) {
        return;
      }

      if (ref.current.scrollTop > focusElement.offsetTop) {
        ref.current.scrollTo({ top: focusElement.offsetTop });
      }

      if (ref.current.scrollTop + ref.current.offsetHeight < focusElement.offsetTop + focusElement.offsetHeight) {
        ref.current.scrollTo({
          top: focusElement.offsetTop + focusElement.offsetHeight - ref.current.offsetHeight,
        });
      }
    }, [focusIndex, reverse, renderIndices]);

    return (
      <ScrollBox
        ref={ref}
        as="ul"
        width="100%"
        backgroundColor="surface3"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={2}
        hideScroll={true}
        {...restProps}
      >
        {renderIndices.map((renderIndex, index) => (
          <Fragment key={options[renderIndex].value}>
            {index !== 0 && <Divider direction="horizontal" />}
            <SelectOptionItem
              ref={el => el && (itemRefs.current[index] = el)}
              onClick={() => onOptionClick(renderIndex)}
              active={focusIndex === renderIndex}
              disabled={options[renderIndex].disabled}
            >
              {renderOption?.(renderIndex) || options[renderIndex].label}
            </SelectOptionItem>
          </Fragment>
        ))}
      </ScrollBox>
    );
  }
);
