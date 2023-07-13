import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface IProps extends PropsWithChildren {
  [x: string]: any;
  className?: any;
  as?: any;
}

function Link({ as, className, children, targetBlank, ...props }: IProps) {
  const LinkTag = as || "a";

  const defaultClasses =
    "text-blue hover:bg-blue-highlight underline outline-none focus:bg-blue-highlight";
  const mergedClasses = classNames(defaultClasses, className);

  const targetProps = targetBlank
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <LinkTag className={mergedClasses} {...targetProps} {...props}>
      {children}
    </LinkTag>
  );
}

export default Link;
