var result = 0; // it is the result of the expression

var expression = ""; // it is the expression to display on output display
var output = document.getElementById("output"); // it is the search of the output container

function press(value) {
  // press() function used to handle every number and symbols except equal

  if (value != "=" || value != "") {
    // used to parse integer and symbols

    expression += value;
    output.innerHTML = expression;
  }
}
function Clear() {
  //function to clear everything and give a new start
  result = 0;
  expression = "";
  output.innerHTML = result;
}
function backspace() {
  //function to clear last element
  expression = expression.slice(0, -1);
  if (expression.length == 0) {
    // once the expression's length is reduced to zero everything is clear;
    expression = "";
    result = 0;
    output.innerHTML = result;
  } else {
    output.innerHTML = expression;
  }
}

function remove_leading_zeros(exp) {
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] != "0") {
      return exp.substring(i);
    }
  }
  return exp;
}

function expressionEvaluation() {
  // function to evaluate the expression
  if (expression.length == 0) {
    result = 0;
    output.innerHTML = result;
  }
  console.log("Result:" + expression);

  try {
    // try to check if any error occurs in evaluation

    if (expression.length != 0) {
      expression = remove_leading_zeros(expression);
      result = eval(expression);
    } else {
      result = 0;
    }
  } catch (error) {
    console.log(error);
    output.innerHTML = "Invalid";
  }
  expression = result.toString();
  output.innerHTML = expression;
}
