"use client";
import RegisterForm from "@/components/organisms/register-form";
import { getTokenCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Register() {
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
          <h2 className="card-title text-3xl">Join Us!</h2>
          <p className="text-base">
            Start your journey with us by creating a new account.
          </p>
        </div>
        <RegisterForm onSuccess={() => router.push("/home")} />

        <div className="grid gap-2 border-t pt-4">
          <p className="text-base ">Already having an account!</p>

          <button
            className="btn btn-outline w-full uppercase"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
