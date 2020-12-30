import * as React from 'react';
import * as copy from 'copy-to-clipboard';
import classBound from 'class-bound-components';

const SDButton = classBound.button('btn btn-sm mt-2', {
  isDisabled: 'disabled',
  isCopyShortcode: 'btn-primary',
  isClose: 'btn-light ml-2',
});

/**
 * Component showing the specified `shortcode` string and
 * offering the ability to copy `shortcode` to the clipboard using `copy-to-clipboard`.
 *
 * When `window` has an opener, i.e., was opened by another page, a Close button is rendered.
 */
const ShortcodeDisplay: React.FC<{
  shortcode: string;
  isValid: boolean;
  onValidate: () => void;
}> = ({ shortcode, isValid, onValidate }) => {
  const hasClose = !!window.opener;

  return (
    <div
      className="form-group"
      onClick={() => {
        if (!isValid) {
          onValidate();
        }
      }}
    >
      <label htmlFor="textarea-display">Shortcode</label>
      <textarea
        readOnly={true}
        value={shortcode}
        className={'form-control font-mono shortcode-display-textarea'}
        disabled={!isValid}
      />
      <SDButton
        type="button"
        onClick={() => {
          if (isValid) {
            copy(shortcode);
          }
        }}
        isCopyShortcode={true}
        isDisabled={!isValid}
      >
        Copy to clipboard
      </SDButton>
      {hasClose && (
        <SDButton type="button" onClick={() => window.close()} isClose={true}>
          Close
        </SDButton>
      )}
    </div>
  );
};

export default ShortcodeDisplay;
