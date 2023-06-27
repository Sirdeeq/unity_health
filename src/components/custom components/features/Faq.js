import React from "react";

export default function Faq({ title, subtitle, questions, darkmode = false }) {
  const bgColorClassName = darkmode ? "dark:bg-gray-800" : "";
  const textColorClassName = darkmode ? "dark:text-gray-100" : "";
  const summaryFocusClassName = darkmode ? "focus-visible:ri" : "";

  return (
    <div className={bgColorClassName}>
      <section className={`${textColorClassName}`}>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2
            className={`text-2xl font-semibold sm:text-4xl ${textColorClassName}`}
          >
            {title}
          </h2>
          <p className={`mt-4 mb-8 ${textColorClassName} dark:text-gray-400`}>
            {subtitle}
          </p>
          <div className="space-y-4">
            {questions.map(({ id, question, answer }) => (
              <details key={id} className="w-full border rounded-lg">
                <summary
                  className={`px-4 py-6 focus:outline-none ${summaryFocusClassName}`}
                >
                  {question}
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${textColorClassName} dark:text-gray-400`}
                >
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <div className={`mt-8 ${textColorClassName} text-lg`}>
            <p>Have more questions about your health?</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdLgWprhFGxlBQmf-uiAhVYuDpp6eun1RTYK81b9gaBp8fqLA/viewform?vc=0&c=0&w=1&flr=0&pli=1"
              className={`underline ${summaryFocusClassName}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// const faqItems = [
//     {
//       id: 1,
//       question: "How secure is Unity Health for storing sensitive patient data?",
//       answer:
//         "Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est.",
//     },
//     {
//       id: 2,
//       question: "Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?",
//       answer:
//         "Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti.",
//     },
//     {
//       id: 3,
//       question: "Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?",
//       answer:
//         "Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed.",
//     },
//   ];

//   // Usage
//   <Faq title="Frequently Asked Questions" subtitle="Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum." questions={faqItems} />;
