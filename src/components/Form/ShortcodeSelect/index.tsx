import * as React from 'react';

import { ShortcodeType } from './../../../typings';

interface IShortcodeOption {
  id: ShortcodeType;
  label: string;
}

interface IShortcodeSelectProps {
  options: Array<IShortcodeOption>;
  value: ShortcodeType;
  onChange: (shortcodeType: ShortcodeType) => void;
}

/**
 * Uncontrolled form component to select one of the available shortcode types
 */
const ShortcodeSelect: React.FC<IShortcodeSelectProps> = ({
  options,
  value,
  onChange,
}) => (
  <div className={'form-inline'}>
    <div className={'form-group'}>
      <label htmlFor={'select-shortcode'}>Select Shortcode</label>
      &nbsp;&nbsp;
      <select
        id={'select-shortcode'}
        className={'form-control'}
        value={value}
        onChange={(event) => onChange(event.target.value as ShortcodeType)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default ShortcodeSelect;
