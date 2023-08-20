const main = document.querySelector("main");
const button = document.querySelector("button");
main.addEventListener("click", () => {
    main.style.backgroundImage = "url(/img/paycheck2.png)";
    button.style.display = "flex";
});
button.addEventListener("click", () => {
    const loginPage = location.href.replace("index", "login");
    location.assign(loginPage);
});