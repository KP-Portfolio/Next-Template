/* Flow Chart Compatible File */
"use client";

// This is an example of what will be the "Page Layout"
// Imports, States, Objects, Types, and Props will simply be "related" to the default Page Function node in the flow charts
// We will use simple placement identifiers above where the references should go in the code for compiling/conversion like shown below
// All of this will be apart of "Preloading"

/* Preload Function Start */ // This is a Node
/* Imports */ // This is not a Node, but a placement identifier for where imports should be placed in the code

import { useRouter } from "next/navigation";

/* Types */ // This is not a Node, but a placement identifier for where types should be placed in the code
/* Objects */ // This is not a Node, but a placement identifier for where objects should be placed in the code
/* Effects */ // This is not a Node, but a placement identifier for where preload effects should be placed in the code
/* Page Start Async Functions */ // This is not a Node, but a placement identifier for where preload async functions should be placed in the code

/* Preload Function End */ // This is where the Node logic ends for preloading

export default function Page({/* Props */}) {
  {/* States */} // This is not a Node, but a placement identifier for where preload states should be placed in the code
  const router = useRouter();

  {/* Page Function Start */} // This is a Node

  {/* Handlers for components and other relevant logic */} // These will be sequences for the Page Function Node as shown in another componenet

  // Below we will have the composition of Elements and Components that make up a page
  // Elements are static and have no functionality, but can still have children and be styles
  // Components are functioning Elements essentially, they can handle events and run functions

  return (
    <div id="page-container" className="flex flex-col h-full w-full">
      {/* Nav Container Start */} {/* This is a Node */}
      <div id="element" className="fixed top-0 left-0 right-0 h-14 bg-gray-800 text-white">
        {/* Nav Bar Start */} {/* This is a Node */}
        <div id="component" className="flex h-full items-center justify-between px-6">
          {/* Title */} {/* This is a Node */}
          <div id="component" className="text-2xl font-bold">Platform Title</div>
          {/* Sign In Button */} {/* This is a Node */}
          <button
            id="component"
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
            onClick={() => router.push("/landing")}
          >
            Sign In
          </button>
        </div>
        {/* Nav Bar End */}
      </div>
      {/* Nav Container End */}
      {/* Content Container Start */} {/* This is a Node */}
      <div id="content-container" className="flex flex-col items-center justify-center h-full w-full">
        {/* Welcome Header */} {/* This is a Node */}
        <h1 className="pt-20 text-4xl font-bold mb-4">Welcome to your FlowStack Project</h1>
        {/* Welcome P1 */} {/* This is a Node */}
        <p className="text-lg m-8">
          Each default page in this project template will help to show you how to use FlowStack
          to build out a Next.js project with the editor. This visual editor allows you to design
          pages by combining a series of Elements, Components, and Functions within flow charts. 
          Code can also be edited via the code editor as well, for fully cross functional development.         
        </p>
        {/* Welcome P2 */} {/* This is a Node */}
        <p className="text-lg m-8">
          Each example page has a different layout. You can choose from these layouts when creating 
          new pages as well. Please sign in below using the following credentials if you would like 
          to view the example pages that are set up for this project template.         
        </p>
        {/* Welcome P3 */} {/* This is a Node */}
        <p className="text-lg mb-4">
          Username: bob.smith@example.com         
        </p>
        {/* Welcome P4 */} {/* This is a Node */}
        <p className="text-lg mb-4">
          Password: securepassword123         
        </p>
        {/* Welcome Button */} {/* This is a Node */}
        <button
          id="component"
          className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          onClick={() => router.push("/landing")}
        >
          Start Here
        </button>
      </div>
      {/* Content Container End */}
      {/* Footer Container Start */} {/* This is a Node */}
      <div id="footer-container" className="fixed bottom-0 left-0 right-0 h-10 bg-gray-800 text-white">
      </div>
      {/* Footer Container End */}
    </div>
  );
}

/* As you can see, each node is either genericly or uniquely identified. Most nodes on this page are uniquely identified. However
  other pages that have actual preloading logic and event handlers will have more generic identifiers for those sequences of nodes.
*/