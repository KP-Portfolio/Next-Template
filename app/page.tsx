"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full">
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-800 text-white">
        <div className="flex h-full items-center justify-between px-6">
          <div className="text-2xl font-bold">Platform Title</div>
          <button
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
            onClick={() => router.push("/landing")}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="pt-20 text-4xl font-bold mb-4">Welcome to the Platform</h1>
        <p className="text-lg mb-8">Discover the features and benefits of our platform.</p>
        <button
          className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          onClick={() => router.push("/landing")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
