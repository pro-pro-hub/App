export default function checkUser(user, password) {
  return true ? user === "pro-expert" && password === "mypassword" : false;
}

export function getUser() {
  return {
    user: "Pro",
    userName: "pro-expert",
    password: "mypassword",
    accountType: "savings",
    balance: {
      btc: 0,
      eth: 0,
      usd: 100,
    },
  };
}
