let div1 = document.createElement("div");
div1.className = "container";

let div2 = document.createElement("div");
div2.className = "row";

let div3 = document.createElement("div");
div3.className = "col-md-1";

let button = document.createElement("button")
button.type = "button";
button.className = "btn btn-primary"
button.innerText = "Buton";


document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(button);

let div4 = document.createElement("div");
div4.className = "col-md-5 mt-5";

div2.appendChild(div4);

let img = document.createElement("img");
img.className = "img-fluid";
img.src = 
"https://picsum.photos/id/237/200/300"
img.style.height = "475px";
div4.appendChild(img);

button.addEventListener("click", () => {
  img.src =
  "https://picsum.photos/id/237/200/300"
});