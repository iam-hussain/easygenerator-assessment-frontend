"use client";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidRename } from "react-icons/bi";

export default function Register() {
  const router = useRouter();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl select-none">
      <div className="card-body gap-6">
        <div className="grid gap-2">
          <h2 className="card-title text-3xl">Join Us!</h2>
          <p className="text-base">
            Start your journey with us by creating a new account.
          </p>
        </div>
        <form className="grid gap-4" onSubmit={(e) => handleOnSubmit(e)}>
          <label className="input input-bordered flex items-center gap-2">
            <BiSolidRename className="w-4 h-4 opacity-70" />
            <input
              type="text"
              className="grow"
              placeholder="Name"
              autoComplete="given-name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail className="w-4 h-4 opacity-70" />
            <input
              type="text"
              className="grow"
              placeholder="Email"
              autoComplete="email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <RiLockPasswordFill className="w-4 h-4 opacity-70" />
            <input
              type="password"
              className="grow"
              value="password"
              autoComplete="new-password"
            />
          </label>
          <button className="btn btn-primary w-full uppercase" type="submit">
            Sign Up
          </button>
        </form>

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
