window.onload =  function greeting(){
    var fName = prompt("What is your first name?");
    if(fName == "" || null){
        fName = "User"
        document.getElementById("greeting").innerHTML = "Hello, " + fName + "." 
    }
 else {
document.getElementById("greeting").innerHTML = "Hello, " + fName + ".";
}
}
//function for the budget input 
function budget(){
    if(document.getElementById("budget").value == ""||null){
        document.getElementById("budget-text").innerHTML =   document.getElementById("budget-text").innerHTML;
        document.getElementById("total").innerHTML =  document.getElementById("total").innerHTML;
        document.getElementById("budget").value = "";
        document.getElementById("modal-box").style.display = "block"
        document.getElementById("warning").innerHTML = "Please enter a <b>valid</b> budget value!";
    }else{
    document.getElementById("budget-text").innerHTML = document.getElementById("budget").value;
    document.getElementById("total").innerHTML = document.getElementById("budget").value;
    document.getElementById("budget").value = "";
}}
//function for the budget calculation
function calculate(){
     if(document.getElementById("expense").value == "" &&   document.getElementById("expense-text").innerHTML >1){
        document.getElementById("budget-text").innerHTML =   document.getElementById("budget-text").innerHTML
        document.getElementById("expense-text").innerHTML =   document.getElementById("expense-text").innerHTML
        document.getElementById("modal-box").style.display = "block"
        document.getElementById("warning").innerHTML = "Please enter a value!";
  
    }
    else if(document.getElementById("expense-name").value == "" &&   document.getElementById("budget-text").innerHTML >1){
        document.getElementById("budget-text").innerHTML =   document.getElementById("budget-text").innerHTML
        document.getElementById("expense-text").innerHTML =   document.getElementById("expense-text").innerHTML
        document.getElementById("modal-box").style.display = "block"
        document.getElementById("warning").innerHTML = "Please enter a value!";
  
    }
    else if(document.getElementById("expense-name").value == "" || null || NaN){
        document.getElementById("expense-text").innerHTML ="0";
        document.getElementById("total").innerHTML = "0";
        document.getElementById("modal-box").style.display = "block"
        document.getElementById("warning").innerHTML = "Please enter a value!";
  
    }
    else if(document.getElementById("expense").value == "" || null || NaN){
        document.getElementById("expense-text").innerHTML ="0";
        document.getElementById("total").innerHTML = "0";
        document.getElementById("modal-box").style.display = "block"
        document.getElementById("warning").innerHTML = "Please enter a value!";
    } else if(document.getElementById("total").innerHTML < 0){
        document.getElementById("total").style.color = "#b71c1c"
    }  
    else{
    var initial = parseInt(document.getElementById("expense-text").innerHTML);
    var current = parseInt( document.getElementById("expense").value);
document.getElementById("expense-text").innerHTML = (initial + current);
document.getElementById("total").innerHTML = document.getElementById("total").innerHTML - current;
const mainDiv = document.createElement("div");
const expDiv = document.createElement("div");
const expP = document.createElement("p");
const expText = document.getElementById("expense-name").value
const noder = document.createTextNode(expText);
expP.appendChild(noder);
expDiv.appendChild(expP);
const valDiv = document.createElement("div");
const valP = document.createElement("p");
const valText = document.getElementById("expense").value;
const noder2 = document.createTextNode(valText);
valP.appendChild(noder2);
valDiv.appendChild(valP);
mainDiv.appendChild(expDiv);
mainDiv.appendChild(valDiv);
mainDiv.className = "expCon"
document.getElementById("exp-div").appendChild(mainDiv);
document.getElementById("expense-name").value = "";
document.getElementById("expense").value = "";
} if(document.getElementById("total").innerHTML < 0){
    document.getElementById("total").style.color = "#f32d1f"
}  
if (document.getElementById("total").innerHTML > 0){
    document.getElementById("total").style.color = "#00D157"
}}
function reset(){
    document.getElementById("budget-text").innerHTML = 0;
    document.getElementById("total").innerHTML = 0;
    document.getElementById("expense-text").innerHTML = 0;
    document.getElementById("exp-div").innerHTML ="";
}
var modal = document.getElementById("modal-box");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-box")) {
        document.getElementById("modal-box").style.display = "none";
    }
  }
  
//for the dark mode 
function changeMode() {
    var element = document.body
    element.classList.toggle("dark-mode");
  }

  function mDown (obj) {
    obj.style.transform = 'scale(0.8)'
    obj.style.color = "#000000";
   }
   function mUp (obj) {
    obj.style.color ="#ffffff";
       obj.style.transform = 'scale(1)';
          }
  
