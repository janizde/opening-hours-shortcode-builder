import { spec, symbol, valid, explainStr } from 'js.spec';

import { SHORTCODE_TYPES } from '../config/constants';
import { IAppOptions } from '../typings';

/** JS.spec defintition to validate `IAppOptions` at runtime */
const appOptionsSpec = spec.map('App options', {
  [symbol.optional]: {
    shortcode: spec.oneOf(
      'shortcode tag',
      ...Object.keys(SHORTCODE_TYPES).map((key) => SHORTCODE_TYPES[key])
    ),
    sets: spec.map('sets', {}),
  },
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

    if (!valid(appOptionsSpec, options)) {
      console.warn(
        `Specified app options are invalid: ${explainStr(
          appOptionsSpec,
          options
        )}`
      );
      return null;
    }

    return options;
  } catch (e) {
    // options are not properly encoded
    return null;
  }
}
