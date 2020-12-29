import * as React from 'react';
import * as copy from 'copy-to-clipboard';

/**
 * Component showing the specified `shortcode` string and
 * offering the ability to copy `shortcode` to the clipboard using `copy-to-clipboard`.
 *
 * When `window` has an opener, i.e., was opened by another page, a Close button is rendered.
 */
const ShortcodeDisplay: React.FC<{ shortcode: string; isValid: boolean }> = ({
  shortcode,
  isValid,
}) => {
  const hasClose = !!window.opener;

  return (
    <div className="form-group">
      <label htmlFor="textarea-display">Shortcode</label>
      <textarea
        readOnly={true}
        value={shortcode}
        className={'form-control font-mono shortcode-display-textarea'}
        disabled={!isValid}
      />
      <button
        type="button"
        className={'btn btn-sm btn-secondary mt-2'}
        onClick={() => copy(shortcode)}
        disabled={!isValid}
      >
        Copy to clipboard
      </button>
      {hasClose && (
        <button
          type="button"
          className={'btn btn-sm btn-light mt-2 ml-2'}
          onClick={() => window.close()}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default ShortcodeDisplay;
