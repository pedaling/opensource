import type { Translation } from '@vibrant-ui/core';

export const ko: Translation['calendar'] = {
  title: '{year}년 {month}',
  days: ['일', '월', '화', '수', '목', '금', '토'],
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
};

export const en: Translation['calendar'] = {
  title: '{month} {year}',
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
};

export const ja: Translation['calendar'] = {
  title: '{year}年 {month}',
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  days: ['日', '月', '火', '水', '木', '金', '土'],
};
