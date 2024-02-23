import type { Translation } from '@vibrant-ui/core';

export const ko: Translation['tableFilterGroup'] = {
  add: '필터 추가',
  initialize: '초기화',
  delete: '삭제',
  stringFilter: {
    filterLabel: {
      empty: '비어있음',
      notEmpty: '비어있지 않음',
    },
    operators: {
      equals: '같다',
      notEquals: '같지 않다',
      contains: '포함한다',
      notContains: '포함하지 않는다',
      empty: '비어있다',
      notEmpty: '비어있지 않다',
    },
  },
  dateFilter: {
    filterLabel: {
      equals: '{date}',
      notEquals: '{date} 같지 않음',
      before: '{date} 이전',
      after: '{date} 이후',
      onOrBefore: '{date} 당일 혹은 이전',
      onOrAfter: '{date} 당일 혹은 이후',
      empty: '비어있음',
      notEmpty: '비어있지 않음',
      between: '{startDate} - {endDate}',
    },
    operators: {
      equals: '같다',
      notEquals: '같지 않다',
      before: '이전',
      after: '이후',
      onOrBefore: '당일 혹은 이전',
      onOrAfter: '당일 혹은 이후',
      empty: '비어있다',
      notEmpty: '비어있지 않다',
      between: '범위 내',
    },
  },
  multiSelectFilter: {
    reset: '초기화',
    filterLabel: {
      contains: '{options}',
      notContains: '{options}',
    },
    operators: {
      contains: '포함한다',
      notContains: '포함하지 않는다',
    },
  },
  radioFilter: {
    reset: '선택 해제',
    filterLabel: {
      equals: '{option}',
      notEquals: '{option} 같지 않음',
      empty: '비어있음',
      notEmpty: '비어있지 않음',
    },
    operators: {
      equals: '같다',
      notEquals: '같지 않다',
      empty: '비어있다',
      notEmpty: '비어있지 않다',
    },
  },
};
