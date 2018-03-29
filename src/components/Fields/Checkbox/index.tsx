import * as React from 'react';

import { IFieldProps } from './../../typings';

import FieldWrapper from './../FieldWrapper';

interface ICheckboxFieldProps extends IFieldProps<boolean> {
  children?: React.ReactNode;
}

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
