let balance = 5000;

const bal = document.getElementById("balance");
const amt = document.getElementById("amount");

document.getElementById("deposit").onclick = () => {
    let a = Number(amt.value);
    if (a > 0) {
        balance += a;
        bal.innerText = "" + balance;
    }
};

document.getElementById("withdraw").onclick = () => {
    let a = Number(amt.value);
    if (a > 0 && a <= balance) {
        balance -= a;
        bal.innerText = "" + balance;
    }
};
