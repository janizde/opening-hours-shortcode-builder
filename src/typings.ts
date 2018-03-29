import * as React from 'react';

export interface IPlaceholder {
  key: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IFieldConfig<M extends IShortcodeModel> {
  id: keyof M;
  label: string;
  description?: React.ReactNode;
  type: string;
  default?: any;
  placeholders?: Array<IPlaceholder>;
  options?: Array<IOption>;
  show?: (model: PartialModel<M>) => boolean;
  attributes?: React.DOMAttributes<HTMLElement>;
}

export interface IShortcodeConfig<M extends IShortcodeModel> {
  id: TShortcodeType;
  label: string;
  fields: Array<IFieldConfig<M>>;
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
