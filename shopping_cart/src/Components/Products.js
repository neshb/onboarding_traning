import "../App.css"
import React, { useContext, useState, useRef } from 'react';
import { ProductContext } from "../App"

const Products = (props) => {
    const { productState, productDispatch } = useContext(ProductContext);
    const [searchProduct, setSearchProduct] = useState("")
    const inputRef = useRef(null)
    return (
        <div className="ProductContainer">
            <h3>Products</h3>
            <div>
                <input onChange={(e) => {
                    setSearchProduct(e.target.value)
                }} 
                ref={inputRef} /> <button onClick={() => {
                    productDispatch({ type: "SEARCHPRODUCT", payload: searchProduct })
                    inputRef.current.focus()
                    inputRef.current.value = ""
                }} > Search </button>
            </div>
            <ul>
                {
                    productState.products.length > 0 ? productState.products.map((product) =>
                        <li key={product.name}>
                            <div>
                                <p>Name : {product.name} </p>
                                <p>Cost : {product.cost} </p>
                                <p>Quantity : {product.quantity} </p>
                            </div>
                            <div>
                                <p><button onClick={() => {
                                    productDispatch({ type: "ADDTOCART", payload: product })
                                }} >Add to Cart </button> </p>
                            </div>
                        </li>
                    )
                        : <div> Product is not Found </div>
                }
            </ul>
        </div>

    )
}

export default Products