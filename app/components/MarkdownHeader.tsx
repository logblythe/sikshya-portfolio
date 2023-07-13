import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface IProps extends PropsWithChildren {
  headingLevel: string;
  className: string;
  text: string;
}

function MarkdownHeader({ headingLevel, className, text }: IProps) {
  const Tag = `h${headingLevel}` as any;

  const defaultClasses = "text-purple";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <Tag className={mergedClasses}>{`${"#".repeat(
      Number(headingLevel)
    )} ${text}`}</Tag>
  );
}

export default MarkdownHeader;
