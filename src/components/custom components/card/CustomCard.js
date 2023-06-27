import React from "react";

export default function CustomCard({ imageSrc, title, text, darkMode, href }) {
  const cardClass = `
    w-60 p-2 rounded-md shadow-md bg-white
    ${darkMode ? "bg-gray-900 text-gray-50" : ""}
  `;
  const imageClass = `
    object-cover object-center w-full h-48 rounded-md 
    ${darkMode ? "bg-gray-500" : ""}
  `;
  const titleClass = `
    block text-sm font-large text-center  uppercase 
    ${darkMode ? "text-violet-400" : ""}
  `;

  return (
    <a href={href}>
      <div
        className={`flex flex-col items-center justify-center ${cardClass}`}
        style={{ cursor: "pointer" }}
      >
        <img src={imageSrc} alt="" className={imageClass} />
        <div>
          <span className={titleClass}>
            <h1 className={titleClass}>{title}</h1>
          </span>
        </div>
      </div>
    </a>
  );
}

// function handleClick(imageSrc, title) {
//     console.log(`Clicked on ${title} (${imageSrc})`);
//   }

//   function handleUnclick(imageSrc) {
//     console.log(`Mouse left the card with image source: ${imageSrc}`);
//   }

// <div className="flex flex-wrap">
// {cardsData.map((card, index) => (
//   <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
//     <CustomCard
//       imageSrc={card.imageSrc}
//       title={card.title}
//       text={card.text}
//       darkMode={card.darkMode}
//       onClick={() => handleClick(card.imageSrc, card.title)}
//       onUnclick={() => handleUnclick(card.imageSrc)}
//     />
//   </div>
// ))}
// </div>
