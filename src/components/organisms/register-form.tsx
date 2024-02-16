"use client";
import Icon from "@/components/atoms/icon";
import Input from "@/components/atoms/input";
import schemas, { RegisterSchemaValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues: Partial<RegisterSchemaValues> = {};

type RegisterFormProps = {
  onSuccess?: () => void;
};

function RegisterForm({}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaValues>({
    resolver: zodResolver(schemas.register),
    defaultValues,
    mode: "onSubmit",
  });

  async function onSubmit(variables: RegisterSchemaValues) {
    console.log("Hello", variables);
  }

  return (
    <form className="grid space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
