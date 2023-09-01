document.addEventListener("DOMContentLoaded", function () {
  const formProductName = document.getElementById("formProductName");
  const inputProductName = document.getElementById("productName");
  const alertFeedback = document.getElementById("alertFeedback");
  const alertFeedbackPrice = document.getElementById("alertFeedbackPrice");
  const inputProductPrice = document.getElementById("productPrice");
  const submitButton = document.getElementById("submitButton");
  const inputChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  submitButton.addEventListener("click", function () {
    const productName = inputProductName.value;
    const productPrice = inputProductPrice.value;
  });

  inputProductName.addEventListener("input", function () {
    if (productName.value.length > 10) {
      alertFeedback.style.display = "inline-block";
      alertFeedback.innerHTML = "Product Name must not exceed 25 characters.";
    } else if (inputChar.test(inputProductName.value)) {
      alertFeedback.style.display = "inline-block";
      alertFeedback.innerHTML = "Name must not contain symbols.";
    } else {
      alertFeedback.style.display = "none";
    }
  });

  if (inputProductName.value.trim() === "") {
    alertFeedback.style.display = "inline-block";
    alertFeedback.innerHTML = "Please enter a valid Product name.";
  } else {
    alertFeedback.style.display = "none";
  }

  if (inputProductPrice.value.trim() === "") {
    alertFeedbackPrice.style.display = "inline-block";
    alertFeedbackPrice.innerHTML = "Please enter a valid Product price.";
  } else {
    alertFeedback.style.display = "none";
  }

  // productNameInput.value = "";
  // productPriceInput.value = "";
});
