import React from "react";
import FeatureSixWithPics from "../../components/custom components/features/FeatureSixWithPIcs";

export default function Features() {
  return (
    <div>
      <FeatureSixWithPics
        darkMode={false}
        title="Features"
        subtitle="These are the features of Unity Health"
        features={[
          {
            title: "Staff Management",
            description:
              " Efficient shift scheduling, performance tracking, and comprehensive training management.",
          },
          {
            title: "Patient Management",
            description:
              " Simplified electronic records, seamless appointment scheduling, and effective patient communication.",
          },
          {
            title: "Reporting and Analytics",
            description:
              " Real-time insights, performance metrics, and customizable dashboards for informed decision-making and organizational growth.",
          },
        ]}
      />
    </div>
  );
}
