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

<<<<<<< HEAD:packages/vibrant-components/src/lib/TableFilterGroup/types/index.ts
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
=======
export type Filter = (DateFilter | StringFilter) & { dataKey: string; label: string };
>>>>>>> 6299bb43 (feat: implementation TableFilterGroup except initialize and onFilterChange):packages/vibrant-components/src/lib/TableFilter/type/index.ts
