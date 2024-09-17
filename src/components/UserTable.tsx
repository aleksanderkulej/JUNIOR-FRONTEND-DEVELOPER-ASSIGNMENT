import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setFilter } from "../redux/slices/usersSlice";
import FilterInput from "./FilterInput";

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const filters = useSelector((state: RootState) => state.users.filters);
  const dispatch = useDispatch();

  // Explicitly type `field` to ensure it's one of the valid filter keys
  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  return (
    <div>
      <div>
        <FilterInput
          label="Name"
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <FilterInput
          label="Username"
          value={filters.username}
          onChange={(e) => handleFilterChange("username", e.target.value)}
        />
        <FilterInput
          label="Email"
          value={filters.email}
          onChange={(e) => handleFilterChange("email", e.target.value)}
        />
        <FilterInput
          label="Phone"
          value={filters.phone}
          onChange={(e) => handleFilterChange("phone", e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
