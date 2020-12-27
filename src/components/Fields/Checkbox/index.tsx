import * as React from 'react';

import { ICheckboxFieldConfig } from './../../../typings';
import { IFieldProps } from './../../typings';

import FieldWrapper from './../FieldWrapper';

interface ICheckboxFieldProps extends IFieldProps<ICheckboxFieldConfig<any>> {}

/**
 * Controlled checkbox form component
 */
const CheckboxField: React.FC<ICheckboxFieldProps> = ({
  field,
  ...restProps
}) => (
  <FieldWrapper field={field}>
    <div className={'form-check'}>
      <input
        type="checkbox"
        className={'form-check-input'}
        id={`field-${field.id}`}
        name={field.id}
        {...restProps}
      />
      <label htmlFor={`field-${field.id}`} className={'form-check-label'}>
        {field.label}
      </label>
    </div>
  </FieldWrapper>
);

export default CheckboxField;
