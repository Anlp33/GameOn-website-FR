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
const btnclose = document.querySelector("#btn-close");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const modalSubmit = document.getElementById("modal-submit");

/*launch modal event*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/*launch modal form*/
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  modalSubmit.style.display = "none";
}

/*close modal event*/
close.addEventListener("click", closeModal);

/*close modal form*/
function closeModal() {
  modalbg.style.display = "none";
}

/*close modal form after thank you message*/
const closeBtn = () => {
  modalbg.style.display = "none";
};
btnclose.addEventListener("click", closeBtn);

/*Firstname validation*/

const validFirst = () => {
  let firstTrim = first.value.trim();
  if (firstTrim.length < 2) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    return false;
  } else {
    first.parentElement.removeAttribute("data-error-visible");
    first.parentElement.removeAttribute("data-error");
    return true;
  }
};
/*Lastname validation*/

const validLast = () => {
  let lastTrim = last.value.trim();
  if (lastTrim.length < 2) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else {
    last.parentElement.removeAttribute("data-error-visible");
    last.parentElement.removeAttribute("data-error");
    return true;
  }
};

/*REGEX for email validation*/
const inputEmail = document.querySelector("#email");

const validEmail = () => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let testEmail = emailRegExp.test(inputEmail.value);

  /*REGEX test*/
  if (testEmail) {
    inputEmail.parentElement.removeAttribute("data-error-visible");
    inputEmail.parentElement.removeAttribute("data-error");
    return true;
  } else {
    inputEmail.parentElement.setAttribute("data-error-visible", "true");
    inputEmail.parentElement.setAttribute(
      "data-error",
      "Le format de l'adresse e-mail est incorrect."
    );
    return false;
  }
};

/*Birthdate validation*/
const birthdate = document.getElementById("birthdate");
let validBirthdate = () => {
  let birthdateRegex = new RegExp(
    "([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})"
  );
  let testBirthdate = birthdateRegex.test(birthdate.value);

  if (testBirthdate) {
    birthdate.parentElement.removeAttribute("data-error-visible");
    birthdate.parentElement.removeAttribute("data-error");
    return true;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    return false;
  }
};

/*Quantity validation*/
const quantity = document.getElementById("quantity");
const validQuantity = () => {
  let quantityRegExp = new RegExp("^[0-9]$", "g");

  let testQuantity = quantityRegExp.test(quantity.value);

  /*REGEX test*/
  if (testQuantity) {
    quantity.parentElement.removeAttribute("data-error");
    quantity.parentElement.removeAttribute("data-error-visible");
    return true;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner ce champ."
    );
    return false;
  }
};

/*Location validation*/

validLocation = () => {
  const radiobtn = document.querySelectorAll(
    "input[type=radio]:checked"
  ).length;

  const radio = document.getElementById("location1");
  if (radiobtn == 1) {
    radio.parentElement.removeAttribute("data-error-visible", "true");
    radio.parentElement.removeAttribute("data-error");
    return true;
  } else {
    radio.parentElement.setAttribute("data-error-visible", "true");
    radio.parentElement.setAttribute(
      "data-error",
      "Vous devez choisir une option."
    );
    return false;
  }
};

/*Checkbox function*/
const checkbox = document.getElementById("checkbox1");
validCheckbox = () => {
  if (checkbox.checked) {
    checkbox.parentElement.removeAttribute("data-error");
    checkbox.parentElement.removeAttribute("data-error-visible");
    return true;
  } else {
    checkbox.parentElement.setAttribute("data-error-visible", "true");
    checkbox.parentElement.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    return false;
  }
};

/* Form validation */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let resultValidFirst = validFirst();
  let resultValidLast = validLast();
  let resultValidEmail = validEmail();
  let resultValidLocation = validLocation();
  let resultValidBirthdate = validBirthdate();
  let resultValidQuantity = validQuantity();
  let resultValidCheckbox = validCheckbox();

  if (
    resultValidFirst &&
    resultValidLast &&
    resultValidEmail &&
    resultValidLocation &&
    resultValidBirthdate &&
    resultValidQuantity &&
    resultValidCheckbox
  ) {
    form.style.display = "none";
    modalSubmit.style.display = "flex";
    form.reset();
  }
});

// /**
//  *
//  * @param {string} param1
//  * @param {number} param2
//  */
// function test(param1, param2) {
//   param2.
// }
