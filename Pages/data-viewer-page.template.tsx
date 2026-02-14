/* Flow Chart Compatible File */
"use client";

/* Preload Function Start */
/* Imports */

import { useRouter } from "next/navigation";
import { useState } from "react";

/* Types */
interface TableData {
  [key: string]: any;
}

/* Objects */
/* Effects */
/* Page Start Async Functions */

/* Preload Function End */

export default function DataViewerPage({/* Props */}) {
  {/* States */}
  const router = useRouter();
  const [selectedTable, setSelectedTable] = useState("table-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  {/* Page Function Start */}

  {/* Sequence 1 Start */}
  const handleTableSwitch = (tableName: string) => {
    {/* Update Selected Table Start */}
    setSelectedTable(tableName);
    {/* Update Selected Table End */}
    {/* Reset Page Start */}
    setCurrentPage(1);
    {/* Reset Page End */}
    {/* Clear Search Start */}
    setSearchQuery("");
    {/* Clear Search End */}
  };
  {/* Sequence 1 End */}

  {/* Sequence 2 Start */}
  const handleSearch = (query: string) => {
    {/* Update Search Query Start */}
    setSearchQuery(query);
    {/* Update Search Query End */}
    {/* Reset To First Page Start */}
    setCurrentPage(1);
    {/* Reset To First Page End */}
  };
  {/* Sequence 2 End */}

  {/* Sequence 3 Start */}
  const getFilteredData = () => {
    {/* Default Table Data Start */}
    const defaultData: TableData[] = [
      { id: 1, name: "Item 1", category: "Category A", status: "Active", value: 100 },
      { id: 2, name: "Item 2", category: "Category B", status: "Inactive", value: 200 },
      { id: 3, name: "Item 3", category: "Category A", status: "Active", value: 150 },
      { id: 4, name: "Item 4", category: "Category C", status: "Active", value: 300 },
      { id: 5, name: "Item 5", category: "Category B", status: "Inactive", value: 250 },
      { id: 6, name: "Item 6", category: "Category A", status: "Active", value: 175 },
      { id: 7, name: "Item 7", category: "Category C", status: "Active", value: 350 },
      { id: 8, name: "Item 8", category: "Category B", status: "Active", value: 225 },
      { id: 9, name: "Item 9", category: "Category A", status: "Inactive", value: 125 },
      { id: 10, name: "Item 10", category: "Category C", status: "Active", value: 400 },
      { id: 11, name: "Item 11", category: "Category A", status: "Active", value: 160 },
      { id: 12, name: "Item 12", category: "Category B", status: "Active", value: 280 },
    ];
    {/* Default Table Data End */}

    {/* Filter By Search Start */}
    const filtered = defaultData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    {/* Filter By Search End */}

    {/* Return Filtered Data Start */}
    return filtered;
    {/* Return Filtered Data End */}
  };
  {/* Sequence 3 End */}

  {/* Sequence 4 Start */}
  const getPaginatedData = () => {
    {/* Get Filtered Data Start */}
    const filtered = getFilteredData();
    {/* Get Filtered Data End */}

    {/* Calculate Pagination Start */}
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    {/* Calculate Pagination End */}

    {/* Return Paginated Slice Start */}
    return filtered.slice(startIndex, endIndex);
    {/* Return Paginated Slice End */}
  };
  {/* Sequence 4 End */}

  {/* Sequence 5 Start */}
  const getTotalPages = () => {
    {/* Get Filtered Data Start */}
    const filtered = getFilteredData();
    {/* Get Filtered Data End */}

    {/* Calculate Total Pages Start */}
    return Math.ceil(filtered.length / itemsPerPage);
    {/* Calculate Total Pages End */}
  };
  {/* Sequence 5 End */}

  return (
    <div id="page-container" className="flex h-full w-full bg-gray-50">
      {/* Side Panel Start */}
      <div id="element" className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">
        {/* Panel Title Start */}
        <h3 id="element" className="text-lg font-bold mb-4">Tables</h3>
        {/* Panel Title End */}

        {/* Table List Start */}
        <div id="element" className="space-y-2">
          {/* Table Option 1 Start */}
          <button
            id="component"
            onClick={() => handleTableSwitch("table-1")}
            className={`w-full text-left px-4 py-2 rounded transition ${
              selectedTable === "table-1" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Users Data
          </button>
          {/* Table Option 1 End */}

          {/* Table Option 2 Start */}
          <button
            id="component"
            onClick={() => handleTableSwitch("table-2")}
            className={`w-full text-left px-4 py-2 rounded transition ${
              selectedTable === "table-2" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Products Data
          </button>
          {/* Table Option 2 End */}

          {/* Table Option 3 Start */}
          <button
            id="component"
            onClick={() => handleTableSwitch("table-3")}
            className={`w-full text-left px-4 py-2 rounded transition ${
              selectedTable === "table-3" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Orders Data
          </button>
          {/* Table Option 3 End */}

          {/* Table Option 4 Start */}
          <button
            id="component"
            onClick={() => handleTableSwitch("table-4")}
            className={`w-full text-left px-4 py-2 rounded transition ${
              selectedTable === "table-4" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Analytics Data
          </button>
          {/* Table Option 4 End */}
        </div>
        {/* Table List End */}
      </div>
      {/* Side Panel End */}

      {/* Main Content Start */}
      <div id="element" className="flex-1 flex flex-col">
        {/* Nav Container Start */}
        <div id="element" className="bg-white border-b border-gray-300 px-6 py-4 flex items-center justify-between">
          {/* Page Info Start */}
          <div id="element">
            {/* Page Title Start */}
            <h1 id="element" className="text-2xl font-bold">Data Viewer</h1>
            {/* Page Title End */}
            {/* Table Name Start */}
            <p id="element" className="text-sm text-gray-600">
              Table: {selectedTable}
            </p>
            {/* Table Name End */}
          </div>
          {/* Page Info End */}

          {/* Back Button Start */}
          <button
            id="component"
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          >
            Back
          </button>
          {/* Back Button End */}
        </div>
        {/* Nav Container End */}

        {/* Content Area Start */}
        <div id="element" className="flex-1 flex flex-col p-6 overflow-hidden">
          {/* Search Bar Container Start */}
          <div id="element" className="mb-6">
            {/* Search Input Start */}
            <input
              id="component"
              type="text"
              placeholder="Search all columns..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black"
            />
            {/* Search Input End */}
            {/* Results Info Start */}
            <p id="element" className="text-sm text-gray-600 mt-2">
              Showing {getPaginatedData().length} of {getFilteredData().length} results
            </p>
            {/* Results Info End */}
          </div>
          {/* Search Bar Container End */}

          {/* Table Container Start */}
          <div id="element" className="flex-1 overflow-x-auto bg-white border border-gray-300 rounded">
            {/* Table Start */}
            <table id="element" className="w-full border-collapse">
              {/* Table Header Start */}
              <thead id="element" className="bg-gray-100 border-b border-gray-300 sticky top-0">
                {/* Header Row Start */}
                <tr id="element">
                  {/* Header Cell ID Start */}
                  <th id="element" className="px-4 py-3 text-left font-semibold">ID</th>
                  {/* Header Cell ID End */}

                  {/* Header Cell Name Start */}
                  <th id="element" className="px-4 py-3 text-left font-semibold">Name</th>
                  {/* Header Cell Name End */}

                  {/* Header Cell Category Start */}
                  <th id="element" className="px-4 py-3 text-left font-semibold">Category</th>
                  {/* Header Cell Category End */}

                  {/* Header Cell Status Start */}
                  <th id="element" className="px-4 py-3 text-left font-semibold">Status</th>
                  {/* Header Cell Status End */}

                  {/* Header Cell Value Start */}
                  <th id="element" className="px-4 py-3 text-left font-semibold">Value</th>
                  {/* Header Cell Value End */}
                </tr>
                {/* Header Row End */}
              </thead>
              {/* Table Header End */}

              {/* Table Body Start */}
              <tbody id="element">
                {/* Data Row Start */}
                {getPaginatedData().map((row, index) => (
                  <tr key={index} id="element" className="border-b border-gray-200 hover:bg-gray-50 transition">
                    {/* Cell ID Start */}
                    <td id="element" className="px-4 py-3">{row.id}</td>
                    {/* Cell ID End */}

                    {/* Cell Name Start */}
                    <td id="element" className="px-4 py-3">{row.name}</td>
                    {/* Cell Name End */}

                    {/* Cell Category Start */}
                    <td id="element" className="px-4 py-3">{row.category}</td>
                    {/* Cell Category End */}

                    {/* Cell Status Start */}
                    <td id="element" className="px-4 py-3">
                      {/* Status Badge Start */}
                      <span
                        id="element"
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          row.status === "Active"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                      {/* Status Badge End */}
                    </td>
                    {/* Cell Status End */}

                    {/* Cell Value Start */}
                    <td id="element" className="px-4 py-3 font-semibold">${row.value}</td>
                    {/* Cell Value End */}
                  </tr>
                ))}
                {/* Data Row End */}
              </tbody>
              {/* Table Body End */}
            </table>
            {/* Table End */}
          </div>
          {/* Table Container End */}

          {/* Pagination Controls Start */}
          <div id="element" className="flex items-center justify-between mt-6">
            {/* Pagination Info Start */}
            <p id="element" className="text-sm text-gray-600">
              Page {currentPage} of {getTotalPages()}
            </p>
            {/* Pagination Info End */}

            {/* Pagination Buttons Start */}
            <div id="element" className="flex gap-2">
              {/* Prev Button Start */}
              <button
                id="component"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {/* Prev Button End */}

              {/* Next Button Start */}
              <button
                id="component"
                onClick={() => setCurrentPage(Math.min(getTotalPages(), currentPage + 1))}
                disabled={currentPage === getTotalPages()}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
              {/* Next Button End */}
            </div>
            {/* Pagination Buttons End */}
          </div>
          {/* Pagination Controls End */}
        </div>
        {/* Content Area End */}
      </div>
      {/* Main Content End */}
    </div>
  );
  {/* Page Function End */}
}
