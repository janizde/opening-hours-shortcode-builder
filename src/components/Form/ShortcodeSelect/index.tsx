import * as React from 'react';
import PropTypes from 'prop-types';

export default class ShortcodeSelect extends React.PureComponent<any> {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { options, value, onChange } = this.props;

    return (
      <div className={'form-inline'}>
        <div className={'form-group'}>
          <label htmlFor={'select-shortcode'}>Select Shortcode</label>
          &nbsp;&nbsp;
          <select id={'select-shortcode'} className={'form-control'} value={value} onChange={event => onChange(event.target.value)}>
            {options.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
