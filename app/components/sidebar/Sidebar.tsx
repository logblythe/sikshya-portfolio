import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  open: boolean;
}
function Sidebar({ open, children }: IProps) {
  return (
    <div
      className={`bg-dark-600 group select-none sticky top-0 min-h-screen ${
        open ? "min-w-[300px]" : "min-w-[50px]"
      }`}
    >
      <div className={`${!open && "hidden"}`}>{children}</div>
    </div>
  );
}

export default Sidebar;
