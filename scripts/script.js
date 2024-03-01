// We will need 10 buttons of numbers 0-9
// We need the buttons for our operators +-/* 
// We will need a clear button AND a equals button 
// We will need a display area
// We will need a delete button


// Build our first number
// Select an operator
// Build our second number
// Click the equals button to complete our math
// clicking an operator should complete the math equation we just did and then make a new equation
// After an equation has happened, hitting a number key clears out the previous equation and starts building a new first number for a new equation 
// Use the clear button to clear any equation thats done or when you just want to clear your current one
// Use the delete button to erase a number instead of clearing the whole screen.

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnDelete = document.getElementById("btnDelete")
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");
let displayArea = document.getElementById("displayArea");
let stringNumber = "";
let operatorSaved = "";
let num1 = 0;
let num2 = 0; 
let result = 0; 



// The following is the function that dictates the behavior of our number keys
function numberPress(btnNum){
     
    if(result != 0){
        resetCalc();
    }
    stringNumber += btnNum; 
    console.log(stringNumber);

    updateDisplay(); 

}

// Functions When you press any number or operator
function opPress(op){
    // if our result is NOT 0, we can assume we are trying to continue doing math with our current result as the first number
    if(result != 0){
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // if we have our first number and not started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved = op;
    }
    // if we have our first number and we HAVE started building the second number, we want to do "math" and then continue on with our new equation
    else if(num1 != 0 && stringNumber != ""){
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // by process of elimination, we know that we were just building our 1st number and need to save it to continue on to building our second number
    else{
    operatorSaved = op; 
    num1 = Number(stringNumber);
    stringNumber = "";    
    }
    
    updateDisplay(); 
}

// Updates our display
function updateDisplay(){
    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber
    }

}

// this clears out the saved values so we start over completely 
function resetCalc(){
    stringNumber = ""; 
    operatorSaved = "";
    num1 = 0;
    num2 = 0;  
    result = 0;
    updateDisplay();
}

// does the math functions of any equation you give it
function doMath(){
    num2 = Number(stringNumber);
    stringNumber = "";
    switch(operatorSaved){
        case "+": 
            result = num1 + num2; 
            break; 
        
        case "-":
            result = num1 - num2;
            break; 

        case "X":
            result = num1 * num2;
            break; 
        
        case "÷": 
            result = num1 / num2;
            break;
    }
}

// Deletes any number you put in
 function backSpace() {
        // the slice method removes the last number in the string. 0 is that start and -1 is working backwards from it.
        stringNumber = stringNumber.slice(0, -1);
        updateDisplay();
 }


// Performs the appropriate math. 
btnEqual.addEventListener("click", function(){
    doMath();
    displayArea.innerText = result; 
});

// resets the calculator 
btnClear.addEventListener("click", function(){
    resetCalc();
});

// Number keys
btn0.addEventListener("click", function(){
    numberPress("0");
});
btn1.addEventListener("click", function(){
    numberPress("1");
});
btn2.addEventListener("click", function(){
    numberPress("2");
});
btn3.addEventListener("click", function(){
    numberPress("3");
});
btn4.addEventListener("click", function(){
    numberPress("4");
});
btn5.addEventListener("click", function(){
    numberPress("5");
});
btn6.addEventListener("click", function(){
    numberPress("6");
});
btn7.addEventListener("click", function(){
    numberPress("7");
});
btn8.addEventListener("click", function(){
    numberPress("8");
});
btn9.addEventListener("click", function(){
    numberPress("9");
});

//Operators
btnPlus.addEventListener("click", function(){
    opPress("+");
});
btnMinus.addEventListener("click", function(){
    opPress("-");
});
btnMulti.addEventListener("click", function(){
    opPress("X");
});
btnDivide.addEventListener("click", function(){
    opPress("÷");
});

// Reset buttons
btnClear.addEventListener("click", function(){
    resetCalc();
});
btnDelete.addEventListener("click", function(){
  backSpace();
});
