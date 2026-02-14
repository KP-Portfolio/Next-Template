/* Flow Chart Compatible File */
"use client";

/* Preload Function Start */
/* Imports */

import { useRouter } from "next/navigation";
import { useState } from "react";

/* Types */
type GalleryLayout = "grid-2" | "grid-3" | "grid-4";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

/* Objects */
/* Effects */
/* Page Start Async Functions */

/* Preload Function End */

export default function GalleryPage({/* Props */}) {
  {/* States */}
  const router = useRouter();
  const [currentLayout, setCurrentLayout] = useState<GalleryLayout>("grid-3");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  {/* Page Function Start */}

  {/* Sequence 1 Start */}
  const handleAddToCart = (itemId: number, title: string, price: number) => {
    {/* Find Or Create Item Start */}
    setCart((prevCart) => {
      {/* Check If Item Exists Start */}
      const existingItem = prevCart.find((item) => item.id === itemId);
      {/* Check If Item Exists End */}
      {/* If Item Exists Start */}
      if (existingItem) {
        {/* Increment Quantity Start */}
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        {/* Increment Quantity End */}
      } else {
        {/* Add New Item Start */}
        return [...prevCart, { id: itemId, title, price, quantity: 1 }];
        {/* Add New Item End */}
      }
      {/* If Item Exists End */}
    });
    {/* Find Or Create Item End */}
  };
  {/* Sequence 1 End */}

  {/* Sequence 2 Start */}
  const handleRemoveFromCart = (itemId: number) => {
    {/* Filter Cart Start */}
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    {/* Filter Cart End */}
  };
  {/* Sequence 2 End */}

  {/* Sequence 3 Start */}
  const calculateTotal = () => {
    {/* Sum Item Totals Start */}
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    {/* Sum Item Totals End */}
  };
  {/* Sequence 3 End */}

  {/* Sequence 4 Start */}
  const handleCheckout = () => {
    {/* Validate Cart Start */}
    if (cart.length === 0) return;
    {/* Validate Cart End */}
    {/* Open Checkout Modal Start */}
    setIsCheckoutOpen(true);
    {/* Open Checkout Modal End */}
  };
  {/* Sequence 4 End */}

  {/* Sequence 5 Start */}
  const getGridClasses = () => {
    {/* Grid Layout Map Start */}
    const gridMap = {
      "grid-2": "grid-cols-2",
      "grid-3": "grid-cols-3",
      "grid-4": "grid-cols-4",
    };
    {/* Grid Layout Map End */}
    {/* Return Classes Start */}
    return gridMap[currentLayout];
    {/* Return Classes End */}
  };
  {/* Sequence 5 End */}

  return (
    <div id="page-container" className="flex flex-col h-full w-full">
      {/* Nav Container Start */}
      <div id="element" className="fixed top-0 left-0 right-0 h-14 bg-gray-800 text-white flex items-center justify-between px-6">
        {/* Gallery Title Start */}
        <h1 id="component" className="text-2xl font-bold">Gallery</h1>
        {/* Gallery Title End */}
        {/* Cart Badge Start */}
        <div id="component" className="flex items-center gap-4">
          {/* Item Count Start */}
          <span id="element" className="text-lg">{cart.length} items</span>
          {/* Item Count End */}
          {/* Checkout Button Start */}
          <button
            id="component"
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
          {/* Checkout Button End */}
        </div>
      </div>
      {/* Nav Container End */}

      {/* Content Container Start */}
      <div id="element" className="flex-1 pt-14 pb-20 px-6 overflow-y-auto">
        {/* Header Section Start */}
        <div id="element" className="mb-6 flex items-center justify-between">
          {/* Page Title Start */}
          <h2 id="element" className="text-3xl font-bold">Shop Products</h2>
          {/* Page Title End */}

          {/* Layout Selector Start */}
          <div id="element" className="flex gap-2">
            {/* Layout 2 Button Start */}
            <button
              id="component"
              onClick={() => setCurrentLayout("grid-2")}
              className={`px-3 py-2 rounded ${currentLayout === "grid-2" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              2 Col
            </button>
            {/* Layout 2 Button End */}

            {/* Layout 3 Button Start */}
            <button
              id="component"
              onClick={() => setCurrentLayout("grid-3")}
              className={`px-3 py-2 rounded ${currentLayout === "grid-3" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              3 Col
            </button>
            {/* Layout 3 Button End */}

            {/* Layout 4 Button Start */}
            <button
              id="component"
              onClick={() => setCurrentLayout("grid-4")}
              className={`px-3 py-2 rounded ${currentLayout === "grid-4" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              4 Col
            </button>
            {/* Layout 4 Button End */}
          </div>
          {/* Layout Selector End */}
        </div>
        {/* Header Section End */}

        {/* Gallery Grid Start */}
        <div id="element" className={`grid ${getGridClasses()} gap-6`}>
          {/* Gallery Item 1 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(1, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 1 End */}

          {/* Gallery Item 2 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(2, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 2 End */}

          {/* Gallery Item 3 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(3, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 3 End */}

          {/* Gallery Item 4 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(4, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 4 End */}

          {/* Gallery Item 5 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(5, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 5 End */}

          {/* Gallery Item 6 Start */}
          <div id="element" className="p-4 border border-gray-300 rounded bg-gray-50 hover:shadow-lg transition">
            {/* Item Image Start */}
            <div id="element" className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center">
              <span id="element" className="text-gray-500">Image</span>
            </div>
            {/* Item Image End */}
            {/* Item Title Start */}
            <h3 id="element" className="font-bold mb-2">Product Title</h3>
            {/* Item Title End */}
            {/* Item Detail 1 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 1 End */}
            {/* Item Detail 2 Start */}
            <p id="element" className="text-sm text-gray-700 mb-1">Detail: Value</p>
            {/* Item Detail 2 End */}
            {/* Item Detail 3 Start */}
            <p id="element" className="text-sm text-gray-700 mb-3">Detail: Value</p>
            {/* Item Detail 3 End */}
            {/* Item Price Start */}
            <p id="element" className="font-bold text-lg mb-3">$99.99</p>
            {/* Item Price End */}
            {/* Add To Cart Button Start */}
            <button
              id="component"
              onClick={() => handleAddToCart(6, "Product Title", 99.99)}
              className="w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              +
            </button>
            {/* Add To Cart Button End */}
          </div>
          {/* Gallery Item 6 End */}
        </div>
        {/* Gallery Grid End */}

        {/* Pagination Start */}
        <div id="element" className="flex justify-center gap-2 mt-8">
          {/* Prev Page Button Start */}
          <button
            id="component"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          >
            Previous
          </button>
          {/* Prev Page Button End */}

          {/* Page Number Indicator Start */}
          <span id="element" className="px-3 py-2">Page {currentPage}</span>
          {/* Page Number Indicator End */}

          {/* Next Page Button Start */}
          <button
            id="component"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
          >
            Next
          </button>
          {/* Next Page Button End */}
        </div>
        {/* Pagination End */}
      </div>
      {/* Content Container End */}

      {/* Checkout Modal Start */}
      {isCheckoutOpen && (
        <div id="element" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Container Start */}
          <div id="element" className="bg-white rounded-lg p-6 w-96 shadow-2xl">
            {/* Modal Title Start */}
            <h2 id="element" className="text-2xl font-bold mb-4">Checkout</h2>
            {/* Modal Title End */}

            {/* Cart Item List Start */}
            <div id="element" className="mb-4 max-h-64 overflow-y-auto">
              {/* Item Row Start */}
              {cart.map((item) => (
                <div key={item.id} id="element" className="flex justify-between items-center mb-3 pb-3 border-b">
                  {/* Item Name Start */}
                  <div id="element">
                    <p id="element" className="font-semibold">{item.title}</p>
                    <p id="element" className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  {/* Item Name End */}
                  {/* Item Price Start */}
                  <div id="element" className="text-right">
                    <p id="element" className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    {/* Remove Button Start */}
                    <button
                      id="component"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm cursor-pointer"
                    >
                      Remove
                    </button>
                    {/* Remove Button End */}
                  </div>
                  {/* Item Price End */}
                </div>
              ))}
              {/* Item Row End */}
            </div>
            {/* Cart Item List End */}

            {/* Order Total Start */}
            <div id="element" className="border-t pt-4 mb-4">
              {/* Total Label Start */}
              <div id="element" className="flex justify-between mb-4">
                <span id="element" className="text-lg font-bold">Total:</span>
                <span id="element" className="text-lg font-bold text-green-600">${calculateTotal()}</span>
              </div>
              {/* Total Label End */}
            </div>
            {/* Order Total End */}

            {/* Payment Form Start */}
            <div id="element" className="mb-4">
              {/* Card Number Input Start */}
              <input
                id="component"
                type="text"
                placeholder="Card Number"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
              />
              {/* Card Number Input End */}

              {/* Expiry and CVC Row Start */}
              <div id="element" className="flex gap-2">
                {/* Expiry Input Start */}
                <input
                  id="component"
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded"
                />
                {/* Expiry Input End */}

                {/* CVC Input Start */}
                <input
                  id="component"
                  type="text"
                  placeholder="CVC"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded"
                />
                {/* CVC Input End */}
              </div>
              {/* Expiry and CVC Row End */}
            </div>
            {/* Payment Form End */}

            {/* Modal Actions Start */}
            <div id="element" className="flex gap-3">
              {/* Cancel Button Start */}
              <button
                id="component"
                onClick={() => setIsCheckoutOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
              {/* Cancel Button End */}

              {/* Complete Purchase Button Start */}
              <button
                id="component"
                onClick={() => {
                  {/* Complete Order Start */}
                  alert("Order placed successfully!");
                  {/* Complete Order End */}
                  {/* Reset State Start */}
                  setIsCheckoutOpen(false);
                  setCart([]);
                  {/* Reset State End */}
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
              >
                Purchase
              </button>
              {/* Complete Purchase Button End */}
            </div>
            {/* Modal Actions End */}
          </div>
          {/* Modal Container End */}
        </div>
      )}
      {/* Checkout Modal End */}
    </div>
  );
  {/* Page Function End */}
}
