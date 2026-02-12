"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-20 w-full py-2">
      <div className="postion-absolute top-0 left-0 w-full h-20 bg-gray-800 text-white flex items-center justify-center">
        <div className="text-2xl font-bold mb-4 position-relative left-0">Platform Title</div>
          <button
            className="position-relative right-150 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2"
            onClick={() => router.push("/about")}
          >
            About
          </button>
      </div>
    </div>
  );
}
