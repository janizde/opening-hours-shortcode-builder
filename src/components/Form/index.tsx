import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';
import parseOptions from './../../optionParser';

import {
  IShortcodeConfig,
  IShortcodeModel,
  ShortcodeType,
  TAnyFieldConfig,
  FieldType,
} from './../../typings';

import ShortcodeSelect from './ShortcodeSelect';
import ShortcodeDisplay from './ShortcodeDisplay';
import Text from './../Fields/Text';
import Checkbox from './../Fields/Checkbox';
import Select from './../Fields/Select';
import SetId from './../Fields/SetId';
import { AnySchema } from 'yup';

/**
 * Creates an empty shortcode model from the specified shortcode config
 * @param     config    The configuration of the shortcode for which to create the shortcode model
 * @returns             Empty model containing all available shortcode options set to `null`
 */
const createEmptyModel = <
  M extends IShortcodeModel,
  C extends IShortcodeConfig<M>
>(
  config: C
): M => {
  const model = {} as M;
  config.fields.forEach((field) => {
    // Special treatment for `set_id`: If a sets record is given initialize with
    // the first one
    if (field.id === 'set_id' && options?.sets) {
      const keys = Object.keys(options.sets);

      if (keys.length > 0) {
        model[field.id] = keys[0];
        return;
      }
    }

    model[field.id] = '';
  });

  return model;
};

/** The options passed in the hash portion of the url */
const options = parseOptions();

/**
 * Base component of the shortcode form holding the whole application state
 */
const FormContainer: React.FC = () => {
  const [shortcode, setShortcode] = React.useState(
    options && options.shortcode ? options.shortcode : ShortcodeType.Overview
  );

  /**
   * Handles changes to the currently selected shortcode tag.
   * Updates `shortcode` in state according to `newType` and creates a new empty
   * model for the `model` state field based on `newType`.
   *
   * @param     newType     The new shortcode type
   */
  const handleChangeShortcodeType = (nextShortcode: ShortcodeType) => {
    setShortcode(nextShortcode);
  };

  return (
    <div className={'card mt-5 mb-5'}>
      <div className={'card-header'}>
        <ShortcodeSelect
          options={Object.keys(ShortcodeConfigs)
            .map((shortcodeKey) => ShortcodeConfigs[shortcodeKey])
            .map((config) => ({
              id: config.id,
              label: config.label,
            }))}
          value={shortcode}
          onChange={handleChangeShortcodeType}
        />
      </div>

      <Form
        shortcode={shortcode}
        /* Explicitly setting a key to force a re-mount when the shortcode type changes */
        key={shortcode}
      />
    </div>
  );
};

export default FormContainer;

const makeValidationSchema = (shortcodeConfig: IShortcodeConfig<any>) => {
  const modelSchema: Record<string, AnySchema> = {};
  shortcodeConfig.fields.forEach((field) => {
    if (field.schema) {
      modelSchema[field.id] = field.schema;
    }
  });

  return Yup.object(modelSchema);
};

const Form: React.FC<{ shortcode: ShortcodeType }> = ({ shortcode }) => {
  const shortcodeConfig = ShortcodeConfigs[shortcode];
  const validationSchema = makeValidationSchema(shortcodeConfig);

  const {
    values,
    handleSubmit,
    handleReset,
    getFieldProps: getFormikFieldProps,
    isValid,
    errors,
    touched,
  } = useFormik({
    initialValues: createEmptyModel(ShortcodeConfigs[shortcode]),
    onSubmit: () => undefined,
    validationSchema,
    validateOnMount: true,
  });

  const getFieldProps = (fieldId: string) => ({
    ...getFormikFieldProps(fieldId),
    error: (touched[fieldId] && errors[fieldId]) ?? undefined,
  });

  return (
    <>
      <div className={'card-body'}>
        <ShortcodeDisplay
          shortcode={formatShortcode(shortcodeConfig.id, values)}
          isValid={isValid}
          onValidate={() => handleSubmit()}
        />
      </div>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <ul className="list-group list-group-flush">
          {shortcodeConfig.fields
            .filter((field) => !field.show || field.show(values))
            .map((field) => (
              <li className={'list-group-item'} key={field.id}>
                <Field config={field} {...getFieldProps(field.id)} />
              </li>
            ))}
        </ul>
      </form>
    </>
  );
};

interface IFieldProps<M extends IShortcodeModel> {
  config: TAnyFieldConfig<M>;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
}

/**
 * Renders a form field according to its `type` and populates it with
 * the current model value for that field
 */
function Field<M extends IShortcodeModel>({
  config,
  ...restProps
}: IFieldProps<M>) {
  switch (config.type) {
    case FieldType.Text:
      return <Text field={config} {...restProps} />;

    case FieldType.Checkbox:
      return <Checkbox field={config} {...restProps} />;

    case FieldType.Select:
      return (
        <Select field={config} options={config.options || []} {...restProps} />
      );

    case FieldType.SetId:
      return (
        <SetId field={config} sets={options && options.sets} {...restProps} />
      );

    default:
      return null;
  }
}
