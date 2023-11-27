import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesId } from "../redux/reducers/sortAndCategorySlice";

export function Categories() {
  const dispatch = useDispatch();
  const categoriesId = useSelector(
    (state) => state.sortAndCategory.categoriesId
  );
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
            onClick={() => {
              dispatch(setCategoriesId(index));
              console.log("index=", index);
            }}
            className={categoriesId === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
