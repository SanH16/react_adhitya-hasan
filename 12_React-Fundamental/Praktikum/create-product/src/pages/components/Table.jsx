const Table = () => {
  return (
    <>
      <section>
        <h2 className="text-center mt-5">List Product</h2>
        <div className="mx-5 w-75">
          <table className="table table-striped table-hover">
            <tbody>
              <tr className="fs-6">
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
              </tr>
              <tr className="fs-6">
                <th scope="row" className="fw-medium">
                  1,001
                </th>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>Brand New</td>
                <td>adipiscing</td>
                <td>1</td>
              </tr>
              <tr className="fs-6">
                <th scope="row" className="fw-medium">
                  1,002
                </th>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>Second Hand</td>
                <td>adipiscing</td>
                <td>10</td>
              </tr>
              <tr className="fs-6">
                <th scope="row" className="fw-medium">
                  1,003
                </th>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>Brand New</td>
                <td>adipiscing</td>
                <td>20</td>
              </tr>
              <tr className="fs-6">
                <th scope="row" className="fw-medium">
                  1,004
                </th>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>Second Hand</td>
                <td>adipiscing</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="search-product">
        <div className="col-lg-2 col-md-6 col-8 ms-5">
          <form action="" role="search">
            <input
              className="form-control"
              type="search"
              name="searchProduct"
              id="searchProduct"
              placeholder="Search By Product Name"
            />
            <button onclick="onDelete()" className="btn btn-primary mx-2 my-3" type="button" id="deletionButton">
              Deletion
            </button>
            <button
              className="btn btn-outline-primary my-3"
              id="searchButton"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Search your product."
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Table;
