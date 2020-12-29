import * as React from 'react';
import { TAnyFieldConfig } from '../typings';

export interface IFieldProps<F extends TAnyFieldConfig<any>> {
  field: F;
  value: string;
  onChange: React.ChangeEventHandler<HTMLElement>;
  error?: string;
}
