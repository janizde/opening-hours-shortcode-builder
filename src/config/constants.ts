import { TFieldType, TShortcodeType } from '../typings';

interface IFieldTypes {
  [key: string]: TFieldType;
}

export const FIELD_TYPES: IFieldTypes = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  CHECKBOX: 'CHECKBOX',
  SET_ID: 'SET_ID',
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
