const fourthBox = document.querySelectorAll(".box-4");
const display = document.querySelector(".display");
const val = document.querySelector('input').value;


fourthBox.forEach((box) => {
    box.addEventListener("click", (e) =>{
        display.value += box.value;
    })
})
