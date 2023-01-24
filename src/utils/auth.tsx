import { users } from "../data/users_data";

export const LOGGED_IN_USER_KEY = "loggedInUser";
export const USERS_KEY = "users";

export function getLoggedInUser() {
  const RAW_USER = localStorage.getItem(LOGGED_IN_USER_KEY);
  const USER = RAW_USER ? JSON.parse(RAW_USER) : null;
  return USER;
}

export function fetchUsers() {
  const RAW_USERS = localStorage.getItem(USERS_KEY);
  const USERS = RAW_USERS ? (JSON.parse(RAW_USERS) as typeof users) : users;
  return USERS;
}

export function fetchUser(data) {
  const USERS = fetchUsers();
  return USERS.find((user) => +user.branchId === +data.branchId);
}

export function updateUsers(user) {
  localStorage.setItem(USERS_KEY, JSON.stringify(user));
}
