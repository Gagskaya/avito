import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { setUsers } from "./actions/setUsers";
import { filterUsers } from "./actions/filterUsers";
import "./App.scss";
const filterBy = (users,filterValue) => users && users.filter(user => user.login.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0);
const App = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const { users, setUsers, filterUsers, filterValue } = props;
  useEffect(() => {
    axios.get("https://api.github.com/users").then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstsUser = indexOfLastUser - usersPerPage;
  const currentUsers = users && users.slice(indexOfFirstsUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Введите запрос"
        value={filterValue}
        onChange={(e) => filterUsers(e.target.value)}
      />
      <Users users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users && users.length}
        paginate={paginate}
      />
    </div>
  );
};
const mapStateToProps = ({ users, filter }) => ({
  users: users.items && filterBy(users.items,filter.filterValue),
  filterValue: filter.filterValue,
});
export default connect(mapStateToProps, { setUsers, filterUsers })(App);
