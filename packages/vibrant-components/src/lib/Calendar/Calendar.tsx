import { useCallback, useMemo, useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { CalenderDateItem } from '../CalendarDateItem';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withCalendarVariation } from './CalendarProps';

export const Calendar = withCalendarVariation(
  ({ date, startDate, endDate, onDateRangeSelect, range, onDateSelect, testId = 'calendar', ...restProps }) => {
    const {
      translations: { calendar: calendarTranslation },
    } = useConfig();

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
      const firstDayOfMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 1);

      // 현재 월의 첫째 날이 속한 주의 첫날(일요일)
      const firstDayOfWeek = firstDayOfMonth.getDay();

      // 시작 날짜 계산 (현재 월의 첫째 날이 속한 주의 일요일)
      const startDate = new Date(firstDayOfMonth);

      // 현재 월의 첫째 날에서 해당 요일만큼 빼서 일요일로 맞춤
      startDate.setDate(startDate.getDate() - firstDayOfWeek);

      // 종료 날짜 계산 (시작 날짜에서 6주 후)
      const endDate = new Date(startDate);

      endDate.setDate(startDate.getDate() + 41);

      const days = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return days;
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
      <Paper
        px={16}
        py={24}
        backgroundColor="surface2"
        width={320}
        elevationLevel={2}
        rounded="sm"
        testId={testId}
        {...restProps}
      >
        <VStack spacing={24}>
          <HStack spacing={8} alignVertical="center" mx={12}>
            <Pressable onClick={movePrevMonth}>
              <Icon.ChevronLeft.Regular size={16} />
            </Pressable>
            <VStack flexGrow={1} alignHorizontal="center">
              <Title level={5}>
                {calendarTranslation.title
                  .replace('{year}', displayMonth.getFullYear().toString())
                  .replace('{month}', calendarTranslation.months[displayMonth.getMonth()].toString())}
              </Title>
            </VStack>
            <Pressable onClick={moveNextMonth}>
              <Icon.ChevronRight.Regular size={16} />
            </Pressable>
          </HStack>
          <VStack spacing={8}>
            <HStack spacing={4}>
              {calendarTranslation.days.map(name => (
                <VStack key={name} flexGrow={1} alignVertical="center" alignHorizontal="center" height={40}>
                  <Body level={3}>{name}</Body>
                </VStack>
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
                          date={pickerDay}
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
                          date={pickerDay}
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
