export type StringFilterOperator = 'contains' | 'empty' | 'equals' | 'notContains' | 'notEmpty' | 'notEquals';

export type StringFilter = {
  value: string;
  operator: StringFilterOperator;
};

export type DateFilterOperator =
  | 'after'
  | 'before'
  | 'between'
  | 'empty'
  | 'equals'
  | 'notEmpty'
  | 'notEquals'
  | 'onOrAfter'
  | 'onOrBefore';

export type DateFilter = {
  value: Date[];
  operator: DateFilterOperator;
};

export type Filter = (DateFilter | StringFilter) & { dataKey: string; label: string };
