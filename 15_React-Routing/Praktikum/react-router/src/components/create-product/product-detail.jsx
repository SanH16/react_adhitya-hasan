// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = (product) => {
  // const [product, setProduct] = useState();
  const { id } = useParams();

  console.log(product);

  // useEffect(() => {
  //   fetch(`/create-product/${id}`)
  //     .then((res) => res.json())
  //     .then(setProduct);
  // }, [id]);
  return (
    <>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <p>Product ID : {id}</p>
          <p>Product Name : {product.productName}</p>
          <p>Product Category : {product.productCategory}</p>
          <p>Product Freshness : {product.flexradio}</p>
          <p>Description : {product.textArea}</p>
          <p>Product Price : {product.productPrice}</p>
        </div>
      ) : (
        <>
          <p>Loading...</p>
          <p>Product ID : {id}</p>
        </>
      )}
      <Link to="/">Back to home</Link>
    </>
  );
};

export default ProductDetail;
