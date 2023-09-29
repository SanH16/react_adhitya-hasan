import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormProduct = () => {
  const navigate = useNavigate();

  const handleProductDetail = (product) => {
    navigate(`/create-product/${product.id}`, {
      state: {
        valueproduct: product,
      },
    });
  };

  const [values, setValues] = useState({
    productName: "",
    productCategory: "",
    formFile: "",
    flexradio: "",
    textArea: "",
    productPrice: "",
  });

  const [productList, setProductList] = useState([]);

  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "formFile") {
      // Mendapatkan file yang dipilih
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", (event) => {
        const image = event.target.result;

        setValues({ ...values, formFile: image });
      });
      reader.readAsDataURL(file);
    } else {
      setValues({ ...values, [name]: value });
    }
    setValues({ ...values, [name]: value });
  };

  const validateInput = (values) => {
    const productNameRegex = /^[a-zA-Z0-9_-]{10,25}$/;
    if (!productNameRegex.test(values.productName)) {
      return ["Product name must beetwen 10 and 25 characters, only using letters, numbers, underscore, and hyphen"];
    }

    if (!values.productName) {
      return ["Please enter a valid product name."];
    }

    const productCategoryRegex = /^Low|High|Expensive$/;
    if (!productCategoryRegex.test(values.productCategory)) {
      return ["Product Category must be one of the following: Low, High, or Expensive."];
    }

    if (!values.formFile) {
      return ["This field cannot be empty, add image"];
    }

    const flexRadioRegex = /^Brand New|Second Hand|Refurbished$/;
    if (!flexRadioRegex.test(values.flexradio)) {
      return ["Product freshness must be one of the following: Brand New, Second Hand, or Refurbished."];
    }

    if (!values.textArea) {
      return ["This field cannot be empty, describe your product"];
    }

    const productPriceRegex = /^[0-9]+(\.[0-9]{2})?$/;
    if (!productPriceRegex.test(values.productPrice)) {
      return ["Product price must be one or more numbers."];
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateInput(values);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setValues({
      productName: "",
      productCategory: "",
      formFile: "",
      flexradio: "",
      textArea: "",
      productPrice: "",
    });

    const alertMessage = `Data berhasil disimpan.

    Nama produk: ${values.productName}
    Kategori produk: ${values.productCategory}
    Kesegaran produk: ${values.flexradio}
    Deskripsi produk: ${values.textArea}
    Harga produk: ${values.productPrice}
    Gambar produk: ${values.formFile}`;
    alert(alertMessage);

    // generate ID
    const productId = crypto.randomUUID();

    setProductList([
      ...productList,
      {
        id: productId,
        productName: values.productName,
        productCategory: values.productCategory,
        formFile: values.formFile,
        flexradio: values.flexradio,
        textArea: values.textArea,
        productPrice: values.productPrice,
      },
    ]);
  };

  const handleDelete = (product) => {
    const question = window.confirm("Apakah yakin ingin menghapus ?");
    if (question) {
      setProductList(productList.filter((item) => item.id !== product.id));
    }
  };

  return (
    <>
      <section id="product">
        <div className="col-lg-4 col-md-6 col-8 mx-auto">
          <h5 className="mb-3 mt-5">Detail Product</h5>
          <form name="formPost" id="formPost" method="post " onSubmit={handleSubmit}>
            <div className="col-lg-8 col-md-6 col-12 mt-3 mb-5">
              <label htmlFor="productName" className="form-label">
                Product name
              </label>
              <input
                type="text"
                className="form-control mt-2"
                id="productName"
                name="productName"
                value={values.productName}
                onChange={handleChange}
              />
              {errors.length > 0 && (
                <div className="d-flex alert alert-danger mt-3 ">
                  <i className="bi bi-bug-fill me-3"></i>
                  {errors.map((error) => (
                    <p>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-6 mb-5">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select mt-2"
                aria-label="Large select example"
                name="productCategory"
                value={values.productCategory}
                onChange={handleChange}
                id="productCategory"
              >
                <option selected="" disabled="">
                  Choose..
                </option>
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Expensive">Expensive</option>
              </select>
            </div>
            <div className="mb-5 col-lg-6 col-md-8 col-12">
              <label htmlFor="formFile" className="form-label">
                Image of Product
              </label>
              <input
                className="form-control file-custom border-2 border-primary rounded-3 text-primary"
                type="file"
                id="formFile"
                name="formFile"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Product Freshness</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexradio"
                  id="radioBrand"
                  value="Brand New"
                  checked={values.flexradio === "Brand New"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radioBrand">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexradio"
                  id="radioSecondHand"
                  value="Second Hand"
                  checked={values.flexradio === "Second Hand"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radioSecondHand">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexradio"
                  id="radioRefurbished"
                  value="Refurbished"
                  checked={values.flexradio === "Refurbished"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radioRefurbished">
                  Refurbished
                </label>
              </div>
            </div>
            <div className="mb-5 col-lg-12 col-md-8 col-12">
              <label htmlFor="textArea">Additional Description</label>
              <textarea
                className="form-control mt-3"
                id="textArea"
                name="textArea"
                rows={4}
                value={values.textArea}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 col-lg-12 col-md-8 col-12">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="number"
                className="form-control mt-2"
                name="productPrice"
                id="productPrice"
                value={values.productPrice}
                onChange={handleChange}
                placeholder="$ 1"
              />
            </div>
            <div className="mb-5 px-4" style={{ marginTop: 10 }}>
              <button type="submit" id="submitButton" className="w-100 btn btn-primary mt-4">
                Submit
              </button>
              {errors.length > 0 && (
                <div className="d-flex alert alert-danger mt-3 ">
                  <i className="bi bi-bug-fill me-3"></i>
                  {errors.map((error) => (
                    <p>{error}</p>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="container">
        <h2 className="d-block text-center mt-5">List Product</h2>
        <div className="mx-auto w-100">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="fs-6">
                <th scope="col">Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Image Product</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr>
                  <td
                    key={product.id}
                    className="fs-6"
                    onClick={() => handleProductDetail(product)}
                    style={{ cursor: "pointer" }}
                  >
                    {product.id} <strong>(show detail🚀)</strong>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.flexradio}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <img className="rounded-3" style={{ height: "70px" }} src={product.formFile} alt="ProductImage" />
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(product)}
                      className="btn btn-outline-danger mx-2 my-0"
                      type="button"
                    >
                      Deletion
                    </button>
                    <button className="btn btn-primary my-0" type="button" onClick={() => {}}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FormProduct;
