import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectProduct } from "../../store/products";

const ProductDetail = () => {
  const products = useSelector(selectProduct);
  const { id } = useParams();

  return (
    <>
      <section className="container">
        <h2 className="d-block text-center mt-5">Product Detail</h2>
        <div className="mx-auto w-100">
          <table className="table table-striped table-hover">
            <thead className="table-dark text-center">
              <tr className="fs-6">
                <th scope="col">Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Description</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Image</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {products ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.productFreshness}</td>
                    <td>{product.textDescription}</td>
                    <td>{product.priceProduct}</td>
                    <td>
                      <img style={{ height: "70px" }} src={product.image} alt={product.image} />
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <p>Loading...</p>
                  <p>Product ID : {id}</p>
                </>
              )}
            </tbody>
          </table>
        </div>
        <Link to="/create-product">
          <div className="text-center my-5">
            <button className="btn btn-outline-primary">Back to home</button>
          </div>
        </Link>
        {products.map((product) => (
          <div className="col-12 mb-5">
            <div className=" mx-auto card w-50 shadow-lg border-0 rounded-4">
              <img
                src={product.image}
                className="card-img-top rounded-4"
                alt="ProductImage"
                style={{ height: "400px" }}
              />

              <div className="card-body">
                <h5 className="card-title">Product Name : {product.productName}</h5>
                <p className="card-text">Product Category : {product.productCategory}</p>
                <p className="card-text">Product Freshness : {product.productFreshness}</p>
                <p className="card-text">Description : {product.textDescription}</p>
                <p className="card-text">
                  Product Price : {product.priceProduct} <span className="text-success">$</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductDetail;
