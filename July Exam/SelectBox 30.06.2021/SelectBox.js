let BoxClicked = [];

let a = 0;

function Start() {
    for (let i = 1; i <= 5; i++) {
        let myDiv = document.createElement("div");
        myDiv.id = i;
        document.body.append(myDiv);
        document.getElementById(i).addEventListener("click", function () {
            BoxClicked.push(i);
            document.getElementById(i).className = "red";
            setTimeout(function () {
                document.getElementById(i).className = "white";
            }, 1000);
        })
    }

    let myButton = document.createElement("button");
    myButton.append("Play");
    myButton.addEventListener("click", function () {
        let deleteInterval = setInterval(function () {
            if (a == BoxClicked.length) {
                BoxClicked.splice(0, BoxClicked.length);
                a = 0;
                clearInterval(deleteInterval);
            }
            else {
                document.getElementById(BoxClicked[a]).className = "red";
                setTimeout(function () {
                    document.getElementById(BoxClicked[a - 1]).className = "white";
                }, 700);
                a++;
            }
        }, 1000);
    });
    document.body.append(myButton);

}
