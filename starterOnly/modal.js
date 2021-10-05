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
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const first = document.querySelector("#first");
const last = document.querySelector(" #last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const radio = document.querySelector(".input[type=radio]:checked");
const checkbox = document.getElementById("checkbox1");

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

const validFirst = () => {
  let firstTrim = first.value.trim();
  if (firstTrim.length < 2) {
    return false;
  } else {
    return true;
  }
};
//Lastname validation

const validName = () => {
  let lastTrim = last.value.trim();
  if (lastTrim.length < 2) {
    return false;
  } else {
    return true;
  }
};

//REGEX for email validation
const email = document.querySelector("#email");
const validEmail = (email) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  let testEmail = emailRegExp.test(email);

  //REGEX test
  if (testEmail) {
    return true;
  } else {
    return false;
  }
};
validEmail();

//Quantity validation

// const validQuantity = function (quantity) {
//   let quantityRegExp = new RegExp("/^[0-9]$/", "g");

//   let testQuantity = quantityRegExp.test(quantity.value);

//   //REGEX test
//   if (testQuantity) {
//     return true;
//   } else {
//     return false;
//   }
// }
// validQuantity();
// //Birthdate validation

// validBirthdate = () => {
//   if (birthdate.value >= 0) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }
// };

// //Location validation

// validLocation = () => {
//   if (radio.value.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// //Checkbox function

// validCheckbox = () => {
//   if (checkbox.checked) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // //Form validation
// // const form = document.querySelector(".form");

// // form.addEventListener('submit', function (e) {
// //    e.preventDefault();
// //    let resultValidFirst = validFirst();
// //    let resultValidLast = validLast();
// //    let resultValidEmail = validEmail();
// //    let resultValidLocation = validLocation();
// //    let resultValidBirthdate = validBirthdate();
// //    let resultValidQuantity = validQuantity();
// //    let resultValidCheckbox = validCheckbox();

// //   if (
// //     resultValidFirst &&
// //     resultValidLast &&
// //     resultValidEmail &&
// //     resultValidLocation &&
// //     resultValidBirthdate &&
// //     resultValidQuantity &&
// //     resultValidCheckbox
// //   ) {
// //     form.submit();
// //   } else {
// //     console.log("error");
// //   }
// // });
