import { useCallback } from "react";
import FormInput from "./FormInput.jsx";

const FormInputContainer = ({ email, onEmail, password, onPassword }) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={onEmail}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onPassword}
      />
    </div>
  );
};

export default FormInputContainer;
