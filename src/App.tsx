import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./utils/api";
import { setUsers } from "./redux/slices/usersSlice";
import UserTable from "./components/UserTable";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the users and update Redux store
    const getUsers = async () => {
      const users = await fetchUsers();
      dispatch(setUsers(users));
    };
    getUsers();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserTable />
    </div>
  );
};

export default App;
