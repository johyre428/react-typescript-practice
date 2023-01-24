import { getLoggedInUser } from "../utils/auth";

export default function UsersTable({ users, onRemove }) {
  const loggedInUser = getLoggedInUser();

  function handleOnRemove(user) {
    const isCurrentUser =
      loggedInUser.branchId === user.branchId &&
      loggedInUser.username === user.username;

    if (isCurrentUser) {
      return;
    }

    onRemove(user);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Branch ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.userName}>
            <td>{index + 1}</td>
            <td>{user.branchId}</td>
            <td>{user.userName}</td>
            <td>{`${user.firstName} ${
              user.middleName ? user.middleName[0] + "." : ""
            } ${user.lastName}`}</td>
            <td>{user.position}</td>
            <td>
              <button
                disabled={
                  loggedInUser.branchId === user.branchId &&
                  loggedInUser.username === user.username
                }
                onClick={() => handleOnRemove(user)}
              >
                REMOVE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
