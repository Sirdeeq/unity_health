import React from "react";
import FeatureSix from "../../components/custom components/features/FeatureSix";
import Features from "./Features";
import Container from "../../components/custom components/defaults/Container";
import Faq from "../../components/custom components/features/Faq";

export default function Services() {
  const features = [
    {
      title: "Donor Management",
      description: [
        " Efficiently monitor donations.",
        " Generate detailed financial reports.",
        "Streamline communication with donors.",
      ],
    },
    {
      title: "Program Management",
      description: [
        " Manage NGO initiatives effectively.",
        " Optimize resource utilization.",
        "Track project milestones.",
      ],
    },
    {
      title: "Volunteer Management",
      description: [
        " Easily register and schedule volunteers",
        " Match volunteers with suitable projects.",
        " Monitor volunteer participation.",
      ],
    },
    {
      title: "Grant Management",
      description: [
        " Simplify grant application process",
        " Allocate funds to approved projects.",
        "Assess project outcomes.",
      ],
    },
    {
      title: "Reporting and Analytics",
      description: [
        "Access up-to-date data.",
        "Measure impact and effectiveness.",
        "Create personalized visualizations.",
      ],
    },
    {
      title: "Collaboration Tools",
      description: [
        "Share files securely",
        "Assign and track tasks.",
        "Facilitate team collaboration.",
      ],
    },
  ];
  const faqQuestions = [
    {
      id: 1,
      question:
        "How secure is Unity Health for storing sensitive patient data?",
      answer:
        "Unity Health prioritizes data security and employs robust measures such as encryption and access controls to ensure the confidentiality and integrity of patient information.",
    },
    {
      id: 2,
      question:
        "Is technical support provided for Unity Health implementation and usage?",
      answer:
        "Yes, Unity Health offers comprehensive technical support to assist with implementation, training, and ongoing usage. Our support team is available to address any questions or issues that may arise.",
    },
    {
      id: 2,
      question:
        "Can Unity Health be customized to meet the specific needs of our organization?",
      answer:
        "Yes, Unity Health is designed to be flexible and customizable. It can be tailored to accommodate the unique requirements and workflows of your NGO or hospital..",
    },
  ];
  return (
    <div className="">
      <Container>
        <Features />
        <hr />
        <FeatureSix
          features={features}
          title={"Services"}
          subtitle={
            "Comprehensive software for NGO and hospital management, streamlining processes and enhancing efficiency."
          }
          darkMode={false}
        />
        <hr />
        <Faq title="FAQ" subtitle="Frequently Asked Questions" questions={faqQuestions} darkmode={false} />
      </Container>
    </div>
  );
}
