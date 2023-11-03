import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/Skeleton";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [loading, isLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6540cd8d45bedb25bfc2a522.mockapi.io/items")
      .then((res) => res.json())
      .then((pizzas) => {
        setTimeout(() => {
          setData(pizzas);
          isLoading(false);
        }, 1000);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading && [...new Array(10)].map((_, i) => <Skeleton key={i} />)}
        {!loading && data.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
}
