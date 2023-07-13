import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  [x: string]: any;
  className?: any;
  as: any;
}

function MarkdownButton({ as, children, className, ...props }: IProps) {
  const ButtonTag = as || "button";

  const defaultClasses =
    "font-bold text-green hover:bg-green-highlight outline-none focus:bg-green-highlight";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <ButtonTag className={mergedClasses} {...props}>
      {children}
    </ButtonTag>
  );
}

export default MarkdownButton;
