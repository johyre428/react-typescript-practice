import { useNavigate } from "react-router-dom";
import { LOGGED_IN_USER_KEY } from "../utils/auth";

export default function useAuth() {
  const navigate = useNavigate();

  function loginUser(user) {
    localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
    navigate("/dashboard");
  }

  function logoutUser() {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    navigate("/login");
  }

  return { loginUser, logoutUser };
}
