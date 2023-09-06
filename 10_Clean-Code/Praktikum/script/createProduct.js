document.addEventListener("DOMContentLoaded", function () {
  const formPost = document.getElementById("formPost");
  const inputProductName = formPost.querySelector("#productName");
  const inputProductPrice = formPost.querySelector("#productPrice");
  const alertFeedback = document.getElementById("alertFeedback");
  const alertFeedbackPrice = document.getElementById("alertFeedbackPrice");
  const alertProductCategory = document.getElementById("alertProductCategory");
  const alertProductImage = document.getElementById("alertProductImage");
  const alertDescription = document.getElementById("alertDescription");
  const alertProductFreshness = document.getElementById(
    "alertProductFreshness"
  );
  const inputChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  // submit form
  formPost.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
    showInput();
  });

  // validation function
  const validateInputs = () => {
    const productnameValue = productName.value.trim();
    const productpriceValue = productPrice.value.trim();
    const categoryValue = productCategory.value.trim();
    const imageValue = formFile.value.trim();
    const freshnessValue = (
      radioBrand ||
      radioSecondHand ||
      radioRefurbished
    ).value.trim();
    const textValue = textArea.value.trim();

    // condition if input value is empty
    if (productnameValue == "") {
      alertFeedback.style.display = "inline-block";
      alertFeedback.textContent = `The Product Name field must be filled in`;
    } else if (productpriceValue == "") {
      alertFeedbackPrice.style.display = "inline-block";
      alertFeedbackPrice.textContent = `The Product Price field must be filled in`;
    } else if (categoryValue == "") {
      alertProductCategory.style.display = "inline-block";
      alertProductCategory.textContent = `The Product Category field must be filled in`;
    } else if (imageValue == "") {
      alertProductImage.style.display = "inline-block";
      alertProductImage.textContent = `The Image Product field must be filled in`;
    } else if (freshnessValue == "") {
      alertProductFreshness.style.display = "inline-block";
      alertProductFreshness.textContent = `The Product Freshness field must be filled in`;
    } else if (textValue == "") {
      alertDescription.style.display = "inline-block";
      alertDescription.textContent = `The Text Area field must be filled in`;
    } else {
      // alert input
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

  // statement alert input product name value
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

  // statement alert input product price value
  inputProductPrice.addEventListener("input", () => {
    if (productPrice.value.length > 0) {
      alertFeedbackPrice.style.display = "none";
    } else {
      alertFeedbackPrice.style.display = "inline-block";
      alertFeedbackPrice.textContent = "Please enter a valid Product price.🤖";
    }
  });

  // condition if input product value invalid data types
  if (inputProductName.value.trim() === "") {
    alertFeedback.style.display = "inline-block";
    alertFeedback.textContent = "Please enter a valid Product name.🤖";
  } else {
    alertFeedback.style.display = "none";
  }

  // condition if input price value invalid data types
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
    const cellNumber = row.insertCell(0);
    const cellProductName = row.insertCell(1);
    const cellProductCategory = row.insertCell(2);
    const cellImage = row.insertCell(3);
    const cellProductFreshness = row.insertCell(4);
    const cellDescription = row.insertCell(5);
    const cellProductPrice = row.insertCell(6);

    // auto increment number table
    for (let i = 0; i < table.rows.length; i++) {
      cellNumber.textContent = [i];
    }

    // get checked radio
    for (let q = 0; q < radio.length; q++) {
      if (radio[q].checked) {
        cellProductFreshness.textContent = radio[q].value;
      }
    }
    cellProductName.textContent = productName.value;
    cellProductCategory.textContent = productCategory.value;
    cellImage.textContent = formFile.value;
    cellDescription.textContent = textArea.value;
    cellProductPrice.textContent = productPrice.value;
  };

  // declare item delete
  const searchProduct = document.getElementById("searchProduct");
  const deletionButton = searchProduct.querySelector("#deletionButton");
  const productNameValues = formPost.querySelector("#productName");

  deletionButton.addEventListener("click", onDelete);
  const onDelete = () => {
    const table = document
      .getElementById("tabel")
      .getElementsByTagName("tbody")[0];
    const tableLength = table.rows.length;

    for (let i = 0; i < tableLength; i++) {
      if (searchProduct[i].value === productNameValues[i].value) {
        tableLength[i].pop();
      }
    }
  };

  // The searchProduct function can be seen in the createProduct.html javascript:alert
});
