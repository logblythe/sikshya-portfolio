import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import Text from "./Text";

interface IProps extends PropsWithChildren {
  className?: any;
}

function Comment({ className, children, ...props }: IProps) {
  const mergedClasses = classNames("text-comment", className);

  return (
    <Text className={mergedClasses} {...props}>
      {children}
    </Text>
  );
}

export default Comment;
