"use client";
import LoginForm from "@/components/organisms/login-form";
import RegisterForm from "@/components/organisms/register-form";
import { getTokenCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (document) {
      const token = getTokenCookie();
      if (token) {
        router.push("/home");
      }
    }
  }, [router]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl select-none">
      <div className="card-body gap-6">
        <div className="grid gap-2">
          <h2 className="card-title text-3xl">Welcome Back!</h2>
          <p className="text-base">
            Access your account to continue using our application.
          </p>
        </div>
        <LoginForm onSuccess={() => router.push("/home")} />

        <div className="grid gap-2 border-t pt-4">
          <p className="text-base ">Don&apos;t have an account?</p>

          <button
            className="btn btn-outline w-full uppercase"
            onClick={() => router.push("/")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
