import React from "react";
import FileIcon from "./FileIcon";

interface IProps {
  name: string;
  extension: string;
}

function File({ name, extension }: IProps) {
  return (
    <div className="flex align-center text-base">
      <FileIcon fileType={extension} />
      {name}.{extension}
    </div>
  );
}

export default File;
