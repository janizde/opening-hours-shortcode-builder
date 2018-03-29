import { IFieldConfig } from '../typings';

export interface IFieldProps<V = string> {
  field: IFieldConfig<any>;
  value?: V;
  onChange: (value: V) => void;
}
