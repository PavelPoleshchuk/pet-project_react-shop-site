import React from "react";

export function Categories({categoriesId, setCategoriesId}) {
  const pizzaTypes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  
  return (
    <div className="categories">
      <ul>
        {pizzaTypes.map((item, index) => (
          <li
            key={index}
            onClick={()=>setCategoriesId(index)}
            className={categoriesId === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
