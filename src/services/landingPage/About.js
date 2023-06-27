import React from "react";
import HeroTextMiddleImageBottom from "../../components/custom components/hero/HeroTextMiddleImageBottom";
import Container from "../../components/custom components/defaults/Container";

export default function About() {
  return (
    <div>
      <Container>
        <HeroTextMiddleImageBottom
          heading="About Us"
          description="Leading healthcare organization providing exceptional medical services, personalized care, and advancing research and education for healthier communities."
          imageAlt="Demo"
          imageUrl="https://source.unsplash.com/random/360x480"
        />
      </Container>
    </div>
  );
}
