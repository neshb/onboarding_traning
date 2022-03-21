import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Action";


const Cart = (props) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.allProducts.carts);
  const [totalCost, setTotalCost] = useState(0)
  useEffect(() => {
    const cost = cartProducts.reduce((total, product) => {
      return total + (parseInt(product.cost) * parseInt(product.quantity))
    }, 0)
    setTotalCost(cost)
  }, [cartProducts])
  return (
    <div className=" CartContainer">
      <h1 className='m-4'>Cart</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
        {
          cartProducts && cartProducts.length > 0 ? cartProducts.map((product) =>
            <div className="col" key={product.id} >
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Product Name : {product.name} </h5>
                  <p className="card-text">Cost : {product.cost} </p>
                  <p className="card-text">Quantity : {product.quantity} </p>
                  <p className="text-muted">{product.sellerName} {product.category} </p>
                  <button type="button" className="btn btn-outline-dark" onClick={() => {
                    dispatch(removeFromCart(product))
                  }} >Remove </button>
                </div>
              </div>
            </div>
          )
            : <h1 className='m-4'>Product Not Found </h1>
        }
      </div>
      <h4 className='m-4'>Total Cost : {totalCost} </h4>
    </div>
  )
}

export default Cart