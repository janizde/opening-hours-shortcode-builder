import * as React from 'react';
import PropTypes from 'prop-types';

import copy from 'copy-to-clipboard';

export default class ShortcodeDisplay extends React.PureComponent<any> {
  static propTypes = {
    shortcode: PropTypes.string.isRequired,
  };

  render() {
    const { shortcode } = this.props;

    return (
      <div className="form-group">
        <label htmlFor="textarea-display">Shortcode</label>
        <textarea readOnly value={shortcode} className={'form-control font-mono'} />
        <button className={'btn btn-sm btn-secondary mt-2'} onClick={() => copy(shortcode)}>Copy to clipboard</button>
      </div>
    );
  }
}
