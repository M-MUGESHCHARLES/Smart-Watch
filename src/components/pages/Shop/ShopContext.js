import React, { createContext, useState, useContext, useEffect } from "react";
import Product_List from "../../Assets/Product_List";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartX } from "react-icons/tb";



// Create context
const ShopContext = createContext();

// Create provider
export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(Product_List);
  const [cart, setCart] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Initialize selectedColors with the first color for each product
    const initialSelectedColors = {};
    Product_List.forEach((product) => {
      initialSelectedColors[product.id] = product.colors[0];
    });
    setSelectedColors(initialSelectedColors);
  }, []);

  const handleColorChange = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  // Calculate discount
  const calculateDiscount = (price, oldPrice) => {
    if (!price || !oldPrice || oldPrice <= price) {
      return 0;
    }
    const discount = ((oldPrice - price) / oldPrice) * 100;
    return Math.ceil(discount);
  };

  // Format price to Indian currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (product, selectedColor, quantity) => {
    const colorToSet = product.colors.includes(selectedColor)
      ? selectedColor
      : product.colors[0]; // Check if selected color is valid

    const existingItem = cart.find(
      (item) => item.id === product.id && item.selectedColor === colorToSet
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.selectedColor === colorToSet
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          selectedColor: colorToSet,
          quantity,
          total: product.price * quantity,
        },
      ]);
    }

    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      icon: <TbShoppingCartPlus className="fs-1" />,
    });
    console.log("Added to cart:", {
      product,
      selectedColor: colorToSet,
      quantity,
    });
  };

  const removeItemFromCart = (id, selectedColor) => {
    setCart(
      cart.filter(
        (item) => !(item.id === id && item.selectedColor === selectedColor)
      )
    );
    toast.error("Removed from cart", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      icon: <TbShoppingCartX className="fs-1" />,
    });
  };

  const handleBuyNow = (product, selectedColor, quantity) => {
    console.log("Buy Now :", { product, selectedColor, quantity });
    // toast.success("Added to cart", {
    //   position: "bottom-right",
    //   autoClose: 4000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   transition: Bounce,
    //   icon: <TbShoppingCartPlus className="fs-1" />,
    // });

    // Implement quick buy logic
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        selectedColors,
        setSelectedColors,
        handleColorChange,
        quantity,
        setQuantity,
        calculateDiscount,
        handleAddToCart,
        removeItemFromCart,
        handleBuyNow,
        handleQuantityChange,
        formatPrice,
      }}
    >
      {children}
      <ToastContainer limit={3} newestOnTop />
    </ShopContext.Provider>
  );
};

// Custom hook to use the Shop context
export const useShop = () => {
  return useContext(ShopContext);
};
