

var display = document.getElementById("display")

function appendToDispaly(input){
    display.value += input;
}

function calculate(){
    try {
        display.value = eval(display.value)
        
    } catch (error) {
        display.value =  "Error"
    }
}

function claerDispaly(){
   display.value = "";
}