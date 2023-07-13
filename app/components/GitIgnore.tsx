import React from "react";
import Image from "next/image";
import gitignoreMeme from "../assets/images/gitignore/gitignore-1.jpeg";

function GitIgnore() {
  return (
    <Image src={gitignoreMeme} className="rounded w-45" alt="gitignore meme" />
  );
}

export default GitIgnore;
