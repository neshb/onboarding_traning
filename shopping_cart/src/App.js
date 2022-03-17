import './App.css';
import React, { createContext, useReducer } from "react"
import Products from './Components/Products';
import Cart from "./Components/Cart"

export const ProductContext = createContext(null)

const initialState = {
  products: [
    {
      name: "product 1",
      cost: "200",
      quantity: "20"
    },
    {
      name: "product 2",
      cost: "2000",
      quantity: "2"
    },
    {
      name: "product 3",
      cost: "500",
      quantity: "200"
    },
    {
      name: "product 4",
      cost: "20",
      quantity: "2000"
    },
    {
      name: "product 5",
      cost: "250",
      quantity: "20"
    },
    {
      name: "product 6",
      cost: "700",
      quantity: "20"
    },
    {
      name: "product 7",
      cost: "1000",
      quantity: "30"
    },
    {
      name: "product 8",
      cost: "700",
      quantity: "50"
    },
    {
      name: "product 9",
      cost: "400",
      quantity: "80"
    },
    {
      name: "product 10",
      cost: "900",
      quantity: "20"
    }
  ],
  carts: [],
  search:[]
};
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      let product
      const productPayload = action.payload
      const withoutProduct = state.carts.filter((obj) => {
        if (obj.name !== productPayload.name) {
          return obj
        }
      })
      const withProduct = state.carts.filter((obj) => {
        if (obj.name === productPayload.name) {
          return obj
        }
      })
      if (withProduct.length > 0) {
        product = {
          name: withProduct[0].name,
          cost: withProduct[0].cost,
          quantity: parseInt(withProduct[0].quantity) + 1
        }
      } else {
        product = {
          name: productPayload["name"],
          cost: productPayload["cost"],
          quantity: 1
        }
      }
      const carts = [...withoutProduct, product]
      return { ...state, carts }
    case 'REMOVEFROMCART':
      const removeCarts = state.carts.filter((product) => {
        if (action.payload.name !== product.name) {
          return product
        }
      })
      return { ...state, carts: removeCarts }
    case 'SEARCHPRODUCT':
      console.log(action.payload)
      const input = action.payload
      const searchProduct = state.products.filter(obj => Object.keys(obj).some(key => obj[key].includes(input)));
      console.log("searchProduct ",searchProduct)
      return {...state,products:searchProduct}
    default:
      return state
  }
};


function App() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <div >
      <h1>Shopping Cart application</h1>
      <ProductContext.Provider value={{ productState: state, productDispatch: dispatch }}>
        <Products />
        <Cart />
      </ProductContext.Provider>
    </div>

  );
}

export default App;
