import * as React from 'react';

export interface IPlaceholder {
  key: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
}

interface IFieldConfig<
  M extends IShortcodeModel,
  T extends TFieldType,
  > {
  id: keyof M;
  label: string;
  type: T;
  description?: React.ReactNode;
  default?: React.ReactNode;
  show?: (model: PartialModel<M>) => boolean;
  attributes?: {};
}

export interface ITextFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M, 'TEXT'> {

  placeholders?: Array<IPlaceholder>;
}

export interface ISelectFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M, 'SELECT'> {

  options?: Array<IOption>;
}

export interface ICheckboxFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M, 'CHECKBOX'> {
}

export interface ISetIdFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M, 'SET_ID' | 'TEXT' | 'SELECT'> { }

export type TAnyFieldConfig<M extends IShortcodeModel> =
  | ITextFieldConfig<M>
  | ISelectFieldConfig<M>
  | ICheckboxFieldConfig<M>
  | ISetIdFieldConfig<M>;

export interface IShortcodeConfig<M extends IShortcodeModel> {
  id: TShortcodeType;
  label: string;
  fields: Array<TAnyFieldConfig<M>>;
}

export type TFieldType =
  | 'TEXT'
  | 'SELECT'
  | 'CHECKBOX'
  | 'SET_ID';

export type TShortcodeType =
  | 'op-is-open'
  | 'op-overview'
  | 'op-holidays'
  | 'op-irregular-openings';

export interface IShortcodeModel {
  set_id: number | string;
  title: string;
  before_widget: string;
  after_widget: string;
  before_title: string;
  after_title: string;
}

export interface ISetMap {
  [setId: string]: string;
}

export interface IAppOptions {
  shortcode: TShortcodeType;
  sets: ISetMap;
}

export type EmptyModel<M extends IShortcodeModel> = {
  [K in keyof M]: null;
};

export type PartialModel<M extends IShortcodeModel> = {
  [K in keyof M]: M[K] | null;
};
