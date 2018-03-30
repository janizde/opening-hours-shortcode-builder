import * as React from 'react';

import { ICheckboxFieldConfig } from './../../../typings';
import { IFieldProps } from './../../typings';

import FieldWrapper from './../FieldWrapper';

interface ICheckboxFieldProps extends IFieldProps<ICheckboxFieldConfig<any>, boolean> {
  children?: React.ReactNode;
}

/**
 * Controlled checkbox form component
 */
export default class CheckboxField extends React.PureComponent<ICheckboxFieldProps> {
  render() {
    const { field, value, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <div className={'form-check'}>
          <input
            type="checkbox"
            className={'form-check-input'}
            id={`field-${field.id}`}
            checked={!!value}
            onChange={event => onChange(event.target.checked)}
          />
          <label htmlFor={`field-${field.id}`} className={'form-check-label'}>
            {field.label}
          </label>
        </div>
      </FieldWrapper>
    );
  }
}
