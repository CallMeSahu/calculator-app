import "./styles.css";
var txtinput1 = document.querySelector("#input-box-1");
var txtinput2 = document.querySelector("#input-box-2");
var btnAdd = document.querySelector("#btn-add");
var btnSubtract = document.querySelector("#btn-subtract");
var btnMultiply = document.querySelector("#btn-multiply");
var btnDivide = document.querySelector("#btn-divide");
var txtOutput = document.querySelector("#output-box");

function addClickHandler() {
  var inputtext1 = parseInt(txtinput1.value, 10);
  var inputtext2 = parseInt(txtinput2.value, 10);
  var result = inputtext1 + inputtext2;
  txtOutput.innerText = result;
}
function subtractClickHandler() {
  var inputtext1 = parseInt(txtinput1.value, 10);
  var inputtext2 = parseInt(txtinput2.value, 10);
  var result = 0;
  if (inputtext1 >= inputtext2) {
    result = inputtext1 - inputtext2;
  } else {
    result = inputtext2 - inputtext1;
  }
  txtOutput.innerText = result;
}
function multiplyClickHandler() {
  var inputtext1 = parseInt(txtinput1.value, 10);
  var inputtext2 = parseInt(txtinput2.value, 10);
  var result = inputtext1 * inputtext2;
  txtOutput.innerText = result;
}
function divideClickHandler() {
  var inputtext1 = parseFloat(txtinput1.value, 10);
  var inputtext2 = parseFloat(txtinput2.value, 10);
  var result = 0;
  if (inputtext1 >= inputtext2) {
    result = inputtext1 / inputtext2;
  } else {
    result = inputtext2 / inputtext1;
  }
  txtOutput.innerText = result.toFixed(4);
}

btnAdd.addEventListener("click", addClickHandler);
btnSubtract.addEventListener("click", subtractClickHandler);
btnMultiply.addEventListener("click", multiplyClickHandler);
btnDivide.addEventListener("click", divideClickHandler);
