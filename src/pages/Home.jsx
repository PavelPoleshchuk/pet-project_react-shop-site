import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/Skeleton";
import { sortItems } from "../components/Sort";
import { useSelector } from "react-redux";
import { PageAndSearchContext } from "../App";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllFilters } from "../redux/reducers/sortAndCategorySlice";

export default function Home() {
  const { searchValue } = React.useContext(PageAndSearchContext);
  const { categoriesId, sortId, selectedPage } = useSelector(
    (state) => state.sortAndCategory
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = React.useState([]);
  const [loading, isLoading] = React.useState(true);

  //?category=1&?sortBy=rating&order=asc
  //?sortId=rating&categoriesId=0&selectedPage=1
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log("window.location.search=", window.location.search);
      console.log("params=", params);

      const indexSortedItem = () =>
        sortItems.findIndex((item) => item.apiName === params.sortId);

      const payloadParams = {
        ...params,
        sortId: indexSortedItem(),
      };
      console.log("payloadParams=", payloadParams);

      dispatch(setAllFilters(payloadParams));
    }
  }, [dispatch]);

  React.useEffect(() => {
    console.log("categoriesId=", categoriesId);
    console.log("sortId=", sortId);
    console.log("selectedPage=", selectedPage);
  }, [categoriesId, selectedPage, sortId]);


  React.useEffect(() => {
    isLoading(true);
    const pizzasPerPage = 4;
    const category = categoriesId ? `&category=${categoriesId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sort = `&sortBy=${sortItems[sortId].apiName}&order=asc`;
    const BASE_URL = "https://6540cd8d45bedb25bfc2a522.mockapi.io/items?";
    const url = `${BASE_URL}page=${selectedPage}&limit=${pizzasPerPage}${category}${search}${sort}`;
    console.log("Fetch_url=", url);
    
    axios.get(url).then((pizzas) => {
      setTimeout(() => {
        setData(pizzas.data);
        isLoading(false);
      }, 500);
    });
    // window.scrollTo(0, 0);
  }, [categoriesId, sortId, searchValue, selectedPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortId: sortItems[sortId].apiName,
      categoriesId: categoriesId,
      selectedPage: selectedPage,
    });
    navigate(`?${queryString}`);
  }, [categoriesId, navigate, selectedPage, sortId]);

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
