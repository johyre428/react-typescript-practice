import UsersTable from "../../components/UsersTable";
import UserForm from "../../components/UserForm";
import "./dashboard.css";
import { useState } from "react";
import { fetchUsers, getLoggedInUser, updateUsers } from "../../utils/auth";
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const USER = getLoggedInUser();
  const { logoutUser } = useAuth();
  const [users, setUsers] = useState(fetchUsers());

  function handleAddUser(userData) {
    setUsers((prevUsers) => {
      const NEW_USERS = [...prevUsers, userData];
      updateUsers(NEW_USERS);
      return NEW_USERS;
    });
  }

  function handleRemoveUser(userData) {
    setUsers((prevUsers) => {
      const NEW_USERS = prevUsers.filter(
        (user) =>
          user.branchId !== userData.branchId &&
          user.userName !== userData.userName
      );
      updateUsers(NEW_USERS);
      return NEW_USERS;
    });
  }

  return (
    <>
      <section className="dashboard-header">
        <h1>{USER.userName}</h1>
        <button onClick={logoutUser}>Logout</button>
      </section>

      <section className="dashboard-body">
        <UserForm onAdd={handleAddUser} />
        <UsersTable users={users} onRemove={handleRemoveUser} />
      </section>
    </>
  );
}
