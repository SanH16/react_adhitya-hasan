document.addEventListener("DOMContentLoaded", function () {
  const formPost = document.getElementById("formPost");
  const inputProductName = formPost.querySelector("#productName");
  const inputProductPrice = formPost.querySelector("#productPrice");
  const alertFeedback = document.getElementById("alertFeedback");
  const alertFeedbackPrice = document.getElementById("alertFeedbackPrice");
  const alertPcategory = document.getElementById("alertPcategory");
  const alertPimage = document.getElementById("alertPimage");
  const alertPdesc = document.getElementById("alertPdesc");
  const alertPfreshness = document.getElementById("alertPfreshness");
  const submitButton = formPost.querySelector("button#submitButton");
  const inputChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  formPost.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
    showInput();
  });

  const validateInputs = () => {
    const productnameValue = productName.value.trim();
    const productpriceValue = productPrice.value.trim();
    const categoryValue = productCategory.value.trim();
    const imageValue = formFile.value.trim();
    // let x = document.getElementsByName("flexradio");
    // const freshnessValue = radioBrand.value.trim();
    const freshnessValue = (
      radioBrand ||
      radioSecondHand ||
      radioRefurbished
    ).value.trim();
    const textValue = textArea.value.trim();

    if (productnameValue == "") {
      alertFeedback.style.display = "inline-block";
      alertFeedback.textContent = `The Product Name field must be filled in`;
      // alert(`The Product Name field must be filled in`);
    } else if (productpriceValue == "") {
      alertFeedbackPrice.style.display = "inline-block";
      alertFeedbackPrice.textContent = `The Product Price field must be filled in`;
      // alert(`The Product Price field must be filled in`);
    } else if (categoryValue == "") {
      alertPcategory.style.display = "inline-block";
      alertPcategory.textContent = `The Product Category field must be filled in`;
      // alert(`The ${productCategory} field must be filled in`);
    } else if (imageValue == "") {
      alertPimage.style.display = "inline-block";
      alertPimage.textContent = `The Image Product field must be filled in`;
      // alert(`The ${formFile} field must be filled in`);
    } else if (freshnessValue == "") {
      alertPfreshness.style.display = "inline-block";
      alertPfreshness.textContent = `The Product Freshness field must be filled in`;
    } else if (textValue == "") {
      alertPdesc.style.display = "inline-block";
      alertPdesc.textContent = `The Text Area field must be filled in`;
      // alert(`The ${textArea} field must be filled in`);
    } else {
      alert(
        `Looks good!🚀\n
          Product Name : ( ${productnameValue} )
          Product Category : ( ${categoryValue} )
          Image Product : ( ${imageValue} )
          Product Freshness : ( ${freshnessValue} )
          Additional Description : ( ${textValue} )
          Product Price : ( ${productpriceValue} $)`
      );
    }
  };

  inputProductName.addEventListener("input", () => {
    if (productName.value.length > 10) {
      alertFeedback.style.display = "inline-block";
      alertFeedback.textContent = "Product Name must not exceed 25 characters.";
    } else if (inputChar.test(inputProductName.value)) {
      alertFeedback.style.display = "inline-block";
      alertFeedback.textContent = "Name must not contain symbols.";
    } else {
      alertFeedback.style.display = "none";
    }
  });

  inputProductPrice.addEventListener("input", () => {
    if (productPrice.value.length > 0) {
      alertFeedbackPrice.style.display = "none";
    } else {
      alertFeedbackPrice.style.display = "inline-block";
      alertFeedbackPrice.textContent = "Please enter a valid Product price.🤖";
    }
  });

  if (inputProductName.value.trim() === "") {
    alertFeedback.style.display = "inline-block";
    alertFeedback.textContent = "Please enter a valid Product name.";
  } else {
    alertFeedback.style.display = "none";
  }

  if (inputProductPrice.value.trim() === "") {
    alertFeedbackPrice.style.display = "inline-block";
    alertFeedbackPrice.textContent = "Please enter a valid Product price.🤖";
  } else {
    alertFeedbackPrice.style.display = "none";
  }

  // Add data to table
  const tableShow = document.querySelector("#tabel");

  const showInput = () => {
    tableShow.style.display = "block";

    const radio = document.getElementsByName("flexradio");
    const table = document.getElementsByTagName("table")[0];
    const row = table.insertRow(table.rows.length);
    const c0 = row.insertCell(0);
    const c1 = row.insertCell(1);
    const c2 = row.insertCell(2);
    const c3 = row.insertCell(3);
    const c4 = row.insertCell(4);
    const c5 = row.insertCell(5);
    const c6 = row.insertCell(6);

    // auto increment number
    for (let i = 0; i < table.rows.length; i++) {
      c0.textContent = [i];
    }

    // checked radio
    for (let q = 0; q < radio.length; q++) {
      if (radio[q].checked) {
        c4.textContent = radio[q].value;
      }
    }
    c1.textContent = productName.value;
    c2.textContent = productCategory.value;
    c3.textContent = formFile.value;
    c5.textContent = textArea.value;
    c6.textContent = productPrice.value;
  };

  // declare item delete
  const searchProduct = document.getElementById("searchProduct");
  const deletionBtn = searchProduct.querySelector("#deletionBtn");
  const searchBtn = searchProduct.querySelector("#searchBtn");

  deletionBtn.addEventListener("click", onDelete);

  const onDelete = () => {
    const table = document
      .getElementById("tabel")
      .getElementsByTagName("tbody")[0];
    const leng = table.rows.length;
    for (let i = 0; i < leng; i++) {
      if (searchProduct.value === productName.value) {
        // leng.splice(r, 1);
        leng[i].pop();
      }
    }
  };

  // searchBtn.addEventListener("click", onSearch);

  // const onSearch = () => {
  //   const table = document
  //     .getElementById("tabel")
  //     .getElementsByTagName("tbody")[0];
  //   const search = table.rows.length;
  //   for (var i = 0; i < search; i++) {
  //     // search[i]
  //     if (search === productName.value) {
  //       alert(
  //         `Looks good!🚀\n
  //         Product Name : ( ${productname.value} )
  //         Product Category : ( ${productCategory.value} )
  //         Image Product : ( ${formFile.value} )
  //         Product Freshness : ( ${radio[i].value} )
  //         Additional Description : ( ${textArea.value} )
  //         Product Price : ( ${productPrice.value} $)`
  //       );
  //     }
  //   }
  // };
});
