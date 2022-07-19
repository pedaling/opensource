import { Fragment, useEffect, useRef } from 'react';
import { Divider } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { SelectOptionItem } from '../SelectOptionItem';
import { withSelectOptionGroupVariation } from './SelectOptionGroupProps';

export const SelectOptionGroup = withSelectOptionGroupVariation(
  ({ options, focusIndex, onItemClick, renderOption, hidden, ...restProps }) => {
    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {
      if (!ref.current) {
        return;
      }

      const item = ref.current.querySelectorAll('li')[Math.min(options.length - 1, Math.max(0, focusIndex))];

      if (!item) {
        return;
      }

      if (ref.current.scrollTop > item.offsetTop) {
        ref.current.scrollTo({ top: item.offsetTop });
      }

      if (ref.current.scrollTop + ref.current.offsetHeight < item.offsetTop + item.offsetHeight) {
        ref.current.scrollTo({
          top: item.offsetTop + item.offsetHeight - ref.current.offsetHeight,
        });
      }
    }, [hidden, focusIndex, options.length]);

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
        {options.map((option, index) => (
          <Fragment key={option.value}>
            {index !== 0 && <Divider direction="horizontal" thickness={1} />}
            <SelectOptionItem onClick={() => onItemClick(index)} active={focusIndex === index}>
              {renderOption?.(index) || option.label}
            </SelectOptionItem>
          </Fragment>
        ))}
      </Box>
    );
  }
);
