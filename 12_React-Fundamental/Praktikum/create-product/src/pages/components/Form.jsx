const Form = () => {
  return (
    <section id="product">
      <div className="col-lg-4 col-md-6 col-8 mx-auto">
        <h5 className="mb-3 mt-5">Detail Product</h5>
        <form name="formPost" id="formPost" method="post " onsubmit="return validateForm()">
          <div className="col-lg-8 col-md-6 col-12 mt-3 mb-5">
            <label htmlFor="productName" className="form-label">
              Product name
            </label>
            <input
              type="text"
              className="form-control mt-2"
              id="productName"
              name="productName"
              minLength={6}
              maxLength={50}
            />
            <div className="alert text-danger mt-2" id="alertFeedback" />
          </div>
          <div className="col-lg-6 col-md-6 col-6 mb-5">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              className="form-select mt-2"
              aria-label="Large select example"
              name="productCategory"
              id="productCategory"
            >
              <option selected="" disabled="">
                Choose..
              </option>
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Expensive">Expensive</option>
            </select>
            <div className="alert text-danger mt-2" id="alertProductCategory" />
          </div>
          <div className="mb-5 col-lg-6 col-md-8 col-12">
            <label htmlFor="formFile" className="form-label">
              Image of Product
            </label>
            <input
              className="form-control file-custom border-2 border-primary rounded-3 text-primary"
              type="file"
              id="formFile"
            />
            <div className="alert text-danger mt-2" id="alertProductImage" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Product Freshness</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexradio"
                id="radioBrand"
                defaultValue="Brand New"
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
                defaultValue="Second Hand"
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
                defaultValue="Refurbished"
              />
              <label className="form-check-label" htmlFor="radioRefurbished">
                Refurbished
              </label>
            </div>
            <div className="alert text-danger mt-2" id="alertProductFreshness" />
          </div>
          <div className="mb-5 col-lg-12 col-md-8 col-12">
            <label htmlFor="textArea">Additional Description</label>
            <textarea className="form-control mt-3" id="textArea" rows={4} defaultValue={""} />
            <div className="alert text-danger mt-2" id="alertDescription" />
          </div>
          <div className="mb-5 col-lg-12 col-md-8 col-12">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="number"
              className="form-control mt-2"
              name="productPrice"
              id="productPrice"
              placeholder="$ 1"
            />
            <div className="alert text-danger mt-2" id="alertFeedbackPrice" />
          </div>
          <div className="mb-5 px-4" style={{ marginTop: 150 }}>
            <button type="submit" id="submitButton" className="w-100 btn btn-primary mt-4" onclick="showInput()">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
