import formatShortcode from './index';
import { ISchemaModel } from '../config/Schema';

describe('format shortcode', () => {
  it('escapes double quotes in text inputs', () => {
    const model: ISchemaModel = {
      set_id: 'foo',
      schema_attr_name: 'This is "my bar" bar',
    };

    const result = formatShortcode('op-schema', model);

    expect(result).toBe('[op-schema set_id="foo" schema_attr_name="This is \\"my bar\\" bar"]');
  });
});
