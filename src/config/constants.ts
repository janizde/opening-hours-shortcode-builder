import { TShortcodeType } from '../typings';

export const FIELD_TYPES = {
  TEXT: 'TEXT' as 'TEXT',
  SELECT: 'SELECT' as 'SELECT',
  CHECKBOX: 'CHECKBOX' as 'CHECKBOX',
  SET_ID: 'SET_ID' as 'SET_ID',
};

interface IShortcodeTypes {
  [key: string]: TShortcodeType;
}

export const SHORTCODE_TYPES: IShortcodeTypes = {
  IS_OPEN: 'op-is-open',
  OVERVIEW: 'op-overview',
  HOLIDAYS: 'op-holidays',
  IRREGULAR_OPENINGS: 'op-irregular-openings',
};
