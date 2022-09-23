let qtyClicked = 0;
let qtyAdd = false;
let qtySubtract = false;
let qtyMultiply = false;
let qtyDivision = false;
let firstNumb  = "";
let secondNumb = "";
let displayNumb = document.querySelector(".display div h2")


const numpadArea = document.querySelector(".numpad");
numpadArea.addEventListener("click", (event) => {
    if (event.target.id == "equal") {
        if (qtyAdd) {
            const firstNumbInterger = parseInt (firstNumb.replace('+', ''));
            const secondNumbInterger = parseInt (secondNumb);
            displayNumb.innerText = `${Operacao.somar(firstNumbInterger, secondNumbInterger)}`
        } else if (qtySubtract) {
            const firstNumbInterger = parseInt (firstNumb.replace('-', ''));
            const secondNumbInterger = parseInt (secondNumb);
            displayNumb.innerText = `${Operacao.subtrair(firstNumbInterger, secondNumbInterger)}`
        } else if (qtyMultiply) {
            const firstNumbInterger = parseInt (firstNumb.replace('x', ''));
            const secondNumbInterger = parseInt (secondNumb);
            displayNumb.innerText = `${Operacao.multiplicar(firstNumbInterger, secondNumbInterger)}`
        } else if (qtyDivision) {
            const firstNumbInterger = parseInt (firstNumb.replace('÷', ''));
            const secondNumbInterger = parseInt (secondNumb);
            displayNumb.innerText = `${Operacao.dividir(firstNumbInterger, secondNumbInterger)}`
        }
    } else if (event.target.id === "ac1") {
        firstNumb = "";
        secondNumb = "";
        qtyClicked = 0;
        qtyAdd = false;
        qtySubtract = false;
        qtyMultiply = false;
        qtyDivision = false;
        displayNumb.innerText = "0";
    } else if (event.target.id.length == 1) {
        concatenateString(event.target.id)
    }
})


const mathArea = document.querySelector(".mathButtons");
mathArea.addEventListener("click", (event) => {
    console.log(event.target.id)
    qtyClicked = qtyClicked + 1;
    if (event.target.id == 'add') {
        firstNumb = firstNumb + "+";
        qtyAdd = true
        displayNumb.innerText = `${firstNumb}`
    } else if (event.target.id == 'subtract') {
        firstNumb = firstNumb + "-";
        qtySubtract = true
        displayNumb.innerText = `${firstNumb}`
    } else if (event.target.id == 'multiply') {
        firstNumb = firstNumb + "×";
        qtyMultiply = true
        displayNumb.innerText = `${firstNumb}`
    } else if (event.target.id == 'division') {
        firstNumb = firstNumb + "÷";
        qtyDivision = true
        displayNumb.innerText = `${firstNumb}`
    }
})

function concatenateString (id) {
    if (qtyClicked == 0) {
        firstNumb = firstNumb + id;
        displayNumb.innerText = `${firstNumb}`
    } else {
        secondNumb = secondNumb + id;
        displayNumb.innerText = `${firstNumb}${secondNumb}`
    }
}


class Operacao {
    static somar (numero1, numero2) {
        return numero1 + numero2
    }

    static subtrair (numero1, numero2) {
        return numero1 - numero2
    }

    static multiplicar (numero1, numero2) {
        return numero1 * numero2
    }

    static dividir (numero1, numero2) {
        return numero1 / numero2
    }
}


