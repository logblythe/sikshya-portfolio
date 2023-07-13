"use client";

import { useState, useMemo, useCallback, PropsWithChildren } from "react";
import TabContext from "./TabContext";
import { ITab } from "@/app/interfaces/ITab";

interface IProps extends PropsWithChildren {
  initialTabs: ITab[];
}

function TabProvider({ initialTabs, children }: IProps) {
  const [tabHistory, setTabHistory] = useState(initialTabs);
  const [tabList, setTabList] = useState(initialTabs);

  const addTab = useCallback(
    (tab: ITab) => {
      if (!tabList.find((t) => t.name === tab.name)) {
        setTabList((prev) => [...prev, tab]);
      }

      switchTabs(tab);
    },
    [tabList]
  );

  const removeTab = (tab: ITab) => {
    setTabList((prev) => prev.filter((t) => t.name !== tab.name));
    setTabHistory((prev) => prev.filter((t) => t.name !== tab.name));
  };

  const switchTabs = (tab: ITab) => {
    setTabHistory((prev) => [tab, ...prev.filter((t) => t.name !== tab.name)]);
  };

  const value = useMemo(
    () => ({
      current: tabHistory[0],
      tabList,
      addTab,
      removeTab,
      switchTabs,
    }),
    [tabList, tabHistory, addTab]
  );

  return <TabContext.Provider value={value}>{children} </TabContext.Provider>;
}

export default TabProvider;
