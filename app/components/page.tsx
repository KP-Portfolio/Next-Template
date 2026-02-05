"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-20 w-full py-2">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => router.push("/")}
      >
        Go Back
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2"
        onClick={() => router.push("/landing")}
      >
        Sign In
      </button>
    </div>
  );
}
