let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
screen.value = "0";
let screenValue = "";
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText=="X"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else if(buttonText == "C"){
            screenValue = "0";
            screen.value = screenValue;
        }
        // else if(screen.value == "0"){
        //     if(buttonText=="1" || buttonText=="2" || buttonText=="3" || buttonText=="4" || buttonText=="5"|| buttonText == "6" || buttonText == "7" || buttonText =="8" || buttonText == "9" || buttonText=="(" || buttonText==")" || buttonText=="."){
        //         screen.value = 
        //     }

        // }
        else{
            if(screen.value=="0"){
                screenValue = buttonText;
                screen.value = screenValue;
            }
            else{
                screenValue += buttonText;
                screen.value = screenValue;

            }
        }
    })
}