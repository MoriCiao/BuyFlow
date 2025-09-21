import { useCallback } from "react";
import FormInput from "./FormInput.jsx";

const FormInputContainer = ({ email, setEmail, password, setPassword }) => {
  const handleEamil = useCallback(
    (e) => {
      console.log("setEmail 執行中");
      setEmail(e.target.value);
    },
    [setEmail],
  );
  const handlePassword = useCallback(
    (e) => {
      console.log("setPassword 執行中");
      setPassword(e.target.value);
    },
    [setPassword],
  );
  return (
    <div className="flex w-full flex-col gap-8">
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleEamil}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
    </div>
  );
};

export default FormInputContainer;
