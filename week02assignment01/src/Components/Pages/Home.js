import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Home = (props) => {
  const navigate = useNavigate()
  const allsellers = useSelector((state) => state.allProducts.sellers)
  return (
    <React.Fragment>
      <h1 className='m-4'>All Sellers  </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
        {
          allsellers ? allsellers.map((seller) =>
            <div className="col sellerCard" key={seller.id} onClick={() => {
              navigate(`seller/${seller.id}/products`)
            }} >
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Seller Name : {seller.name} </h5>
                  <p className="card-text">Category : {seller.category} </p>
                </div>
              </div>
            </div>
          )
            : <h1>Seller Not Found </h1>
        }
      </div>
    </React.Fragment>
  )
}

export default Home