import { cloneElement, isValidElement, useCallback, useEffect, useState } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { Checkbox } from '../Checkbox';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Stack } from '../Stack';
import { withResourceItemVariation } from './ResourceItemProps';

export const ResourceItem = withResourceItemVariation(
  ({
    title,
    py,
    subtitle,
    height,
    width,
    imageSize,
    ImageComponent,
    ActionComponent,
    direction,
    itemSpacing,
    checkboxSize,
    id,
    defaultValue,
    selected,
    onToggleSelect,
    selectable,
  }) => {
    const [isSelected, setSelected] = useState(defaultValue);
    const isControlled = isDefined(selected);

    useEffect(() => {
      setSelected(selected);
    }, [selected]);

    const handleSelect = useCallback(() => {
      if (isControlled) {
        onToggleSelect?.({ id, selected: selectable ? !isSelected : true });
      }

      setSelected(!isSelected);
    }, [isControlled, isSelected, onToggleSelect, id, selectable]);

    return (
      <Pressable onClick={handleSelect}>
        <HStack spacing={itemSpacing} alignVertical="center" py={py} height={height} width={width ?? 240}>
          {selectable ? <Checkbox size={checkboxSize} onValueChange={handleSelect} defaultValue={isSelected} /> : null}
          {ImageComponent && isValidElement(ImageComponent)
            ? cloneElement(ImageComponent, {
                ...('size' in ImageComponent.props ? { size: imageSize } : { width: imageSize, height: imageSize }),
              })
            : null}
          <Stack
            flex={1}
            direction={direction === 'vertical' ? 'vertical' : 'horizontal'}
            spacing={direction === 'vertical' ? 2 : 4}
            alignVertical="center"
          >
            <Body weight="medium" level={2} lineLimit={1} overflowWrap="anywhere">
              {title}
            </Body>
            {subtitle ? (
              <Body color="onView2" level={4} lineLimit={1} overflowWrap="anywhere">
                {subtitle}
              </Body>
            ) : null}
          </Stack>
          {ActionComponent ? cloneElement(ActionComponent, { size: 'sm' }) : null}
        </HStack>
      </Pressable>
    );
  }
);
