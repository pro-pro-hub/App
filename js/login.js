import checkUser from "./user.js";
const passwordInput = document.getElementById("password");
const showBtn = document.getElementById("showbtn");
const show = document.getElementById("show");
const form = document.querySelector("form");
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length) {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
});
showBtn.addEventListener("click", () => {
  showBtn.classList.toggle("show-password");
  if (showBtn.classList.contains("show-password")) {
    show.src = "/img/icons/hide.PNG";
    passwordInput.type = "text";
  } else {
    show.src = "/img/icons/see.PNG";
    passwordInput.type = "password";
  }
});

const validateLogin = (text, bool) => {
  const errElement = document.createElement("article");
  if (!bool) {
    errElement.classList.add("errmsg");
  } else {
    errElement.classList.add("successmsg");
  }
  errElement.textContent = text;
  setTimeout(() => {
    document.querySelector("body").appendChild(errElement);
  }, 2000);
  setTimeout(() => {
    document.querySelectorAll(".errmsg").forEach((element) => {
      element.remove();
    });
  }, 5000);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = form.querySelector("#user").value;
  const password = form.querySelector("#password").value;
  const isUserValid = checkUser(user.trim(), password.trim());
  if (!user || !password) {
    validateLogin("Username or password cannot be empty!", false);
  } else if (!isUserValid) {
    validateLogin(
      "An account with that username or password does not exist!",
      false
    );
  } else {
    validateLogin("Login Successfull!", true);
    const home = location.href.replace("login", "home");
    setTimeout(() => {
      location.assign(home);
    }, 5000);
  }
});
