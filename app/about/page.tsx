{/* Flow Chart Compatible File */}
"use client";
// This is an example of what will be the "Empty Page Layout"
// Imports, States, Objects, Types, and Props will simply be "related" to the default Page Function node in the flow charts
// We will use simple placement identifiers above where the references should go in the code for compiling/conversion like shown below
// All of this will be apart of "Preloading"

{/* Preload Function Start */}
{/* Imports */}
import { useRouter } from "next/navigation";

{/* Types */}
{/* Objects */}
{/* Effects */}
{/* Page Start Async Functions */}

{/* Preload Function End */}

export default function About({/* Props */}) {
  {/* States */}
  const router = useRouter();

  {/* Page Function Start */}

  {/* Handlers for components and other relevant logic */}

// Below we will have the composition of Elements and Components that make up a page
// Elements are static and have no functionality, but can still have children and be styles
// Components are functioning Elements essentially, they can handle events and run functions

  return (
    {/* Page Container Start */}
    <div id="element" className="flex flex-col h-full w-full">
      {/* Nav Container Start */}
      <div id="element" className="fixed top-0 left-0 right-0 h-14 bg-gray-800 text-white">
        {/* Nav Bar Start */}
        <div id="component" className="flex h-full items-center justify-between px-6">
          {/* Title */}
          <div id="component" className="text-2xl font-bold">Platform Title</div>
          {/* Home Button */}
          <button
            id="component"
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
            onClick={() => router.push("/home")}
          >
            Home
          </button>
        </div>
        {/* Nav Bar End */}
      </div>
      {/* Nav Container End */}
      {/* Content Container Start */}
      <div id="element" className="flex flex-col items-center justify-center h-full w-full">
      </div>
      {/* Content Container End */}
    </div>
    {/* Page Container End */}
  );
  {/* Page Function End */}
}