import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { setUsers } from "./actions/setUsers";
import './App.scss'
const App = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const { users, setUsers } = props;
  useEffect(() => {
    setLoading(true);
    axios.get("https://api.github.com/users").then(({ data }) => {
      setUsers(data);
    });
    setLoading(false);
  }, [setUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstsUser = indexOfLastUser - usersPerPage;
  const currentUsers = users && users.slice(indexOfFirstsUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <Users users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users && users.length}
        paginate={paginate}
      />
    </div>
  );
};
const mapStateToProps = ({ users }) => ({
  users: users.items && users.items,
});
export default connect(mapStateToProps, { setUsers })(App);
