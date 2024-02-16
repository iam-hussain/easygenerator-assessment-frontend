import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = ({ errorMessage, ...props }: InputProps) => {
  return (
    <label className="form-control w-full">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        {...props}
      />
      {errorMessage && (
        <span className="text-xs text-error pt-1 pl-1">{errorMessage}</span>
      )}
    </label>
  );
};

Input.displayName = "Input";

export default Input;
