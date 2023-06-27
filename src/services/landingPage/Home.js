import React from "react";
import Hero from "../../components/custom components/hero/Hero";
import Container from "../../components/custom components/defaults/Container";

export default function Home() {
  return (
    <div className="">
      <Container>
        <Hero
          heading="Unity Health"
          description="Unity Health is a powerful software solution designed for NGO and hospital management. It streamlines operations, enhances efficiency, and improves overall organizational effectiveness through comprehensive features and functionalities."
          buttons={[
            { text: "Get Started", href: "#", dark: true },
            {
              text: "Play Video",
              href: "https://www.youtube.com/watch?v=P2LnmFkqJzo&feature=youtu.be",
              dark: false,
            },
          ]}
          image={{
            src: "https://source.unsplash.com/random/360x480",
            alt: "demo",
            height: "object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128",
          }}
          darkMode={false}
        />
      </Container>
    </div>
  );
}
