import React, { PropsWithChildren } from "react";
import useTabContext from "../hooks/useTabContext";
import { ITab } from "../interfaces/ITab";

interface IProps extends PropsWithChildren {
  tab: ITab;
  className?: any;
}

function TabLink({ tab, className, children }: IProps) {
  const tabs = useTabContext();

  const handleClick = () => {
    tabs.addTab({
      name: tab.name,
      extension: tab.extension,
      component: tab.component,
    });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default TabLink;
