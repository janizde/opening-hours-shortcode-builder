import { IFieldConfig } from '../typings';

export interface IFieldProps<V = string> {
  field: IFieldConfig<any>;
  value: V | null;
  onChange: (value: V) => void;
}
