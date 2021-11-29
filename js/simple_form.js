//Set Salary by movement.
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
  output.textContent = salary.value;
});

//UC1:User needs to valid name first with Regex.
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(text.value)) {
    textError.textContent = "";
  } else {
    textError.textContent = "Name is Incorrect";
  }
});

//UC 2 Enter a Email valid with Regex.
const email = document.querySelector('#emailInput');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
  //debugger;
  let emailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
  if (emailRegex.test(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Email is InValid";
  }
});

//UC3:Valid number Number enter Using Regex.
const number = document.querySelector('#number');
const errnumber = document.querySelector('.number-error');
number.addEventListener('input', function () {
  let numberRegex = RegExp('^[1-9]{2}[0-9]{10}$');
  if (numberRegex.test(number.value)) {
    errnumber.textContent = "";
  } else {
    errnumber.textContent = "number is incorrect";
  }
});

//UC4 & UC5: Password using Regex. 
const pwd = document.querySelector("#pwd");
const errPass = document.querySelector(".pwd-error");
password.addEventListener('input', function () {
  let passRegex = RegExp("^((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*`~_+]).{8,20})$");
  if (passRegex.test(password.value)) {
    errPass.textContent = "";
  } else {
    errPass.textContent = "Password is incorrect";
  }
});