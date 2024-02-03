const resultDisplay = document.querySelectorAll('.result')[0];
let operation = "";
let operationResult = "";


const appendNumberToDisplay = (number) => {
    operation = operation + number; 
    resultDisplay.innerText = operation;
}


const operationResultDisplay = (res) => {
    operationResult = res;
    resultDisplay.innerText = operationResult;
}

const calculateResult = () => {
    try {
        const result = eval(operation);
        operationResultDisplay(result);
        operation = "";
    }
    catch(error){
        resultDisplay.innerText = "Error";
        operation = "";
    }
}

const allDelete = () => {
    operation = "";
    appendNumberToDisplay(operation);
}

const lastDelete = () => {
    operation = operation.slice(0, -1); 
    appendNumberToDisplay("");
}

