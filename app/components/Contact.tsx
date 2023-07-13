import React from "react";
import MarkdownHeader from "./MarkdownHeader";
import LineBreak from "./LineBreak";
import Section from "./Section";
import Text from "./Text";
import Link from "./Link";

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader
          headingLevel="1"
          text="Contact"
          className="text-3xl md:text-5xl"
        />
        <LineBreak />
        <Text>
          If you&apos;re interested in reaching out and want to chat, please
          just reach out via any of the links below!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (
          <Link targetBlank href="mailto:sikshyamaharjan123@gmail.com">
            mailto:sikshyamaharjan123@gmail.com
          </Link>
          )
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (
          <Link targetBlank href="https://github.com/logblythe">
            https://github.com/logblythe
          </Link>
          )
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (
          <Link
            targetBlank
            href="https://www.linkedin.com/in/sikshya-maharjan-9a8676143"
          >
            https://www.linkedin.com/in/sikshya-maharjan-9a8676143
          </Link>
          )
        </Text>
      </Section>
    </div>
  );
}

export default Contact;
