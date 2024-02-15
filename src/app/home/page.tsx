"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-full w-full min-h-d-full flex flex-col gap-6 justify-center align-middle items-center bg-base-300 select-none px-6 py-8">
      <h1 className="text-base-content md:text-9xl text-5xl font-black text-center uppercase">
        Welcome to the application.
      </h1>
      <button className="btn btn-primary" onClick={() => router.push("/")}>
        Log out
      </button>
    </div>
  );
}
