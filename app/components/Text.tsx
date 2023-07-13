import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: any;
  as?: any;
}

function Text({ as, className, children }: IProps) {
  const TextTag = as || "p";

  const defaultClasses = "break-words";
  const mergedClasses = classNames(defaultClasses, className);

  return <TextTag className={mergedClasses}>{children}</TextTag>;
}

export default Text;
