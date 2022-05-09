//Main Div
const main = document.createElement("div");
document.body.appendChild(main);

//H1
const h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
main.appendChild(h1);
h1.className = "display-1 text-center text-primary font-weight-bold mb-5";

//Container
const container = document.createElement("div");
main.appendChild(container);
container.className = "container";
//Row
const row = document.createElement("div");
row.className = "row";
container.appendChild(row);

//Col-md-12
const col = document.createElement("div");
col.classList.add("col-md-4");
row.appendChild(col);

const p = document.createElement("p");
p.id = "paragraf";
p.innerHTML = "This is a paragraph";
col.appendChild(p);

p.className = "lead text-center text-primary mb-4";

const button = document.createElement("button");
button.innerHTML = "Change Colors";
col.appendChild(button);
button.className =
  "btn btn-primary btn-lg btn-block mb-4 text-center text-white font-weight-bold";

//column 2
const col2 = document.createElement("div");
col2.classList.add("col-md-4");
row.appendChild(col2);

const div = document.createElement("div");
col2.appendChild(div);
div.className = "card bg-primary text-white mb-4 text-center";

div.style =
  "width : 18rem; margin : 0 auto; padding : 10px; border-radius : 30px; border : 1px solid #ccc; box-shadow : 0 0 10px #ccc";
div.innerText = "This is a card";

function changeColor(element) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.color = "#" + randomColor;
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  element.style.backgroundColor = "#" + randomColor2;
  return element;
}

//query selector example
buton = document.querySelector(".btn");
buton.addEventListener("click", function () {
  changeColor(p);
  changeColor(buton);
  changeColor(h1);
  changeColor(col);
  changeColor(row);
  changeColor(container);
  changeColor(main);
});

//query selector all example
const divs = document.querySelectorAll("div");
divs.forEach(function (div) {
  console.log(div);
});

//getelementbyid example
const paragraf = document.getElementById("paragraf");
paragraf.addEventListener("click", function () {
  paragraf.innerHTML = "This is a new paragraph afer clicking the paragraph";
});
