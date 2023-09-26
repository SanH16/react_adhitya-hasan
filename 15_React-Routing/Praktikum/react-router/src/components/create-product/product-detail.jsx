import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //   console.log(props);

  //   const { id } = useParams();
  const { id, productName, productCategory, flexradio, textArea, productPrice } = useParams();
  //   const { id, productName, productCategory, flexradio, textArea, productPrice } = product.state.values;

  return (
    <>
      <h1>Product Detail</h1>
      <p>Product ID : {id}</p>
      <p>Product Name : {productName}</p>
      <p>Product Category : {productCategory}</p>
      <p>Product Freshness : {flexradio}</p>
      <p>Description : {textArea}</p>
      <p>Product Price : {productPrice}</p>
      {/* <p>Product Name : {props.productName}</p>
      <p>Product Category : {props.productCategory}</p>
      <p>Product Freshness : {props.flexradio}</p>
      <p>Description : {props.textArea}</p>
      <p>Product Price : {props.productPrice}</p> */}
    </>
  );
};

export default ProductDetail;
