let result = 0;

let anwser = 0;

function start() {
    FirstDigit = document.createElement("input");

    Operation = document.createElement("select");
    FirstoptionofOperation = document.createElement("option");
    FirstoptionofOperation.innerHTML = "-Choose Operation-";
    FirstoptionofOperation.value = 0;


    // +
    ADDoptionOperation = document.createElement("option");
    ADDoptionOperation.innerHTML = "Add";
    ADDoptionOperation.value = 1;

    // *
    MultiplyoptionOperation = document.createElement("option");
    MultiplyoptionOperation.innerHTML = "Multiply";
    MultiplyoptionOperation.value = 2;


    // :
    DivideoptionOperation = document.createElement("option");
    DivideoptionOperation.innerHTML = "Divide";
    DivideoptionOperation.value = 3;

    // -
    SubtractoptionOperation = document.createElement("option");
    SubtractoptionOperation.innerHTML = "Subtract";
    SubtractoptionOperation.value = 4;


    Operation.append(FirstoptionofOperation);
    Operation.append(ADDoptionOperation);
    Operation.append(MultiplyoptionOperation);
    Operation.append(DivideoptionOperation);
    Operation.append(SubtractoptionOperation);



    SecondDigit = document.createElement("input");



    Sign = document.createElement("select");
    Sign.id = "MySign";
    firstoptionofSign = document.createElement("option");
    firstoptionofSign.value = 0;
    firstoptionofSign.innerHTML = "-Choose the sign-";

    biggeroption = document.createElement("option");
    biggeroption.innerHTML = ">";
    biggeroption.value = 1;

    smalleroption = document.createElement("option");
    smalleroption.innerHTML = "<";
    smalleroption.value = 2;

    equaloption = document.createElement("option");
    equaloption.innerHTML = "=";
    equaloption.value = 3;

    Sign.append(firstoptionofSign);
    Sign.append(biggeroption);
    Sign.append(smalleroption);
    Sign.append(equaloption);



    resultcheck = document.createElement("input");

    calculate = document.createElement("button");
    calculate.id = "button1";
    calculate.innerHTML = "Check";


    document.body.append(FirstDigit);
    document.body.append(Operation);
    document.body.append(SecondDigit);
    document.body.append(Sign);
    document.body.append(resultcheck);
    document.body.append(calculate);

    MyDiv = document.createElement("div");
    MyDiv.id = "div1";
    document.body.append(MyDiv);



    document.getElementById("button1").addEventListener("click", function () {
        a = Number(FirstDigit.value);
        operationValue = Operation.value;
        b = Number(SecondDigit.value);
        signValue = Sign.value;
        check = resultcheck.value;


        if (operationValue == 1) {
            result = a + b;
        }

        if (operationValue == 2) {
            result = a * b;
        }

        if (operationValue == 3) {
            result = a / b;
        }

        if (operationValue == 4) {
            result = a - b;
        }

        if (signValue == 1) {
            if (result > check) {
                document.getElementById("div1").className = "correct";
            } else {
                document.getElementById("div1").className = "wrong";
            }
        }

        if (signValue == 2) {
            if (result < check) {
                document.getElementById("div1").className = "correct";
            } else {
                document.getElementById("div1").className = "wrong";
            }
        }

        if (signValue == 3) {
            if (result == check) {
                document.getElementById("div1").className = "correct";
            } else {
                document.getElementById("div1").className = "wrong";
            }
        }

        result = 0;
        anwser = 0;

    });


}