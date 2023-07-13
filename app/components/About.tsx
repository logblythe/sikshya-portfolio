import React from "react";
import MarkdownHeader from "./MarkdownHeader";
import LineBreak from "./LineBreak";
import Section from "./Section";
import Text from "./Text";
import MarkdownButton from "./MarkdownButton";
import Comment from "./Comment";
import { portfolio, contact } from "../utils/directory";
import TabLink from "./TabLink";

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader
          headingLevel="1"
          text="About"
          className="text-3xl md:text-5xl"
        />
        <LineBreak />
        <Text>
          Hi! My name is Sikshya Maharjan. I am a software engineer from
          Kathmandu, Nepal.
        </Text>
        <Text>
          I began coding professionally after completing my graduation in 2017.
          I have been learning and building every opportunity I get. For some
          examples of recent work, see{" "}
          <TabLink className="font-bold text-yellow" tab={portfolio}>
            Portfolio.ts
          </TabLink>
          .
        </Text>
        <Text>
          I am looking for positions as a frontend or full stack software
          engineer(frontend heavy). I am incredibly passionate about the work
          that I do and would love to chat about how I might be able to help the
          work that you do!
        </Text>
        <Text>
          For information on how to reach out, see{" "}
          <TabLink className="font-bold text-yellow" tab={contact}>
            Contact.md
          </TabLink>
          .
        </Text>
      </Section>

      <Section>
        <MarkdownButton
          as="a"
          href="https://www.canva.com/design/DAFog54z4Hg/JrREq6rIZne5gq2p_BFheQ/view"
          target="_blank"
          rel="noreferrer"
          download
        >
          [View Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader
          headingLevel="2"
          text="Technologies"
          className="text-xl md:text-3xl"
        />
        <LineBreak />
        <Comment>
          These are the languages I am the most comfortable with. However, I am
          always looking forward to learn new skill expand my skill-set!
        </Comment>
        <Text>
          <span className="font-bold text-pink">Languages and Frameworks:</span>{" "}
          TypeScript | React | NextJS | Flutter | Springboot | Java | Kotlin |
          SQL | MongoDB
        </Text>
        <Text>
          <span className="font-bold text-pink">Miscellaneous:</span> Git |
          Object-Oriented Programming & Design| Test-Driven Development| Full
          Stack Web Development| REST APIs
        </Text>
      </Section>
    </div>
  );
}

export default About;
