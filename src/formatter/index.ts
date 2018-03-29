import { IShortcodeConfig, IShortcodeModel, PartialModel } from '../typings';

/**
 * Creates a shortcode string from the specified `shortcode` and `model`
 * @param       shortcode       The name of the shortcode
 * @param       model           The model from which the arguments should be created
 * @returns                     A WordPress shortcode string 
 */
export default function formatShortcode<M extends IShortcodeModel, C extends IShortcodeConfig<M>>
  (shortcode: C['id'], model: PartialModel<M>): string {

  const formatValue = (value: string | boolean | number): string => {
    return typeof value === 'boolean' ? JSON.stringify(value) : `${value}`;
  };

  const argsString = Object.keys(model).map(modelKey => [modelKey, model[modelKey]])
    .filter(([key, value]) => value !== null && `${value}`.length > 0)
    .map(([key, value]) => `${key}="${formatValue(value)}"`)
    .join(' ');

  return argsString.length > 0 ? `[${shortcode} ${argsString}]` : `[${shortcode}]`;
}
