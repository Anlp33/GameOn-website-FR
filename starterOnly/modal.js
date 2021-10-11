function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*DOM Elements*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("form");
const close = document.querySelector(".close");
const btnclose = document.querySelector(".btn-close");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const modalSubmit = document.getElementById("modal-submit");
let error = document.querySelector(".error");

/*launch modal event*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/*launch modal form*/
function launchModal() {
  modalbg.style.display = "block";
}

/*close modal event*/
close.addEventListener("click", closeModal());

/*close modal form*/
function closeModal() {
  modalbg.style.display = "none";
}

/*close modal form after thank you message*/
btnclose.addEventListener("click", closeModal());

/*Firstname validation*/

const validFirst = () => {
  let firstTrim = first.value.trim();
  if (firstTrim.length < 2) {
    return false;
  } else {
    return true;
  }
};
/*Lastname validation*/

const validLast = () => {
  let lastTrim = last.value.trim();
  if (lastTrim.length < 2) {
    return false;
  } else {
    return true;
  }
};

/*REGEX for email validation*/
const inputEmail = document.querySelector("#email");

const validEmail = (inputEmail) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  let testEmail = emailRegExp.test(inputEmail);

/*REGEX test*/
  if (testEmail) {
    return true;
  } else {
    return false;
  }
};

/*Quantity validation*/
const quantity = document.querySelector("#quantity");
const validQuantity = (quantity) => {
  let quantityRegExp = new RegExp("^[0-9]$", "g");

  let testQuantity = quantityRegExp.test(quantity);

/*REGEX test*/
  if (testQuantity) {
    return true;
  } else {
    return false;
  }
};

/*Birthdate validation*/

let validBirthdate = () => {
  const birthdate = document.querySelector("#birthdate").value;
  let birthdateRegex = new RegExp(
    "([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})"
  );
  let testBirthdate = birthdateRegex.test(birthdate);

  if (testBirthdate) {
    return true;
  } else {
    return false;
  }
};

/*Location validation*/

validLocation = () => {
  const radio = document.querySelectorAll("input[type=radio]:checked").length;
  if (radio == 1) {
    return true;
  } else {
    return false;
  }
};

/*Checkbox function*/
const checkbox = document.getElementById("checkbox1");
validCheckbox = () => {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
};

/* Form validation */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let resultValidFirst = validFirst();
  let resultValidLast = validLast();
  let resultValidEmail = validEmail(inputEmail.value);
  let resultValidLocation = validLocation();
  let resultValidBirthdate = validBirthdate();
  let resultValidQuantity = validQuantity(quantity.value);
  let resultValidCheckbox = validCheckbox();
  let formData = document.getElementsByClassName("formData");

  if (
    resultValidFirst &&
    resultValidLast &&
    resultValidEmail &&
    resultValidLocation &&
    resultValidBirthdate &&
    resultValidQuantity &&
    resultValidCheckbox
  ) {
    form.submit();
    form.style.display = "none";
    modalSubmit.style.display = "block";
  } else {
    formData.setAttribute("data-error-visible", "true");
    // formData.appenChild(data-error);
  }
});
