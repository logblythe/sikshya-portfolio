import { ITab } from "./ITab";

export interface ITabContext {
  current: ITab;
  tabList: ITab[];
  addTab: (tab: ITab) => void;
  removeTab: (tab: ITab) => void;
  switchTabs: (tab: ITab) => void;
}
