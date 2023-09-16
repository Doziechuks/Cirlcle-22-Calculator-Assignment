
const fourthBox = document.querySelectorAll(".box-4");
const zeroBtn = document.querySelectorAll(".box-0");
const display = document.querySelector(".display");
const equalBtn = document.querySelector("#equal");
const percentageBtn = document.querySelector("#percentage");
// console.log({ equalBtn });

fourthBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});

zeroBtn.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});

equalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});

percentageBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  const percentage = currentValue / 100;
  const result = percentage * 10; 
  display.value = result;
});

