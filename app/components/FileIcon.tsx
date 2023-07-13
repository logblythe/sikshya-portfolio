import React from "react";
import { fileIcons } from "../assets/images/file_types/fileIcons";
import Image from "next/image";

function FileIcon({ fileType = "defaultIcon" }) {
  //@ts-ignore
  return <Image src={fileIcons[fileType]} className="w-6 h-6 mr-2" alt="" />;
}

export default FileIcon;
