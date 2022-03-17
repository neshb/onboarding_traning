import "../App.css"
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from "../App"

const Cart = (props) => {
  const { productState, productDispatch } = useContext(ProductContext)
  const [totalCost, setTotalCost] = useState(0)
  useEffect(() => {
    const cost = productState.carts.reduce((total, product) => {
      return total + (parseInt(product.cost)*parseInt(product.quantity) )
    }, 0)
    setTotalCost(cost)
  }, [productState.carts])
  return (
    <div className=" CartContainer">
      <h3>Cart</h3>
      <ul>
        {
           productState.carts.length>0 ?  productState.carts.map((product) =>
            <li key={"cart " + product.name}>
              <div>
                <p>Name : {product.name} </p>
                <p>Cost : {product.cost} </p>
                <p>Quantity : {product.quantity} </p>
              </div>
              <div>
                <p><button onClick={() => {
                  productDispatch({ type: "REMOVEFROMCART", payload: product })
                }} >Remove </button> </p>
              </div>
            </li>
          )
          :<div><img style={{width:"30vw"}} src={"download01.png"} /></div>
        }
      </ul>
      <h3>Total Cost : {totalCost} </h3>
    </div>
  )
}

export default Cart