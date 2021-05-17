var buttonCalci=document.getElementsByClassName('button');
var displayCalci=document.getElementById('display')
var operand1=0;
var operand2=null;
var operator=null;
//let values = [];
//var operatorArray=['+','-','/','*'];
for(var i=0;i<buttonCalci.length;i++){
    buttonCalci[i].addEventListener('click', function(){
        var valueClicked = this.getAttribute('data-value');
        var text = display.textContent;
        
        if(valueClicked==='+'){
            operator = valueClicked ;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
         else if(valueClicked==='-'){
            operator = valueClicked ;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if(valueClicked==='/'){
            operator = valueClicked ;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if(valueClicked==='*'){
            operator = valueClicked ;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if (valueClicked == "ac") {
            display.textContent = "";
        }
        else if (valueClicked == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        }
        else if (valueClicked == ".") {
                display.textContent = text + '.';
            }
        else if (valueClicked == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += valueClicked;
        }
    });
}

        //console.log(valueClicked)
     //   values.push(valueClicked);
     //   displayCalci.innerText=values.join('');
//      if(valueClicked!=='ac'||'='||'+/-'||'+'||'-'||'/'||'*'||'%')
//          displayCalci.innerText=valueClicked;
//         console.log(displayCalci.innerText)

    
       
//            if(valueClicked==='+'){
//             // console.log(valueClicked);
//                operator=valueClicked;
//                operand1=parseFloat(displayCalci.innerText);
//                console.log(operand1)
//                //displayCalci.innerText="";

               

//             }
//             else if (valueClicked == "ac") {
//                 displayCalci.innerText = "";
//             }
//             // else if (value == ".") {
//             //     display.textContent = "";
//             // }

//              else if (valueClicked === "=") {
//                 operand2 = parseFloat(displayCalci.innerText);
//                 var result = eval(operand1 + ' ' + operator + ' ' + operand2);
//                 if (result) {
//                     displayCalci.innerText = result;
//                     operand1 = result;
//                     operand2 = null;
//                     operator = null;
//                 }
//             } else {
//                 displayCalci.innerText += valueClicked;
//             }
       

//     })
// }
    