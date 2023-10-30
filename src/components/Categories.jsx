import React from "react";

export function Categories() {
  const pizzaTypes = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="categories">
      <ul>
        {pizzaTypes.map((item, index) => (
          <li
            key={index}
            onClick={()=>setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
