import IsOpen from './IsOpen';
import Overview from './Overview';
import Holidays from './Holidays';
import IrregularOpenings from './IrregularOpenings';
import { IShortcodeConfig } from '../typings';

interface IShortcodeConfigMap {
  [shortcodeId: string]: IShortcodeConfig<any>;
}

const shortcodeConfigMap: IShortcodeConfigMap = {
  [IsOpen.id]: IsOpen,
  [Overview.id]: Overview,
  [Holidays.id]: Holidays,
  [IrregularOpenings.id]: IrregularOpenings,
};

export default shortcodeConfigMap;
