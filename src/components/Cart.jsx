import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

const Cart = ({ cartItems, setCartItems }) => {
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Your Cart</h3>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) - 1)
                    }
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-red-600 text-xl">
                ${calculateTotal()}
              </span>
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
