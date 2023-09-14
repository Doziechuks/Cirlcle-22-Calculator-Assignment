const fourthBox = document.querySelectorAll(".box-4");
const display = document.querySelector(".display");
const equalBtn = document.querySelector("#equal");
// console.log({ equalBtn });

fourthBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});

equalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});
