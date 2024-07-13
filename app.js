const body = document.querySelector("body");

const head = document.createElement("h1");
head.type = "text";
head.textContent = "FORM";
head.style.color = "black";
head.style.background = "orange";
head.style.textAlign = "center";
body.appendChild(head);

const form = document.createElement("form");
form.setAttribute("action", "#");

const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "firstname");
firstNameLabel.textContent = "Firstname : ";
form.appendChild(firstNameLabel);

const firstName = document.createElement("input");
firstName.type = "text";
firstName.name = "firstname";
firstName.id = "firstname";
firstName.className = "input";
firstName.placeholder = "Required!";
form.appendChild(firstName);

const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "lastname");
lastNameLabel.textContent = "Lastname : ";
form.appendChild(lastNameLabel);

const lastName = document.createElement("input");
lastName.type = "text";
lastName.name = "lastname";
lastName.id = "lastname";
lastName.className = "input";
lastName.placeholder = "Required!";
form.appendChild(lastName);

const userNameLabel = document.createElement("label");
userNameLabel.setAttribute("for", "username");
userNameLabel.textContent = "Username : ";
form.appendChild(userNameLabel);

const userName = document.createElement("input");
userName.type = "text";
userName.name = "username";
userName.id = "username";
userName.className = "input";
userName.placeholder = "Required!";
form.appendChild(userName);

const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email : ";
form.appendChild(emailLabel);

const email = document.createElement("input");
email.type = "text";
email.name = "email";
email.id = "email";
email.className = "input";
email.placeholder = "Required!";
form.appendChild(email);

const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password : ";
form.appendChild(passwordLabel);

const password = document.createElement("input");
password.type = "password";
password.name = "password";
password.id = "password";
password.className = "input";
password.placeholder = "Required!";
form.appendChild(password);

const signUp = document.createElement("input");
signUp.type = "submit";
signUp.value = "Register";
form.appendChild(signUp);

body.appendChild(form);

signUp.addEventListener("click", function (e) {
  let allInput = document.querySelectorAll(".input");
  allInput.forEach(function (allInput) {
    console.log(allInput.value);

    // e.preventDefault;
  });
});
