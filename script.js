const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultOutput = document.getElementById("result");
const operationButtons = document.querySelectorAll("[data-operation]");

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculate(button.dataset.operation);
  });
});

function calculate(operation) {
  const firstValue = number1Input.value;
  const secondValue = number2Input.value;

  if (firstValue === "" || secondValue === "") {
    resultOutput.textContent = "Please enter both numbers.";
    return;
  }

  const number1 = parseFloat(firstValue);
  const number2 = parseFloat(secondValue);
  let answer;

  if (operation === "add") {
    answer = number1 + number2;
  } else if (operation === "subtract") {
    answer = number1 - number2;
  } else if (operation === "multiply") {
    answer = number1 * number2;
  } else if (operation === "divide") {
    if (number2 === 0) {
      resultOutput.textContent = "Cannot divide by zero.";
      return;
    }

    answer = number1 / number2;
  }

  resultOutput.textContent = answer;
}