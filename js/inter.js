import { getUser } from "./user.js";
document.getElementById("back").addEventListener("click", () => {
  const back = location.href.replace("paycheck-international", "home");
  location.assign(back);
});
class Transaction {
  constructor() {
    this.deci = "";
    this.int = "";
    this.amount = document.getElementsByClassName("amount");
    this.recieverInput = document.getElementById("reciever");
    this.reciever = document.getElementsByClassName("reciever")[0];
    this.accountType = document.getElementById("account-type");
    this.numberBtns = document.getElementsByClassName("input-num");
    this.removeNum = document.getElementById("remove");
    this.currency = document
      .getElementById("currency")
      .querySelectorAll("span");
  }
  removeChoice = () => {
    this.currency.forEach((curr) => {
      curr.classList.remove("choice");
    });
  };
  makeAmountChange = (int, deci) => {
    const formInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const num = (formInt + "." + deci).replace(/^\./, "0.");
    for (const am of this.amount) {
      am.textContent = num;
    }
  };
  removeNumInput = () => {
    this.removeNum.addEventListener("click", () => {
      if (this.deci > 0) this.deci = this.dec.slice(0, 1);
      else {
        this.int = this.int.slice(0, this.int.length - 1);
      }
    });
  };
  makeRecieverChange = (text) => {
    this.reciever.textContent = text;
  };
  appendNum = (num) => {
    if (this.deci.length < 2) {
      this.deci += num;
    } else if (this.int.length < 9) {
      this.deci += num;
      this.int += this.deci.charAt(0);
      this.deci = this.deci.slice(1);
    } else if (this.int.charAt(0) === "0") {
      this.int = "";
      this.deci = "";
    } else {
      return;
    }
    this.makeAmountChange(this.int, this.deci);
    this.removeNumInput();
  };
}
const transaction = new Transaction();

transaction.accountType.textContent = `${getUser().accountType} account`;

for (const choice of transaction.currency) {
  choice.addEventListener("click", () => {
    transaction.removeChoice();
    choice.classList.add("choice");
  });
}

transaction.recieverInput.addEventListener("input", (event) => {
  transaction.makeRecieverChange(event.target.value);
});

for (const button of transaction.numberBtns) {
  button.addEventListener("click", (event) => {
    transaction.appendNum(event.target.textContent);
  });
}
