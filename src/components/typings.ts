import { TAnyFieldConfig } from '../typings';

export interface IFieldProps<
  F extends TAnyFieldConfig<any>,
  V
  > {
  field: F;
  value: V | null;
  onChange: (value: V) => void;
}
