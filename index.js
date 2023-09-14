

// 
const output = document.querySelector(".eval");
const display = document.querySelector(".display");
const box = document.querySelector(".box")
const inpu = document.querySelector(".button")

 
let calc = ""
console.log(display.value)
box.addEventListener("click",(e)=>{

    calc += e.target.value
    display.value = calc;
   

    
})



