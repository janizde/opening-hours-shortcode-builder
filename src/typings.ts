import * as React from 'react';
import { AnySchema } from 'yup';

/**
 * Represents a string format placeholder for textual shortcode
 * attribute values
 */
export interface IPlaceholder {
  /** The placeholder for the PHP date/time format */
  key: string;
  /** Textual  */
  label: string;
}

/**
 * Represents an option for a select input field
 */
export interface IOption {
  value: string;
  label: string;
}

/**
 * Base interface for an options field.
 * When you want to refer to a value as "one of the available field types" use the type `TAnyFieldConfig` instead.
 */
interface IFieldConfig<M extends IShortcodeModel> {
  /** The field's id, corresponds to shortcode attribute name */
  id: string;
  /** The label to show with the input */
  label: React.ReactNode;
  /** The description to show with the input */
  description?: React.ReactNode;
  /** Readable representation of the default value */
  default?: React.ReactNode;
  /** Function determining whether the field should be shown based on the current `IShortcodeModel` */
  show?: (model: PartialModel<M>) => boolean;
  /** Arbitrary HTML attributes to add to the input element */
  attributes?: {};
  /** Validation Schema for field validation */
  schema?: AnySchema;
}

/**
 * Interface for a text field
 */
export interface ITextFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M> {
  type: FieldType.Text;
  /** Definition of available string format placeholders */
  placeholders?: Array<IPlaceholder>;
}

/**
 * Interface for a select field
 */
export interface ISelectFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M> {
  type: FieldType.Select;
  /** Available options for the select menu */
  options?: Array<IOption>;
}

/**
 * Interface for a checkbox field
 */
export interface ICheckboxFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M> {
  type: FieldType.Checkbox;
}

/**
 * Interface for a set id field
 */
export interface ISetIdFieldConfig<M extends IShortcodeModel>
  extends IFieldConfig<M> {
  type: FieldType.SetId;
}

/**
 * Union of all available implementations of `IFieldConfig`
 * Use this type instead of `IFieldConfig<M>` when you want to refer to any available
 * field implementation.
 */
export type TAnyFieldConfig<M extends IShortcodeModel> =
  | ITextFieldConfig<M>
  | ISelectFieldConfig<M>
  | ICheckboxFieldConfig<M>
  | ISetIdFieldConfig<M>;

/**
 * Represents the configuration object of a whole shortcode
 */
export interface IShortcodeConfig<M extends IShortcodeModel> {
  /** The shortcode tag */
  id: ShortcodeType;
  /** The readable name to show in the `ShortcodeSelect` */
  label: string;
  /** Field configurations of all available shortcode attributes */
  fields: Array<TAnyFieldConfig<M>>;
}

export enum FieldType {
  Text = 'TEXT',
  Select = 'SELECT',
  Checkbox = 'CHECKBOX',
  SetId = 'SET_ID',
}

export enum ShortcodeType {
  IsOpen = 'op-is-open',
  Overview = 'op-overview',
  IrregularOpenings = 'op-irregular-openings',
  Holidays = 'op-holidays',
  Schema = 'op-schema',
}

export const shortcodeTypes: ShortcodeType[] = [
  ShortcodeType.IsOpen,
  ShortcodeType.Overview,
  ShortcodeType.IrregularOpenings,
  ShortcodeType.Holidays,
  ShortcodeType.Schema,
];

/**
 * Base interface for a shortcode model. Contains the `set_id` which is
 * required for all shortcodes.
 */
export interface IShortcodeModel {
  set_id: number | string;
}

/**
 * Base interface for a model of a shortcode that has a visual representation.
 * Contains all common shortcode attributes as documented in
 * @link{https://github.com/janizde/WP-Opening-Hours#common-attributes}
 */
export interface IVisualShortcodeModel extends IShortcodeModel {
  title: string;
  before_widget: string;
  after_widget: string;
  before_title: string;
  after_title: string;
}

/** Index signature for a set mapping */
export interface ISetMap {
  [setId: string]: string;
}

/**
 * Interface describing the app options that can be sent
 * to the as base64 encoded JSON string in the hash portion of the url
 */
export interface IAppOptions {
  shortcode: ShortcodeType;
  sets: ISetMap;
}

/** Model object having all available shortcode attributes set to an empty string */
export type EmptyModel<M extends IShortcodeModel> = { [K in keyof M]: '' };

/** Model object having all available shortcode attributes set to a value or `null` */
export type PartialModel<M extends IShortcodeModel> = {
  [K in keyof M]: M[K] | null;
};
