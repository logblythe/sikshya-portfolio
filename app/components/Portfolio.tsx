import React from "react";
import MarkdownHeader from "./MarkdownHeader";
import LineBreak from "./LineBreak";
import Text from "./Text";
import Section from "./Section";
import Link from "./Link";
import Project from "./portfolio/Project";
import ProjectText from "./portfolio/ProjectText";
import ProjectPreview from "./portfolio/ProjectPreview";
import invesdditPrev from "../assets/images/portfolio/invesddit-1.png";
import taasskkrrPrev from "../assets/images/portfolio/taasskkrr-1.png";
import inventoryPrev from "../assets/images/portfolio/inventory-tracker-1.png";
import chessPrev from "../assets/images/portfolio/chess-1.png";

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader
          headingLevel="1"
          text="Personal Projects"
          className="text-3xl md:text-5xl"
        />
        <LineBreak />
        <Text>
          Will be posting some recent and larger projects that I have worked on
          soon.
        </Text>
        <Text>
          For more detail on everything that I have done, as well as what I am
          currently working on, check out my GitHub at{" "}
          <Link targetBlank href="https://github.com/logblythe">
            https://github.com/logblythe
          </Link>
        </Text>
      </Section>
    </div>
  );
}

export default Portfolio;
