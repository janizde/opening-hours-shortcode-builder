import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ITextFieldConfig } from './../../../typings';

import FieldWrapper from './../FieldWrapper';

const TextField: React.FC<IFieldProps<ITextFieldConfig<any>>> = ({
  field,
  ...restProps
}) => (
  <FieldWrapper field={field}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <input
      type={'text'}
      className={'form-control'}
      {...field.attributes}
      id={`field-${field.id}`}
      name={field.id}
      {...restProps}
    />
  </FieldWrapper>
);

export default TextField;
