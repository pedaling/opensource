import { Fragment, useEffect, useRef } from 'react';
import { Divider } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { range } from '@vibrant-ui/utils';
import { SelectOptionItem } from '../SelectOptionItem';
import { withSelectOptionGroupVariation } from './SelectOptionGroupProps';

export const SelectOptionGroup = withSelectOptionGroupVariation(
  ({ options, focusIndex, onOptionClick, renderOption, hidden, reverse, ...restProps }) => {
    const ref = useRef<HTMLUListElement>(null);
    const indices = reverse ? range(options.length).reverse() : range(options.length);

    useEffect(() => {
      if (!ref.current) {
        return;
      }

      const index = indices[Math.min(indices.length - 1, Math.max(0, focusIndex))];
      const optionElements = ref.current.querySelectorAll('li');
      const focusElement = optionElements[index];

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
    }, [hidden, focusIndex, reverse, indices]);

    return (
      <Box
        ref={ref}
        as="ul"
        width="100%"
        backgroundColor="surface3"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={2}
        overflowY="scroll"
        hidden={hidden}
        hideScroll={true}
        {...restProps}
      >
        {indices.map((index, i) => (
          <Fragment key={options[index].value}>
            {i !== 0 && <Divider direction="horizontal" thickness={1} />}
            <SelectOptionItem onClick={() => onOptionClick(index)} active={focusIndex === index}>
              {renderOption?.(index) || options[index].label}
            </SelectOptionItem>
          </Fragment>
        ))}
      </Box>
    );
  }
);
