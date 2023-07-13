import React from "react";
import Directory from "./Directory";
import DirectoryItem from "./DirectoryItem";

interface IProps {
  directory: any;
  callback?: VoidFunction;
}

function DirectoryList({ directory, callback }: IProps) {
  //@ts-ignore
  const list = directory.map((item) => {
    if (item.type === "folder")
      return <Directory directory={item} key={item.name} callback={callback} />;

    return <DirectoryItem item={item} key={item.name} callback={callback} />;
  });

  return <>{list}</>;
}

export default DirectoryList;
