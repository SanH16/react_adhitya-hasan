document.addEventListener("DOMContentLoaded", function () {
  const formPost = document.getElementById("formPost");
  const inputFirstName = formPost.querySelector("#firstName");
  const inputLastName = formPost.querySelector("#lastName");
  const alertFirstName = document.getElementById("alertFirstName");
  const alertLastName = document.getElementById("alertLastName");
  const alertTextArea = document.getElementById("alertTextArea");
  const alertEmail = document.getElementById("alertEmail");
  const buttonSubscribe = formPost.querySelector("button#buttonSubscribe");
  const inputChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  formPost.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
  });

  const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const areaValue = textArea.value.trim();
    const emailValue = email.value.trim();

    if (firstNameValue == "") {
      alertFirstName.style.display = "inline-block";
      alertFirstName.textContent = `Input value first`;
    } else if (lastNameValue == "") {
      alertLastName.style.display = "inline-block";
      alertLastName.textContent = `Input value first`;
    } else if (areaValue == "") {
      alertTextArea.style.display = "inline-block";
      alertTextArea.textContent = `Input value first`;
    } else if (emailValue == "") {
      alertEmail.style.display = "inline-block";
      alertEmail.textContent = `Input value first`;
    } else {
      alert(
        `Welcome to Tripify!🚀\n
        Hello Mr ${firstNameValue} ${lastNameValue}✨
        Request for : ${areaValue}  
        Your Email : ( ${emailValue} 🌐)`
      );
      console.log(firstNameValue);
    }
  };

  inputFirstName.addEventListener("input", () => {
    if (firstName.value.length >= 3) {
      alertFirstName.style.display = "inline-block";
      alertFirstName.textContent = "Looks Good. ✨";
    } else if (inputChar.test(firstName.value)) {
      alertFirstName.style.display = "inline-block";
      alertFirstName.textContent = "Sorry, Name must not contain symbols.";
    } else {
      alertFirstName.style.display = "none";
    }
  });

  inputLastName.addEventListener("input", () => {
    if (lastName.value.length >= 3) {
      alertLastName.style.display = "inline-block";
      alertLastName.textContent = "Looks Good. ✨";
    } else if (inputChar.test(lastName.value)) {
      alertLastName.style.display = "inline-block";
      alertLastName.textContent = "Sorry, Name must not contain symbols.";
    } else {
      alertLastName.style.display = "none";
    }
  });

  document.getElementById("scroll-down").addEventListener("click", function () {
    window.scrollTo(0, document.body.scrollHeight * 0.3);
  });
  document.getElementById("scroll-up").addEventListener("click", function () {
    window.scrollTo(0, document.body.scrollTop * 0.3);
  });
  document.getElementById("scroll-news").addEventListener("click", function () {
    window.scrollTo(0, document.body.scrollHeight * 0.55);
  });

  if (inputFirstName.value.trim() === "") {
    alertFirstName.style.display = "inline-block";
    alertFirstName.textContent = "Please enter your first name.🤖";
  } else {
    alertFirstName.style.display = "none";
  }

  if (inputLastName.value.trim() === "") {
    alertLastName.style.display = "inline-block";
    alertLastName.textContent = "Please enter last name.🤖";
  } else {
    alertLastName.style.display = "none";
  }
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
