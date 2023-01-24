import { useForm } from "react-hook-form";
import Input from "./Input";

const STRONG_PASSWORD = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export default function UserForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  function onSubmit(data): void {
    onAdd(data);
    reset();
  }

  return (
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
        error={errors.firstName}
        placeholder="First Name"
        register={register("firstName", { required: "First Name is required" })}
      />

      <Input
        error={errors.middleName}
        placeholder="Middle Name"
        register={register("middleName", {
          required: "Middle Name is required"
        })}
      />

      <Input
        error={errors.lastName}
        placeholder="Last Name"
        register={register("lastName", { required: "Last Name is required" })}
      />

      <Input
        error={errors.position}
        placeholder="Position"
        register={register("position", { required: "Position is required" })}
      />

      <Input
        error={errors.password}
        placeholder="Password"
        type="password"
        register={register("password", {
          required: "Password is required",
          pattern: {
            value: STRONG_PASSWORD,
            message:
              "Password must be min 8 letters with atleast 1 uppercase letter and special charater"
          }
        })}
      />

      <div className="button-container">
        <button type="button" onClick={reset}>
          RESET
        </button>
        <button>ADD</button>
      </div>
    </form>
  );
}
