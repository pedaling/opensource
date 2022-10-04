export type BaseInputProps<Value> = {
  defaultValue?: Value;
  disabled?: boolean;
  onValueChange?: ({ value, prevent }: { value: Value; prevent: () => void }) => void;
  tabIndex?: number;
};
