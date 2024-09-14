function dispalyclear() {
    document.getElementById('enter-value').value = " ";
}

function appendToDisplay(value) {
    document.getElementById("enter-value").value += value;
}
function displayResult() {
    let dispaly = document.getElementById('enter-value');
try {
    dispaly.value = eval(dispaly.value)
} 
catch (error) {
    dispaly.value = 'error'
}

}
