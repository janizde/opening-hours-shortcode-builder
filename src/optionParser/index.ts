import * as Yup from 'yup';

import { IAppOptions, shortcodeTypes } from '../typings';

/** Yup specification to validate `IAppOptions` at runtime */
const appOptionsSpecification = Yup.object({
  shortcode: Yup.string().oneOf(shortcodeTypes),
  sets: Yup.object(),
});

/**
 * Parses the `IAppOptions` containing the presets for the shortcode tag
 * and the predefined set definitions.
 *
 * If the specified data is not valid according to `appOptionsSpec` the explanation
 * will be printed to the console as warning.
 *
 * @returns         The parsed `IAppOptions` object or null if no hash was provided
 *                  or the provided data in the url is invalid
 */
export default function parseOptions(): IAppOptions | null {
  try {
    const hash = window.location.hash.substr(1);
    const decoded = window.atob(hash);
    const options = JSON.parse(decoded);

    appOptionsSpecification.validateSync(options); // Throws when invalid
    return options;
  } catch (e) {
    // options are not properly encoded
    return null;
  }
}
