import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
      {props.productsData ? (
        props.productsData.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Name : {product.name} </h5>
                <p className="card-text">Cost : {product.cost} </p>
                <p className="card-text">Quantity : {product.quantity} </p>
                <p className="text-muted">
                  {product.sellerName} {product.category}{" "}
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => {
                    dispatch(props.dispatchHandler(product));
                  }}
                >
                  {props.type === "addToCart" ? "Add to Cart" : "Remove"}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>Product Not Found </h1>
      )}
    </div>
  );
};

export default ProductCard;
