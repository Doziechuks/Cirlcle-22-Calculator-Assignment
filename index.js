
const fourthBox = document.querySelectorAll(".box-4");
const thirdBox = document.querySelectorAll(".box-3");
const display = document.querySelector(".display");
const equalBtn = document.querySelector("#equal");
// console.log({ equalBtn });

for(let box of thirdBox){
  box.addEventListener("click", () => {
    display.value += box.value;
  });
}
fourthBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});

equalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});
