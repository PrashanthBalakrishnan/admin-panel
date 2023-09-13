"use client";

import { SignIn } from "@clerk/nextjs";
import toast from "react-hot-toast";
export default function Page() {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Copied to the clipboard.");
  };
  return (
    <>
      <SignIn />
      <div className="border p-5">
        <p className="text-sm max-w-sm">
          Hello, Thank you for visiting my application for guest users please
          use the login below to try all functionalty of the application. You
          can see all changes live on the frontend store site as well.
          <a
            href="https://e-commerce-store-snowy-omega.vercel.app/"
            className="text-blue-500 block"
          >
            Link to Front-end Store
          </a>
        </p>
        <div className="mt-5 flex flex-col">
          <button
            onClick={(e) => onCopy("ecomguestlogin@gmail.com")}
            className="bg-blue-500 rounded-lg text-white px-3 py-2 mb-2 hover:bg-blue-600"
          >
            Click here to Copy UserName
          </button>
          <button
            onClick={() => onCopy("Guest1234")}
            className="bg-blue-500 rounded-lg text-white px-3 py-2 mb-2 hover:bg-blue-600"
          >
            Click here to Copy Password
          </button>
        </div>
      </div>
    </>
  );
}
