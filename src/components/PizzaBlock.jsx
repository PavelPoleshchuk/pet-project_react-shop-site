import React from "react";

// {
//   "id": 0,
//   "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//   "name": "Пепперони Фреш с перцем",
//   "types": [0, 1],
//   "sizes": [26, 30, 40],
//   "price": 803,
//   "category": 0,
//   "rating": 4
// },

export function PizzaBlock({ imageUrl, name, types, sizes, price }) {
  const [activeThickness, isActiveThickness] = React.useState(0);
  const [activeDiameter, isActiveDiameter] = React.useState(0);
  const thickness = ["тонкое", "традиционное"];
  return (
    <>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={name} />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((item, index) => (
              <li
                key={index}
                onClick={() => isActiveThickness(item)}
                className={activeThickness === item ? "active" : ""}
              >
                {thickness[item]}
              </li>
            ))}
          </ul>
          <ul>
            {/* <li className="active">26 </li> */}
            {sizes.map((item, index) => (
              <li
                key={index}
                onClick={() => isActiveDiameter(item)}
                className={activeDiameter === item ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{`от ${price} ₽`}</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </>
  );
}