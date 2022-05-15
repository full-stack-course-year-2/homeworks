
    let title1 = document.createElement("div")
    title1.className = "container";
    let title2 = document.createElement("div")
    title1.className = "row"

    let title3 = document.createElement("div");
    title3.className = "com-md-12 mt-5"
    title3.style.backgroundColor = "yellow"

    let titleText = document.createElement("h1")
    titleText.className = "main-title";              
    titleText.innerText = "My Favorite Images";
    titleText.style.textAlign = "center"
    titleText.style.color ="blue"

    let text1 = document.createElement("div")
    text1.className = "container";

    let text2 = document.createElement("div")
    text2.className = "container";

    let text = document.createElement("p") 
    text.className = "paragraph";                   
    text.innerText = "You can see my favorite pictures via the buttons below.";
    text.style.textAlign = "center"

    


let div1= document.createElement("div");
div1.className = "container";

let div2 = document.createElement("div");
div2.className = "row";

let div3 = document.createElement("div");
div3.className= "col-md-2 mt-5";

let div4 = document.createElement("div")
div4.className= "col-md-8 mt-5"

let div5 = document.createElement("div")
div5.className = "col-md-2 mt-5"

let button1 =document.createElement("button");
button1.type= "button";
button1.className = "btn click";
button1.innerText = "Değiştir";
button1.setAttribute = ("id", "degistir");
button1.style = "border: 2px solid;"


let button2 = document.createElement("button");
button2.type= "button";
button2.className = "btn basaDon";
button2.innerText = "Başa Dön";
button2.id = "basaDon";
button2.style = "border: 2px solid"
button2.style.hover = "backgroundColor: blue"



var img_srcs = ["img1.jpg", "img2.jpg", "img3.png"]
var secilenImgID = 0;

let img = document.createElement("img");
img.className = "my-images";
img.src= img_srcs[0];
img.id = "img1";
img.style.height= "500px"

document.body.appendChild(title1);
title1.appendChild(title2);
title2.appendChild(title3)
title3.appendChild(titleText);


document.body.appendChild(text1);
text1.appendChild(text2);
text2.appendChild(text);

document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div2.appendChild(div4);
div2.appendChild(div5);
div3.appendChild(button1);
div4.appendChild(img);
div5.appendChild(button2);


button1.addEventListener("click", () => {    
    if (secilenImgID == img_srcs.length-1) secilenImgID=0 
    else secilenImgID++;
    img.src = img_srcs[secilenImgID];
})

button2.addEventListener("click", () => {
    secilenImgID = 0;
    img.src = img_srcs[secilenImgID];    
})

