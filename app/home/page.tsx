{/* Flow Chart Compatible File */}
{/* Page Function Start */}
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full">
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-800 text-white">
        <div className="flex h-full items-center justify-between px-6">
          <div className="text-2xl font-bold">Platform Title</div>
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About Us
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <p className="pt-20">This is the home page</p>
        <button
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          onClick={() => router.push("/about")}
        >
          About Us
        </button>
      </div>
    </div>
  );
}
{/* Page Function End */}