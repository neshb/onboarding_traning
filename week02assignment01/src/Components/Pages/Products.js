import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action";

const Products = (props) => {
    const { sellerId } = useParams();
    const [productsData, setProductsData] = useState([])
    const allProducts = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch()
    useEffect(() => {
        const filterProduct = allProducts.filter((product) => {
            if (product.sellerId === parseInt(sellerId)) {
                return product
            }
        })
        setProductsData(filterProduct)
    }, [sellerId])
    return (
        <>
        <h1 className='m-4'> Seller {sellerId} products  </h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
            {
                productsData ? productsData.map((product) =>
                    <div className="col" key={product.id} >
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Product Name : {product.name} </h5>
                                <p className="card-text">Cost : {product.cost} </p>
                                <p className="card-text">Quantity : {product.quantity} </p>
                                <p className="text-muted">{product.sellerName}  {product.category} </p>
                                <button type="button" className="btn btn-outline-dark" onClick={() => {
                                    dispatch(addToCart(product))
                                }} >Add to Cart </button>
                            </div>
                        </div>
                    </div>
                )
                    : <h1>Seller Not Found </h1>
            }
        </div>
        </>
    )
}

export default Products