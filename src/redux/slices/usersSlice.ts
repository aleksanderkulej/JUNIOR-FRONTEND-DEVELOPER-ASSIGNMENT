import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/userTypes";

interface UsersState {
  users: User[];
  filteredUsers: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.field] = action.payload.value;
      state.filteredUsers = state.users.filter((user) =>
        String(user[action.payload.field as keyof User])
          .toLowerCase()
          .includes(action.payload.value.toLowerCase())
      );
    },
  },
});

export const { setUsers, setFilter } = usersSlice.actions;
export default usersSlice.reducer;
