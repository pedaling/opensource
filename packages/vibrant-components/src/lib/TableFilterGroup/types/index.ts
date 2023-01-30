export type StringFilterOperator = 'contains' | 'empty' | 'equals' | 'notContains' | 'notEmpty' | 'notEquals';

export type StringFilter = {
  value: string;
  operator: StringFilterOperator;
  type: 'string';
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
  type: 'date';
};

export type MultiSelectFilterOperator = 'empty' | 'equals' | 'notEmpty' | 'notEquals';

export type Option = {
  label: string;
  value: string;
};

export type MultiSelectFilter = {
  value: Option['value'][];
  operator: MultiSelectFilterOperator;
  type: 'multiSelect';
};

export type TableFilterRefValue = {
  reset: () => void;
  value: Filter;
};

export type FilterValue = Pick<Filter, 'value'>;

export type FilterType = Pick<Filter, 'type'>;

export type Filter = (DateFilter | MultiSelectFilter | StringFilter) & {
  dataKey: string;
  ref?: TableFilterRefValue;
};
