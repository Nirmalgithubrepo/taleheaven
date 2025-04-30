import React, { useState } from "react";

const Cart = () => {
  // Example cart items (could be fetched from a backend in a real scenario)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Book 1", price: 299, quantity: 1 },
    { id: 2, name: "Book 2", price: 499, quantity: 1 },
    { id: 3, name: "Book 3", price: 199, quantity: 2 },
  ]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [showConfirmRemove, setShowConfirmRemove] = useState(null);

  // Calculate the total price before and after discount
  const calculateTotal = () => {
    let total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    if (couponApplied) {
      total = total - total * 0.1; // 10% discount for example coupon
    }
    return total;
  };

  // Handle increasing and decreasing the quantity of items
  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setShowConfirmRemove(null);
  };

  // Handle applying coupon
  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setCouponApplied(true);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  return (
    <div className="container bg-rose-50 mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-6 bg-gray-100 rounded-lg">
          <p>Your cart is empty. Start shopping now!</p>
        </div>
      ) : (
        <div className="space-y-6">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md disabled:opacity-50"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => setShowConfirmRemove(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Confirm Removal Modal */}
          {showConfirmRemove && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
                <p className="text-lg font-semibold">
                  Are you sure you want to remove this item?
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleRemoveItem(showConfirmRemove)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowConfirmRemove(null)}
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Coupon Code</h3>
            <div className="flex space-x-2 mt-4">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="p-2 border rounded-md w-full"
              />
              <button
                onClick={applyCoupon}
                className="p-2 bg-blue-600 text-white rounded-md"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm text-right">
            <p className="font-semibold text-lg">Subtotal: ₹{calculateTotal().toLocaleString()}</p>
            <p className="text-sm text-gray-600">Tax (5%): ₹{(calculateTotal() * 0.05).toLocaleString()}</p>
            <p className="font-semibold text-lg">
              Total: ₹{(calculateTotal() * 1.05).toLocaleString()}
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
