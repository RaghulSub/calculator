var result = 0; // it is the result of the expression

var expression = ""; // it is the expression to display on output display
var output = document.getElementById("output"); // it is the search of the output container

function press(value) {
  // used to parse integer and symbols
  console.log(value);
  if (value != "=" || value != "") {
    expression += value;
    output.innerHTML = expression;
  }
}
function Clear() {
  //function to clear everything and give a new start
  result = 0;
  expression = "";
  output.innerHTML = "0";
}
function backspace() {
  //function to clear last element
  expression = expression.slice(0, -1);
  output.innerHTML = expression;
  console.log(expression);
}
function expressionEvaluation() {
  // function to evaluate the expression
  if (expression.length == 0) {
    expression = "0";
  }

  try {
    // try to check if any error occurs in evaluation
    result = eval(expression);
  } catch (error) {
    output.innerHTML = "Invalid";
  }
  expression = result.toString();
  output.innerHTML = result;
}
