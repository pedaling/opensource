import { useCallback, useMemo, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { CalenderDateItem } from '../CalendarDateItem';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withCalendarVariation } from './CalendarProps';

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

export const Calendar = withCalendarVariation(
  ({ date, startDate, endDate, onDateRangeSelect, range, onDateSelect, ...restProps }) => {
    const [displayMonth, setDisplayMonth] = useState(() => {
      const initialDate = date ?? startDate ?? new Date();

      return new Date(initialDate.getFullYear(), initialDate.getMonth());
    });

    const isSameDate = useCallback(
      (a: Date, b: Date) =>
        a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(),
      []
    );

    const days = useMemo(() => {
      const startDate = new Date(new Date(displayMonth).setDate(1));
      const lastDate = new Date(new Date(displayMonth).setMonth(displayMonth.getMonth(), 0));

      const previousMonthDays = Array.from({ length: startDate.getDay() })
        .map(
          (_, index) =>
            new Date(displayMonth.getFullYear(), displayMonth.getMonth(), displayMonth.getDate() - (index + 1))
        )
        .reverse();

      const currentMonthDays = Array.from({ length: lastDate.getDate() }).map(
        (_, index) => new Date(displayMonth.getFullYear(), displayMonth.getMonth(), index + 1)
      );

      const nextMonthDays = Array.from({ length: 7 - currentMonthDays[currentMonthDays.length - 1].getDay() - 1 }).map(
        (_, index) => new Date(displayMonth.getFullYear(), displayMonth.getMonth(), lastDate.getDate() + index + 1)
      );

      return previousMonthDays.concat(currentMonthDays).concat(nextMonthDays);
    }, [displayMonth]);

    const moveNextMonth = useCallback(() => {
      setDisplayMonth(month => new Date(month.setMonth(month.getMonth() + 1)));
    }, []);

    const movePrevMonth = useCallback(() => {
      setDisplayMonth(month => new Date(month.setMonth(month.getMonth() - 1)));
    }, []);

    const handleDateSelected = useCallback(
      (selectedDate: Date) => {
        if (range) {
          if (startDate && endDate) {
            return onDateRangeSelect?.(selectedDate, undefined);
          }

          if (startDate) {
            const firstDate = startDate.getTime() > selectedDate.getTime() ? selectedDate : startDate;
            const secondDate = startDate.getTime() > selectedDate.getTime() ? startDate : selectedDate;

            return onDateRangeSelect?.(firstDate, secondDate);
          }

          return onDateRangeSelect?.(selectedDate, undefined);
        }

        onDateSelect?.(selectedDate);
      },
      [endDate, onDateRangeSelect, onDateSelect, range, startDate]
    );

    const getIsToday = useCallback((date: Date) => isSameDate(date, new Date()), [isSameDate]);

    const getRange = useCallback(
      (date: Date) => {
        if (!endDate) {
          return false;
        }

        if (startDate === endDate) {
          return false;
        }

        if (startDate && isSameDate(startDate, date)) {
          return 'start';
        }

        if (endDate && isSameDate(endDate, date)) {
          return 'end';
        }

        if (!startDate || !endDate) {
          return false;
        }

        return startDate.getTime() < date.getTime() && endDate.getTime() > date.getTime();
      },
      [endDate, isSameDate, startDate]
    );

    return (
      <Paper px={16} py={24} backgroundColor="surface2" width={320} elevationLevel={2} borderRadiusLevel={1} {...restProps}>
        <VStack spacing={24}>
          <HStack spacing={8} alignItems="center">
            <Pressable as="button" onClick={movePrevMonth}>
              <Icon.ChevronLeft.Regular size={16} />
            </Pressable>
            <VStack flex={1}>
              <Title level={5} textAlign="center">
                {displayMonth.getFullYear()}년 {displayMonth.getMonth() + 1}월
              </Title>
            </VStack>
            <Pressable as="button" onClick={moveNextMonth}>
              <Icon.ChevronRight.Regular size={16} />
            </Pressable>
          </HStack>
          <VStack spacing={8}>
            <HStack spacing={4}>
              {DAY_NAMES.map(name => (
                <Box flex={1} key={name} justifyContent="center" height={40}>
                  <Body level={3} textAlign="center">
                    {name}
                  </Body>
                </Box>
              ))}
            </HStack>
            <VStack spacing={2}>
              {Array.from({ length: days.length / 7 }).map((_, index) => (
                <HStack key={index} spacing={1.33}>
                  {days
                    .slice(index * 7, (index + 1) * 7)
                    .map(pickerDay =>
                      range ? (
                        <CalenderDateItem
                          key={pickerDay.getTime()}
                          otherMonth={pickerDay.getMonth() !== displayMonth.getMonth()}
                          day={pickerDay}
                          active={[startDate, endDate].some(date => date && isSameDate(date, pickerDay))}
                          today={getIsToday(pickerDay)}
                          onClick={handleDateSelected}
                          range={getRange(pickerDay)}
                        />
                      ) : (
                        <CalenderDateItem
                          key={pickerDay.getTime()}
                          otherMonth={pickerDay.getMonth() !== displayMonth.getMonth()}
                          active={date ? isSameDate(pickerDay, date) : false}
                          day={pickerDay}
                          today={getIsToday(pickerDay)}
                          onClick={handleDateSelected}
                          range={false}
                        />
                      )
                    )}
                </HStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Paper>
    );
  }
);
