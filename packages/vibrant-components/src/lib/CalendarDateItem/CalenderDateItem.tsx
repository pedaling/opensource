import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withCalendarDateItemVariation } from './CalendarDateItemProps';

export const CalenderDateItem = withCalendarDateItemVariation(({ day, onClick, color, today, range, ...restProps }) => (
  <Box
    base={Pressable}
    onClick={() => onClick(day)}
    position="relative"
    overflowX="visible"
    overflowY="visible"
    width={40}
    height={40}
  >
    <>
      <Box
        position="absolute"
        left={-1}
        top={0}
        bottom={0}
        right="50%"
        hidden={!range || range === 'start'}
        backgroundColor="primaryContainer"
        borderColor="outlinePrimary"
        borderStyle="solid"
        borderWidth={0}
        borderTopWidth={1}
        borderBottomWidth={1}
      />
      <Box
        position="absolute"
        left="50%"
        top={0}
        bottom={0}
        right={-1}
        hidden={!range || range === 'end'}
        backgroundColor="primaryContainer"
        borderColor="outlinePrimary"
        borderStyle="solid"
        borderWidth={0}
        borderTopWidth={1}
        borderBottomWidth={1}
      />
      <Box
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
        {...restProps}
      >
        <Body level={3} color={color} weight="bold" textAlign="center">
          {day.getDate()}
        </Body>
        {today && (
          <Box
            position="absolute"
            width={4}
            height={4}
            borderRadius={2}
            bottom={8}
            left={18}
            backgroundColor="primary"
          />
        )}
      </Box>
    </>
  </Box>
));
