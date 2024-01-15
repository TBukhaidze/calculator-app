let a = ""; //first number
let b = ""; //second number
let sign = ""; //math operation
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["-", "+", "*", "X", "/", "%"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

function toggleSign() {
  if (b === "") {
    a = a * -1;
    out.textContent = a;
  } else {
    b = b * -1;
    out.textContent = b;
  }
}

function mathOperation() {
  switch (sign) {
    case "+":
      a = parseFloat((+a + +b).toFixed(2));
      break;
    case "-":
      a = parseFloat((a - b).toFixed(2));
      break;
    case "*":
      a = parseFloat((a * b).toFixed(2));
      break;
    case "X":
      a = parseFloat((a * b).toFixed(2));
      break;
    case "/":
      if (b === "0") {
        out.textContent = "Error";
        a = "";
        b = "";
        sign = "";
        return;
      }
      a = parseFloat((a / b).toFixed(2));
      break;
  }
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  const key = event.target.textContent;

  // if click number 0-9
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, sign, b);
    return;
  }

  // if clicked math operation and clicked math operation secont time
  if (operations.includes(key)) {
    if (a !== "" && b !== "" && !finish) {
      mathOperation();
      finish = true;
      out.textContent = a;
    }

    // new math operations
    sign = key;
    console.log(a, sign, b);
  }

  // if clicked equal
  if (key === "=" && sign !== "") {
    if (b === "") b = a;
    mathOperation();
    finish = true;
    out.textContent = a;
    console.log(a, sign, b);
  }

  if (key === "+/-") {
    toggleSign();
    console.log(a, sign, b);
    return;
  }

  if (key === "%") {
    if (b === "") {
      a = a / 100;
      out.textContent = a;
    } else {
      b = b / 100;
      out.textContent = b;
    }
    console.log(a, sign, b);
  }
};

document.addEventListener("keydown", function (event) {
  const key = event.key;

  // if clicked number 0-9
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, sign, b);
    return;
  }

  // if clicked math operation
  if (operations.includes(key)) {
    if (a !== "" && b !== "" && !finish) {
      mathOperation();
      finish = true;
      out.textContent = a;
    }

    // new math operation
    sign = key;
    console.log(a, sign, b);
  }

  // if clicked Enter (=)
  if (key === "Enter" && sign !== "") {
    if (b === "") b = a;
    mathOperation();
    finish = true;
    out.textContent = a;
    console.log(a, sign, b);
  }

  // if clicked +/-
  if (key === "+/-") {
    toggleSign();
    console.log(a, sign, b);
    return;
  }

  // if clicked %
  if (key === "%") {
    if (b === "") {
      a = a / 100;
      out.textContent = a;
    } else {
      b = b / 100;
      out.textContent = b;
    }
    console.log(a, sign, b);
  }
});
