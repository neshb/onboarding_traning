import React from "react";
import { useSelector } from "react-redux";
import SellerCard from "./SellerCard";
import HeadingTag from "./HeadingTag";

const Home = (props) => {
  const allsellers = useSelector((state) => state.allProducts.sellers);
  return (
    <React.Fragment>
      <HeadingTag name={"All Sellers"} />
      <SellerCard allsellers={allsellers} />
    </React.Fragment>
  );
};

export default Home;
