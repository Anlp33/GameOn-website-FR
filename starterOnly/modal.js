function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const first = document.querySelector("#first");
const last = document.querySelector(" #last");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const radiobuttons = document.querySelector(".checkbox-icon");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
close.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// Firstname validation

first.addEventListener("click", () => {
  validFirst();
});

let firstMsg = first.nextElementSibling;
const firstBorder = document.querySelector("#first.text-control");

const validFirst = function () {
  if (first.value.length < 2) {
    firstMsg.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    firstMsg.classList.remove("valid");
    firstMsg.classList.add("error");
    firstBorder.style.border = "2px solid #e54858";
    return false;
  } else {
    firstMsg.innerHTML = "Le prénom est valide";
    firstMsg.classList.add("valid");
    firstMsg.classList.remove("error");
    return true;
  }
};

//Lastname validation

last.addEventListener("click", () => {
  validName();
});

let lastMsg = last.nextElementSibling;
const lastBorder = document.querySelector("#last.text-control");

const validName = function () {
  if (last.value.length < 2) {
    lastMsg.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastMsg.classList.remove("valid");
    lastMsg.classList.add("error");
    lastBorder.style.border = "2px solid #e54858";
    return false;
  } else {
    lastMsg.innerHTML = "Le nom est valide";
    lastMsg.classList.add("valid");
    lastMsg.classList.remove("error");
    return true;
  }
};

//Email validation

email.addEventListener("change", function () {
  validEmail(this);
});

//REGEX for email validation
const validEmail = function (email) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  let testEmail = emailRegExp.test(email.value);

  const emailMsg = email.nextElementSibling;
  const emailBorder = document.querySelector("#email.text-control");

  //REGEX test
  if (testEmail) {
    return true;
  } else {
    return false;
  }
};

//Quantity validation

const validQuantity = function (quantity) {
  let quantityRegExp = new RegExp("/^[0-9]$/", "g");

  let testQuantity = quantityRegExp.test(quantity.value);

  //REGEX test
  if (testQuantity) {
    return true;
  } else {
    return false;
  }
};

//Location validation

function validLocation() {
  if (radiobuttons.checked) {
    return true;
  } else {
    return false;
  }
}

//Form validation

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validFirst() &&
    validLast() &&
    validEmail() &&
    validQuantity() &&
    validLocation()
  ) {
    form.submit();
  }
});
