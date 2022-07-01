var counterPlaceHolder = document.getElementById("counter-placeholder");
var number= 0;

function changeColor(number){
     var color = "" 
       if(number < 0){ document.getElementById("counter-placeholder").style.color = "red"}
       else if(number > 0 ){ document.getElementById("counter-placeholder").style.color= "green"}
        else{document.getElementById("counter-placeholder").style.color= "white"}
     }


function incrementFunction(){
    console.log("increase the value")
    number++;
    console.log(number)
    document.getElementById("counter-placeholder").textContent = number;
    document.getElementById("counter-placeholder").style.color= changeColor(number);
}

function decrementFunction(){
    console.log("decrease the value")
    number--;
    document.getElementById("counter-placeholder").textContent = number;
      console.log(number);
      document.getElementById("counter-placeholder").style.color= changeColor(number);
}

















// var placeholder = document.querySelector(".counter-number");
// var increment= document.getElementById("btn-increment2").value;
// var decrement = document.querySelector("#btn-decrement");
// var number= 0;
// console.log(increment)increme
// console.log(document.querySelector("#btn-increment").value)

// function changeColor(number){
//   var color = "" 
//     if(number < 0){ placeholder.style.color= "red"}
//     else if(number > 0 ){ placeholder.style.color= "green"}
//     else{placeholder.style.color= "white"}
//     return color;
// }

// increment.addEventListener("click",function(){
//     console.log("value");
// number++;
// placeholder.innerHTML = number;
// placeholder.changeColor= changeColor(number);
// });

// decrement.addEventListener("click",function(){
//     number--;
//     placeholder.innerHTML = number;
//     placeholder.changeColor= changeColor(number);
//     })
    

