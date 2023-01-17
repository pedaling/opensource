export type StringFilterOperator = 'contains' | 'empty' | 'equals' | 'notContains' | 'notEmpty' | 'notEquals';

export type StringFilter = {
  value: string;
  operator: StringFilterOperator[];
};

export type Filter = StringFilter & { dataKey: string };
