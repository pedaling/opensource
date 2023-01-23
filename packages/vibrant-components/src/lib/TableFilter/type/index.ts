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

export type MultiSelectFilterOperator = 'empty' | 'equals' | 'notEmpty' | 'notEquals';

export type Option = {
  label: string;
  value: string;
};

export type MultiSelectFilter = {
  value: Option['value'][];
  operator: MultiSelectFilterOperator;
};

export type Filter = (DateFilter | MultiSelectFilter | StringFilter) & { dataKey: string };
