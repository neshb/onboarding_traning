import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/Action";
import ProductCard from "./ProductCard";
import HeadingTag from "./HeadingTag";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.allProducts.carts);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const cost = cartProducts.reduce((total, product) => {
      return total + parseInt(product.cost) * parseInt(product.quantity);
    }, 0);
    setTotalCost(cost);
  }, [cartProducts]);
  return (
    <div className=" CartContainer">
      <HeadingTag name={"Cart"} />
      <ProductCard
        productsData={cartProducts}
        type={"removeFromCart"}
        dispatchHandler={removeFromCart}
      />
      <HeadingTag name={`Total Cost : ${totalCost}`} />
    </div>
  );
};

export default Cart;
