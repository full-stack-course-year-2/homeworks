let selectedFullName = null;

const opt = document.createElement("option");

const fromSelect = document.querySelector(".form-control");
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    let n = 0;
    for (let i = 0; i < data.length; i++) {
      const opt = document.createElement("option");
      opt.textContent = data[i].fullName;

      fromSelect.appendChild(opt);
    }
  });

const tbodyId = document.querySelector("#tbodyId");
const tıkla = document.querySelector(".first");
const sel=document.querySelector("#selected1")

tıkla.addEventListener("change", () => {
 
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
    
        
        if (element.fullName == document.querySelector("#selected1").value) {
        
          
                            
          for (let i = 0; i < element.todos.length; i++) {
            const satır = document.createElement("tr");
            const hücre1 = document.createElement("td");
            const hücre2 = document.createElement("td");

            hücre1.textContent = element.todos[i].todo;
            hücre2.textContent = element.todos[i].isDone;

            tbodyId.appendChild(satır);
            satır.appendChild(hücre1);
            satır.appendChild(hücre2);
          }
        }
      });
    });
});



