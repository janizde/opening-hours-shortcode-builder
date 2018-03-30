import { TShortcodeType } from '../typings';

/**
 * Map of all avaulable field types
 */
export const FIELD_TYPES = {
  TEXT: 'TEXT' as 'TEXT',
  SELECT: 'SELECT' as 'SELECT',
  CHECKBOX: 'CHECKBOX' as 'CHECKBOX',
  SET_ID: 'SET_ID' as 'SET_ID',
};

interface IShortcodeTypes {
  [key: string]: TShortcodeType;
}

/**
 * Map of all available shortcode types
 */
export const SHORTCODE_TYPES: IShortcodeTypes = {
  IS_OPEN: 'op-is-open',
  OVERVIEW: 'op-overview',
  HOLIDAYS: 'op-holidays',
  IRREGULAR_OPENINGS: 'op-irregular-openings',
};
