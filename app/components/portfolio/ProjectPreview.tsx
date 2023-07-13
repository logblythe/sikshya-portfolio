import Image, { StaticImageData } from "next/image";
import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  src: string | StaticImageData;
  alt: string;
}

function ProjectPreview({ src, alt, ...props }: IProps) {
  return (
    <Image
      className="max-w-[450px] w-full h-auto max-h-[50%] rounded shadow-project"
      src={src}
      alt={alt}
      {...props}
    />
  );
}

export default ProjectPreview;
