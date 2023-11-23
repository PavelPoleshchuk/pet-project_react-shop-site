import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/Skeleton";
import { sortItems } from "../components/Sort";
import { useSelector } from "react-redux";
import { PageAndSearchContext } from "../App";
import axios from 'axios';

export default function Home() {
  const BASE_URL = "https://6540cd8d45bedb25bfc2a522.mockapi.io/items?";
  const { searchValue, selectedPage } = React.useContext(PageAndSearchContext);
  const { categoriesId, sortId } = useSelector(
    (state) => state.sortAndCategory
  );
  // const [categoriesId, setCategoriesId] = React.useState(0);
  // const [sortId, setSortId] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [loading, isLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("categoriesId=", categoriesId);
    console.log("sortId=", sortId);
  }, [categoriesId, sortId]);

  //?category=1&?sortBy=rating&order=asc

  React.useEffect(() => {
    const pizzasPerPage = 4;
    const category = categoriesId ? `&category=${categoriesId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sort = `&sortBy=${sortItems[sortId].apiName}&order=asc`;

    isLoading(true);
    const url = `${BASE_URL}page=${selectedPage}&limit=${pizzasPerPage}${category}${search}${sort}`;
    console.log(url);
    axios.get(url)
    .then((pizzas) => {
      setTimeout(() => {
        setData(pizzas.data);
        isLoading(false);
      }, 500);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((pizzas) => {
    //     setTimeout(() => {
    //       setData(pizzas);
    //       isLoading(false);
    //     }, 500);
    //   });
    // window.scrollTo(0, 0);
  }, [categoriesId, sortId, searchValue, selectedPage]);
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
