import React from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

interface PropTypes {
  type: string;
  placeholder: string;
  register: any;
  error: any;
}

const Input = React.forwardRef((props, ref) => {
  const { type = "text", placeholder, register, error } = props as PropTypes;
  return (
    <div>
      <input ref={ref} {...register} type={type} placeholder={placeholder} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
});

export default Input;
