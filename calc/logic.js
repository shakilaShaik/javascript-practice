const btns = document.getElementsByClassName("button");
  const input = document.getElementById("inputNum");


function display(val) {
  input.value += val;
}

let res = 0;
let op = "";
let firstNbr = 0;

function operator(operand) {
  const input = document.getElementById("inputNum");
  firstNbr = parseFloat(input.value);
  op = operand;

  console.log(firstNbr, "first nbr is");
  console.log("operand is", op);

  input.value = "";
}

function calc(firstNbr, op) {
  console.log("the = is clicked and calc is triggered", firstNbr, op);

  secondNbr = parseFloat(input.value);
  console.log("second Nbr is", secondNbr);


  
  if (secondNbr == NaN) {
    alert("enter a valid number");
    return;
  }

  switch (op) {
    case "+":
      res = firstNbr + secondNbr;

      break;

    case "*":
      res = firstNbr * secondNbr;
      break;
    case "-":
      res = firstNbr - secondNbr;
      break;
    case "/":
      if (secondNbr == 0) {
        alert("cant divide with zero");
        res = firstNbr / secondNbr;
      }
    default:
  }
  console.log("the result is ", res);
  input.value = res;
}


function clearInput() {
  input.value = "";
}