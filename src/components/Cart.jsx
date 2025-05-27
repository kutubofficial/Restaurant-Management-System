import toast from "react-hot-toast";
import { FiX, FiShoppingCart, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Cart = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <FiShoppingCart className="text-blue-600 text-xl" />
              <h3 className="text-xl font-bold">
                Your Cart ({cartItems.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close cart"
            >
              <FiX className="text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <FiShoppingCart className="text-4xl mb-4" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm">
                  Add some delicious items to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-full hover:bg-gray-100 transition"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="text-gray-500" />
                        </button>
                        <span className="mx-3 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-full hover:bg-gray-100 transition"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={() =>
                  toast.success(
                    "Success! You're being redirected to complete your order."
                  )
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
