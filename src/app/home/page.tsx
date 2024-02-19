"use client";
import { deleteTokenCookie, getTokenCookie } from "@/lib/cookies";
import fetcher, { getAuthorizationHeader } from "@/lib/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    deleteTokenCookie();
    router.push("/");
  };

  useEffect(() => {
    if (document) {
      const token = getTokenCookie();
      if (token) {
        fetcher
          .get("/auth/check", {
            headers: {
              ...getAuthorizationHeader(),
            },
          })
          .catch(() => {
            deleteTokenCookie();
            router.push("/");
          });
      } else {
        router.push("/");
      }
    }
  }, [router]);

  return (
    <div className="h-full w-full min-h-d-full flex flex-col gap-6 justify-center align-middle items-center bg-base-300 select-none px-6 py-8">
      <h1 className="text-base-content md:text-9xl text-5xl font-black text-center uppercase">
        Welcome to the application.
      </h1>
      <button className="btn btn-primary" onClick={() => handleLogout()}>
        Log out
      </button>
    </div>
  );
}
