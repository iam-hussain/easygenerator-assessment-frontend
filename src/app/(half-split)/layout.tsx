import type { Metadata } from "next";
import { PiAppWindowFill } from "react-icons/pi";

export default function HalfSplitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full min-h-d-full bg-base-300 grid md:grid-cols-2 grid-cols-1 md:px-10 lg:px-48 px-4 py-8 gap-4">
      <div className="flex justify-center align-middle items-center">
        <div className="flex w-auto h-auto flex-col justify-center align-middle items-center select-none py-6 px-4">
          <PiAppWindowFill className="h-40 w-40 text-primary" />
          <h1 className="text-base-content font-bold uppercase text-6xl text-center">
            Web
            <br />
            App
          </h1>
        </div>
      </div>
      <div className="flex justify-center align-middle items-center">
        {children}
      </div>
    </div>
  );
}
