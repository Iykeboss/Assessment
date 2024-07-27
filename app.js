<<<<<<< HEAD
let form = document.querySelector(".addTask"),
  taskInput = document.querySelector("#taskInput"),
  ul = document.querySelector(".ul"),
  msgTag = document.querySelector(".message"),
  rmvAllBtn = document.querySelector(".rmv-btn"),
  filter = document.querySelector(".filter"),
  darkBtn = document.querySelector(".dark");

function runFunction(e) {
  let li = document.createElement("li");
  li.textContent = taskInput.value;
  li.className = "listItem";

  let icon = document.createElement("button");
  icon.textContent = "X";
  icon.className = "del";
  li.appendChild(icon);

  icon.addEventListener("click", function (e) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  });

  if (taskInput.value === "") {
    popUpMsg("Please Add a Task", "red");
    removeMsg();
  } else {
    ul.appendChild(li);
    popUpMsg("Task Added Successfully", "green");
    removeMsg();
  }

  let item;
  if (localStorage.getItem("taskList") === null) {
    item = [];
  } else {
    item = JSON.parse(localStorage.getItem("taskList"));
  }

  item.push(taskInput.value);

  localStorage.setItem("taskList", JSON.stringify(item));

  taskInput.value = "";

  e.preventDefault();
}

darkBtn.addEventListener("click", runSwitch);

form.addEventListener("submit", runFunction);

rmvAllBtn.addEventListener("click", clearAll);

filter.addEventListener("input", filterTask);

function popUpMsg(message, color) {
  msgTag.textContent = message;
  msgTag.style.visibility = "visible";
  msgTag.style.background = color;
}

function removeMsg() {
  setTimeout(function (e) {
    msgTag.style.visibility = "hidden";
  }, 2000);
}

function runSwitch(e) {
  document.querySelector("body").classList.toggle("switchMode");

  e.preventDefault();
}

function filterTask(e) {
  let textSearch = e.target.value.toLowerCase();

  let li = document.querySelectorAll(".listItem");
  li.forEach(function (li) {
    let task = li.textContent.toLowerCase();
    if (task.includes(textSearch)) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
}

function clearAll() {
  let list = document.querySelectorAll(".listItem");
  list.forEach(function (list) {
    if (list === "") {
      let dialogBox = (document.querySelector(
        ".confirmDialog"
      ).style.visibility = "hidden");
    } else {
      let dialogBox = (document.querySelector(
        ".confirmDialog"
      ).style.visibility = "visible");
    }
  });
}

let confirmYes = document
  .querySelector(".confirm")
  .addEventListener("click", function (e) {
    let lis = document.querySelector(".ul");
    while (lis.firstChild) {
      lis.removeChild(lis.firstChild);
      popUpMsg("Done!!!", "green");
      removeMsg();
    }
    let dialogBox = (document.querySelector(".confirmDialog").style.visibility =
      "hidden");
  });

let confirmNo = document
  .querySelector(".unconfirm")
  .addEventListener("click", function (e) {
    let dialogBox = (document.querySelector(".confirmDialog").style.visibility =
      "hidden");
  });
=======
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
>>>>>>> 0daaff77adc27808b7474109e59d93c55b391791
