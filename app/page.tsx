{/* Page Function Start */}
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
        <h1 className="pt-20 text-4xl font-bold mb-4">Welcome to your FlowStack Project</h1>
        <p className="text-lg m-8">
          Each default page in this project template will help to show you how to use FlowStack
          to build out a Next.js project with the editor. This visual editor allows you to design
          pages by combining a series of Elements, Components, and Functions within flow charts. 
          Code can also be edited via the code editor as well, for fully cross functional development.         
        </p>
        <p className="text-lg m-8">
          Each example page has a different layout. You can choose from these layouts when creating 
          new pages as well. Please sign in below using the following credentials if you would like 
          to view the example pages that are set up for this project template.         
        </p>
        <p className="text-lg mb-4">
          Username: bob.smith@example.com         
        </p>
        <p className="text-lg mb-4">
          Password: securepassword123         
        </p>
        <button
          className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          onClick={() => router.push("/landing")}
        >
          Start Here
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-800 text-white">
      </div>
    </div>
  );
}
{/* Page Function End */}