import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row, LeftCol, RightCol } from './../UI';
import CustomPropTypes from './../../prop-types';

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
          <div className={'mt-5'}>
            <strong>Default:</strong> <span>{field.default}</span>
          </div>
        </RightCol>
      </Row>
    );
  }
}
