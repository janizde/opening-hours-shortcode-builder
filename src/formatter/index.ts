export default function formatShortcode(shortcode, model) {
  const formatValue = value => {
    return typeof value === 'boolean' ? JSON.stringify(value) : value;
  };

  const argsString = Object.entries(model)
    .filter(([key, value]) => value !== null && `${value}`.length > 0)
    .map(([key, value]) => `${key}="${formatValue(value)}"`)
    .join(' ');

  return argsString.length > 0 ? `[${shortcode} ${argsString}]` : `[${shortcode}]`;
}
