import { getUser } from "./user.js";
import getCryptoPrice from "./crypto-price.js";
const user = getUser();
console.log(user);
document.getElementById("user").textContent = `${user.user}!`;
const btc = user.balance.btc * getCryptoPrice("btc");
const eth = user.balance.eth * getCryptoPrice("eth");
const usd = user.balance.usd;
const format = (num) => {
  const parts = num.split(".");
  const all =
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (parts[1] ? "." + parts[1] : "");
  return all;
};
const totalBal = format((btc + eth + usd).toFixed(2));
console.log(totalBal);
document.getElementById("accbal").textContent = totalBal;

class UserAction {
  constructor() {}
  processClick = (text) => {
    const requests = [
      "add funds",
      "send funds",
      "deposit and bills payment",
      "crypto currency",
      "international transfer",
      "biometric verification",
    ];
    if (text === requests[0]) {
      this.addFunds();
    } else if (text === requests[1]) {
      this.sendFunds();
    } else if (text === requests[2]) {
      this.depositAndBills();
    } else if (text === requests[3]) {
      this.cryptoCurrency();
    } else if (text === requests[4]) {
      this.internationalTransfer();
    } else {
      this.biometrics();
    }
  };
  addFunds = () => {
    return;
  };
  sendFunds = () => {
    const newLocation = location.href.replace("home", "transfer");
    location.assign(newLocation);
  };
  depositAndBills = () => {
    return;
  };
  cryptoCurrency = () => {
    return;
  };
  internationalTransfer = () => {
    return;
  };
  biometrics = () => {
    return;
  };
}

const userAction = new UserAction();
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () =>
    userAction.processClick(
      button.querySelector("span").textContent.toLowerCase()
    )
  );
});
