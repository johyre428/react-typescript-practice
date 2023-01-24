import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import { fetchUser } from "../utils/auth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser } = useAuth();

  function onSubmit(inputData): void {
    const USER = fetchUser(inputData);
    const IS_VALID = validateInputs(USER, inputData);

    if (IS_VALID) {
      setErrorMessage("");
      loginUser(USER);
    }

    function validateInputs(user, data): boolean {
      if (!user) {
        setErrorMessage("ERROR: Branch ID is incorrect");
        return false;
      }

      if (user.userName !== data.userName) {
        setErrorMessage("ERROR: Username is incorrect");
        return false;
      }

      if (user.password !== data.password) {
        setErrorMessage("ERROR: Password is incorrect");
        return false;
      }

      return true;
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.branchId}
          placeholder="Branch ID"
          type="number"
          register={register("branchId", { required: "Branch Id is required" })}
        />
        <Input
          error={errors.userName}
          placeholder="Username"
          register={register("userName", { required: "Username is required" })}
        />
        <Input
          error={errors.password}
          placeholder="Password"
          type="password"
          register={register("password", { required: "Password is required" })}
        />
        <button>Login</button>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  );
}
