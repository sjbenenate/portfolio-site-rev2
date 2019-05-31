console.log("output again1");
var log = function(msg) {
  console.log(msg);
};

var calc = new Object();
calc.operator =  "bad";
calc.operands = ["", ""];
calc.input_operand = 0;

calc.switchInputToSecondOperand = function() {
    calc.input_operand = 1;
};

 calc.switchInputToFirstOperand = function() {
    calc.input_operand = 0;
 };

calc.addDigitToOperand = function(digit) {
    calc.operands[calc.input_operand] = calc.operands[calc.input_operand] + digit;

    console.log(calc.operands[calc.input_operand]);
};

calc.resetOperands = function() {
    calc.operands = ["", ""];
};

calc.clear = function() {
  calc.switchInputToFirstOperand();
  calc.resetOperands();
};

calc.calc = function() {
  log("calculating");
  let operand1_int = parseInt(calc.operands[0], 2);
  let operand2_int = parseInt(calc.operands[1], 2);
  
  log(operand1_int);
  log(operand2_int);
  let result = 0;
  
  log(calc.operator);
  switch(calc.operator) {
    case "sum":
      result =  (operand1_int + operand2_int);
      break;
    case "sub":
      result =  (operand1_int - operand2_int);
      break;
    case "mul":
      result =  (operand1_int * operand2_int);
      break;
    case "div":
      result =  (operand1_int / operand2_int);
      break;
  }
  
  log(result);
  return result.toString(2);
};

var res = document.getElementById('res');

res.append = function(msg) { 
  res.innerHTML = res.innerHTML + msg 
};

res.print = function(msg) {
 res.innerHTML = msg;
};

res.update = function() {
  console.log("updating...");
  res.print(calc.calc());
};

var clearIfStartingAfterEquals = function() {
  if(calc.input_operand === 0 && calc.operands[0].length < 1)
    {
      res.print("");
    }
};

res.print("");




var btn0_click = function(){
  clearIfStartingAfterEquals();
  res.append("0");
  calc.addDigitToOperand("0");
};

var btn1_click = function(){
  clearIfStartingAfterEquals();
  res.append("1");
  calc.addDigitToOperand("1");
};

var clr_click = function(){
  res.print("");
  calc.clear();
};

var eql_click = function(){
  console.log("equals");
  res.update();
  calc.clear();
};

var sum_click = function() {
  res.append("+");
  calc.operator = "sum";
  calc.switchInputToSecondOperand();
};

var sub_click = function() {
  res.append("-");
  calc.operator = "sub";
  calc.switchInputToSecondOperand();
};

var mul_click = function() {
  res.append("*");
  calc.operator = "mul";
  calc.switchInputToSecondOperand();
};

var div_click = function() {
  res.append("/");
  calc.operator = "div";
  calc.switchInputToSecondOperand();
};



document.getElementById("btn0").addEventListener("click", btn0_click);
document.getElementById("btn1").addEventListener("click", btn1_click);
document.getElementById("btnClr").addEventListener("click", clr_click);
document.getElementById("btnEql").addEventListener("click", eql_click);
document.getElementById("btnSum").addEventListener("click", sum_click);
document.getElementById("btnSub").addEventListener("click", sub_click);
document.getElementById("btnMul").addEventListener("click", mul_click);
document.getElementById("btnDiv").addEventListener("click", div_click);
