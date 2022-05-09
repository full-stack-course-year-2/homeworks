

const acıklama= document.createElement("h3");
acıklama.setAttribute("id","acıklama");
acıklama.textContent="Hesap makinasını calıstırmak icin 1.inputa SAYI 2.inputa OPERATOR, 3.inputa SAYI giriniz.";
document.body.appendChild(acıklama)




const number1= document.createElement("input");
number1.setAttribute("type","number");
number1.setAttribute("id","number1");
document.body.appendChild(number1)

const operator= document.createElement("input");
operator.setAttribute("type","text");
operator.setAttribute("id","operator");
document.body.appendChild(operator)

const number2= document.createElement("input");
number2.setAttribute("type","number");
number2.setAttribute("id","number2");
document.body.appendChild(number2); 
 
const btn = document.createElement("button");
btn.innerHTML = "HESAPLA";
document.body.appendChild(btn);

const result= document.createElement("h1");
result.setAttribute("id","resultH1");
result.textContent="Result :";
document.body.appendChild(result)



function calculateThat() {
    let calculation;
    let op = operator.value;
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    console.log(op)
    console.log(num1);
    console.log(num2)

    if (!Number(num1) || !Number(num2)) {
        alert("Please enter a number.");
    } else if (op == "*") {
        calculation = num1 *num2;
        console.log(calculation)
        result.textContent = "Result :" +calculation;
    } else if (op == "-") {
        calculation = num1 - num2;
        result.textContent = "Result:"+calculation;
    } else if (op == "+") {
        calculation = num1+num2;
        result.textContent = "Result:"+calculation;
    } else if (op == "/") {
        calculation = num1 / num2;
        result.textContent = "Result:"+calculation.toFixed(2);
    } else {
        alert("Wrong input. Please type one of the following  operators : + - * /.");
    }

    if (calculation < 100) {
        result.style.color = "green";
    } else {
        result.style.color = "blue";
    }
}

btn.addEventListener("click",(calculateThat));

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#e6ae6e";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#9dedbe";
});


 