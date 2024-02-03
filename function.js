function operate(operator) {
    let a = Number(document.getElementById("firstnumber").value);
    let b = Number(document.getElementById("secondnumber").value);
    let result;

    switch (operator) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'divi':
            result = a / b;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = "The result is: " + result;
}

function add() {
    operate('add');
}

function sub() {
    operate('sub');
}

function mul() {
    operate('mul');
}

function divi() {
    operate('divi');
}



function resetValues() {
    document.getElementById("firstnumber").value = "";
    document.getElementById("secondnumber").value = "";
    document.getElementById("result").innerHTML = "";
}