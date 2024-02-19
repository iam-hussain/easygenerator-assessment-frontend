"use client";
import { setTokenCookie } from "@/lib/cookies";
import fetcher from "@/lib/fetcher";
import schemas, { RegisterSchemaValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

const defaultValues: Partial<RegisterSchemaValues> = {};

type RegisterFormProps = {
  onSuccess?: () => void;
};

function RegisterForm({ onSuccess }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterSchemaValues>({
    resolver: zodResolver(schemas.register),
    defaultValues,
    mode: "onSubmit",
  });

  async function onSubmit(variables: RegisterSchemaValues) {
    try {
      const response = await fetcher.post("/auth/register", variables);
      setTokenCookie(response.data.access_token);
      if (response.data.access_token && onSuccess) {
        onSuccess();
      }
      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 412) {
        setError("email", {
          type: "manual",
          message: "Email already registered",
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
      name="register"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form-control w-full">
        <input
          type="text"
          placeholder="Name"
          autoComplete="given-name"
          className="input input-bordered w-full max-w-xs"
          {...register("name")}
        />
        {errors?.name?.message && (
          <span className="text-xs text-error pt-1 pl-1">
            {errors?.name?.message}
          </span>
        )}
      </label>

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
        Sign Up
      </button>
    </form>
  );
}

export default RegisterForm;
