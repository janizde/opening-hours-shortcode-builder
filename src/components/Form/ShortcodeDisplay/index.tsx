import * as React from 'react';
import * as copy from 'copy-to-clipboard';

interface IShortcodeDisplayProps {
  shortcode: string;
}

export default class ShortcodeDisplay extends React.PureComponent<IShortcodeDisplayProps> {
  render() {
    const { shortcode } = this.props;

    return (
      <div className="form-group">
        <label htmlFor="textarea-display">Shortcode</label>
        <textarea readOnly={true} value={shortcode} className={'form-control font-mono'} />
        <button className={'btn btn-sm btn-secondary mt-2'} onClick={() => copy(shortcode)}>
          Copy to clipboard
        </button>
      </div>
    );
  }
}
