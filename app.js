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
