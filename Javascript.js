let memory = 0;

const display = document.querySelector(".display input");

const btnCross = document.querySelector("#btn-on");

btnCross.onclick = function () {
    if (display.value === "") {
        alert("Enter your number");
        return;
    }

    display.value = display.value.slice(0, -1);
};


document.querySelector("#btn-off").onclick = function () {
    display.value = "";
};


const btnSquareRoot = document.querySelector("#btnsquareroot");

btnSquareRoot.onclick = function () {
    if (display.value === "" || Number(display.value) < 0) {
        alert("Enter your valid number");
        return;
    }

    let result = Math.sqrt(Number(display.value));
    display.value = result;
};


const btnPercentage = document.querySelector("#btnpernentage");

btnPercentage.onclick = function () {
    if (display.value === "") {
        alert("Enter your number");
        return;
    }

    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Error";
    }
};


const btnMrc = document.querySelector("#btnmrc");

let mrcClicked = false;

btnMrc.onclick = function () {
    if (!mrcClicked) {
        display.value = memory;
        mrcClicked = true;
    } else {
        memory = 0;
        display.value = "";
        mrcClicked = false;
    }
};


const btnMminus = document.querySelector("#btnm");

btnMminus.onclick = function () {
    if (display.value === "") {
        alert("Enter your number");
        return;
    }

    memory -= Number(display.value);
};


const btnMplus = document.querySelector("#btnmm");

btnMplus.onclick = function () {
    if (display.value === "") {
        alert("Enter your number");
        return;
    }

    memory += Number(display.value);
};


document.querySelector("#btndivison").onclick = function () {
    display.value += "/";
};


document.querySelector("#bnt7").onclick = function () {
    display.value += "7";
};


document.querySelector("#btn8").onclick = function () {
    display.value += "8";
};


document.querySelector("#btn9").onclick = function () {
    display.value += "9";
};


document.querySelector("#btnmultiple").onclick = function () {
    display.value += "*";
};


document.querySelector("#btn4").onclick = function () {
    display.value += "4";
};


document.querySelector("#btn5").onclick = function () {
    display.value += "5";
};


document.querySelector("#btn6").onclick = function () {
    display.value += "6";
};


document.querySelector("#btnminus").onclick = function () {
    display.value += "-";
};


document.querySelector("#btn1").onclick = function () {
    display.value += "1";
};


document.querySelector("#btn2").onclick = function () {
    display.value += "2";
};


document.querySelector("#btn3").onclick = function () {
    display.value += "3";
};


document.querySelector("#btnplus").onclick = function () {
    display.value += "+";
};


document.querySelector("#btn0").onclick = function () {
    display.value += "0";
};


document.querySelector("#btnpoint").onclick = function () {
    display.value += ".";
};


const btnEqual = document.querySelector("#btnequal");

btnEqual.onclick = function () {
    if (display.value === "") {
        alert("Enter valid number");
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Enter valid Number";
    }
};