"use client";
import { setTokenCookie } from "@/lib/cookies";
import fetcher from "@/lib/fetcher";
import schemas, { LoginSchemaValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

const defaultValues: Partial<LoginSchemaValues> = {};

type LoginFormProps = {
  onSuccess?: () => void;
};

function LoginForm({ onSuccess }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchemaValues>({
    resolver: zodResolver(schemas.register),
    defaultValues,
    mode: "onSubmit",
  });

  async function onSubmit(variables: LoginSchemaValues) {
    console.log({ variables });
    try {
      const response = await fetcher.post("/auth/login", variables);
      setTokenCookie(response.data.access_token);
      if (response.data.access_token && onSuccess) {
        onSuccess();
      }
      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 412) {
        setError("email", {
          type: "manual",
          message: "Email not registered",
        });
      } else if (
        error instanceof AxiosError &&
        error.response?.status === 422
      ) {
        setError("password", {
          type: "manual",
          message: "Incorrect password provided",
        });
      } else {
        setError("password", {
          type: "manual",
          message: "Unexpected server error, try later!",
        });
      }
      console.error(error);
    }
  }

  return (
    <form
      className="grid space-y-4"
      name="login"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form-control w-full">
        <input
          type="text"
          placeholder="Email"
          autoComplete="email"
          className="input input-bordered w-full max-w-xs"
          {...register("email")}
        />
        {errors?.email?.message && (
          <span className="text-xs text-error pt-1 pl-1">
            {errors?.email?.message}
          </span>
        )}
      </label>

      <label className="form-control w-full">
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          className="input input-bordered w-full max-w-xs"
          {...register("password")}
        />
        {errors?.password?.message && (
          <span className="text-xs text-error pt-1 pl-1">
            {errors?.password?.message}
          </span>
        )}
      </label>

      <button className="btn btn-primary w-full uppercase" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
