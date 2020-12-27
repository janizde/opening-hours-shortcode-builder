import * as React from 'react';
import * as copy from 'copy-to-clipboard';

interface IShortcodeDisplayProps {
  shortcode: string;
}

/**
 * Component showing the specified `shortcode` string and
 * offering the ability to copy `shortcode` to the clipboard using `copy-to-clipboard`.
 *
 * When `window` has an opener, i.e., was opened by another page, a Close button is rendered.
 */
export default class ShortcodeDisplay extends React.PureComponent<IShortcodeDisplayProps> {
  render() {
    const { shortcode } = this.props;
    const hasClose = !!window.opener;

    return (
      <div className="form-group">
        <label htmlFor="textarea-display">Shortcode</label>
        <textarea
          readOnly={true}
          value={shortcode}
          className={'form-control font-mono'}
        />
        <button
          className={'btn btn-sm btn-secondary mt-2'}
          onClick={() => copy(shortcode)}
        >
          Copy to clipboard
        </button>
        {hasClose && (
          <button
            className={'btn btn-sm btn-light mt-2 ml-2'}
            onClick={() => window.close()}
          >
            Close
          </button>
        )}
      </div>
    );
  }
}
