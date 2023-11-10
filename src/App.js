import React from "react";
import "./scss/app.scss";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";
import { Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedPage, setSelectedPage] = React.useState(1);
  console.log("searchValue", searchValue);
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home selectedPage={selectedPage} searchValue={searchValue}/>} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Pagination setSelectedPage={setSelectedPage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
