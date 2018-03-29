import * as React from 'react';

import { TShortcodeType } from './../../../typings';

interface IShortcodeOption {
  id: TShortcodeType;
  label: string;
}

interface IShortcodeSelectProps {
  options: Array<IShortcodeOption>;
  value: TShortcodeType;
  onChange: (shortcodeType: TShortcodeType) => void;
}

export default class ShortcodeSelect extends React.PureComponent<IShortcodeSelectProps> {
  render() {
    const { options, value, onChange } = this.props;

    return (
      <div className={'form-inline'}>
        <div className={'form-group'}>
          <label htmlFor={'select-shortcode'}>Select Shortcode</label>
          &nbsp;&nbsp;
          <select
            id={'select-shortcode'}
            className={'form-control'}
            value={value}
            onChange={event => onChange(event.target.value as TShortcodeType)}
          >
            {options.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
