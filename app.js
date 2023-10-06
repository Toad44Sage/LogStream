let resultNumber = document.querySelector(".calculator_input");
let numberButtons = document.querySelectorAll(".button_number");
let operationButtons = document.querySelectorAll(".button_operation");
const resultHistory = document.querySelector(".result-history");
let state = 0;

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerText === "C") {
      resultNumber.value = "";
      state = 0;
    } else if (button.innerText === "()") {
      if (state === 0) {
        resultNumber.value = resultNumber.value + "(";
        state = 1;
      } else {
        resultNumber.value = resultNumber.value + ")";
        state = 0;
      }
    } else {
      resultNumber.value = resultNumber.value + button.innerText;
    }
  });
});

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerText === "=") {
      if (resultNumber.value != "") {
        function result() {
          resultNumber.value = eval(resultNumber.value);
          function addToResultHistory() {
            const resultItem = document.createElement("div");
            resultItem.textContent = `Результат: ${resultNumber.value}`;
            resultHistory.appendChild(resultItem);
          }
          addToResultHistory();
        }
        result();
      } else {
        alert("Пустое значение!");
      }
    } else {
      resultNumber.value = resultNumber.value + button.innerText;
    }
  });
});

resultNumber.addEventListener("input", function () {
  let inputValue = resultNumber.value;
  let cleanedValue = inputValue.replace(/[^0-9()+\-*/]/g, "");
  resultNumber.value = cleanedValue;
});
