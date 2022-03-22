import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action";
import ProductCard from "./ProductCard";
import HeadingTag from "./HeadingTag";

const Products = (props) => {
  const { sellerId } = useParams();
  const [productsData, setProductsData] = useState([]);
  const allProducts = useSelector((state) => state.allProducts.products);
  useEffect(() => {
    const filterProduct = allProducts.filter((product) => {
      if (product.sellerId === parseInt(sellerId)) {
        return product;
      }
    });
    setProductsData(filterProduct);
  }, [sellerId]);
  return (
    <>
      <HeadingTag name={`Seller ${sellerId} products`} />
      <ProductCard
        productsData={productsData}
        type={"addToCart"}
        dispatchHandler={addToCart}
      />
    </>
  );
};

export default Products;
