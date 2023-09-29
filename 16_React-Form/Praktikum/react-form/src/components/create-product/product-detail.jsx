import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { valueproduct } = location.state;
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
              {valueproduct ? (
                <tr key={valueproduct.id}>
                  <td>{id}</td>
                  <td>{valueproduct.productName}</td>
                  <td>{valueproduct.productCategory}</td>
                  <td>{valueproduct.flexradio}</td>
                  <td>{valueproduct.textArea}</td>
                  <td>{valueproduct.productPrice}</td>
                  {/* <td>{valueproduct.formFile}</td> */}
                  <td>
                    <img style={{ height: "70px" }} src={valueproduct.formFile} alt="ProductImage" />
                  </td>
                </tr>
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
        <div className="col-12 mb-5">
          <div className="mx-auto card w-50 shadow-lg border-0 rounded-4">
            <img
              src={valueproduct.formFile}
              className="card-img-top rounded-4"
              alt="ProductImage"
              style={{ height: "400px" }}
            />

            <div className="card-body">
              <h5 className="card-title">Product Name : {valueproduct.productName}</h5>
              <p className="card-text">Product Category : {valueproduct.productCategory}</p>
              <p className="card-text">Product Freshness : {valueproduct.flexradio}</p>
              <p className="card-text">Description : {valueproduct.textArea}</p>
              <p className="card-text">
                Product Price : {valueproduct.productPrice} <span className="text-success">$</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
