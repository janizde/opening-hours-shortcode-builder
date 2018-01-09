import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row, LeftCol, RightCol, FullCol } from './../../UI';
import CustomPropTypes from './../../../prop-types';

import PlaceholderTable from './PlaceholderTable';

export default class TextField extends PureComponent {
  static propTypes = {
    field: CustomPropTypes.fieldConfig,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { field, value, onChange } = this.props;

    return (
      <Row>
        <LeftCol>
          <div className={'form-group'}>
            <label htmlFor={`field-${field.id}`}>{field.label}</label>
            <input type={'text'} className={'form-control'} value={value || ''} onChange={onChange} />
            {field.description && (
              <span className={'form-text text-muted'}>{field.description}</span>
            )}
          </div>
        </LeftCol>
        <RightCol>
          <strong>Default:</strong> <span>{field.default}</span>

          {field.placeholders && (
            <PlaceholderTable placeholders={field.placeholders} />
          )}
        </RightCol>
      </Row>
    );
  }
}
