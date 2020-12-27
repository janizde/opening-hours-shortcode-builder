import IsOpen from './IsOpen';
import Overview from './Overview';
import Holidays from './Holidays';
import IrregularOpenings from './IrregularOpenings';
import Schema from './Schema';

import { IShortcodeConfig, ShortcodeType } from '../typings';

const shortcodeConfigMap: Record<ShortcodeType, IShortcodeConfig<any>> = {
  [ShortcodeType.IsOpen]: IsOpen,
  [ShortcodeType.Overview]: Overview,
  [ShortcodeType.Holidays]: Holidays,
  [ShortcodeType.IrregularOpenings]: IrregularOpenings,
  [ShortcodeType.Schema]: Schema,
};

export default shortcodeConfigMap;
