import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface IProps extends PropsWithChildren {
  className?: any;
}

function Section({ className, children }: IProps) {
  const defaultClasses = "space-y-3 mb-8";
  const mergedClasses = classNames(defaultClasses, className);

  return <div className={mergedClasses}>{children}</div>;
}

export default Section;
