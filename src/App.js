import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { Items } from "./components/Items";
import { Pagination } from "./components/Pagination";
import { setItems } from "./actions/setItems";
import { filterItems } from "./actions/filterItems";
import "./App.scss";
const filterBy = (items,filterValue) =>  items.filter(item => item.name.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0);
const App = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { items, setItems, filterItems, filterValue } = props;
  useEffect(() => {
    axios.get("https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1").then(({ data }) => {
      setItems(data);
    });
  }, [setItems]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items && items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Введите запрос"
        value={filterValue}
        onChange={(e) => filterItems(e.target.value)}
      />
      <Items items={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items && items.length}
        paginate={paginate}
      />
    </div>
  );
};
const mapStateToProps = ({ items, filter }) => ({
  items: items.repos && filterBy(items.repos.items,filter.filterValue),
  filterValue: filter.filterValue,
});
export default connect(mapStateToProps, { setItems, filterItems })(App);
