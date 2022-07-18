

const fromSelect = document.querySelector(".form-control");
/* fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {}*/                    // buda cekebilirdi        

const getUsers = () => {    return axios.get("https://jsonplaceholder.typicode.com/users")    }

window.addEventListener("load" , async()=>{             ////bence onemli bir ozellik /// asycn await yapısı burada olmadıgında hata verdi
  const {data} = await getUsers()
    //console.log(data) 
  data.forEach(user =>{
  const opt = document.createElement("option");
  opt.textContent=user.name;
  opt.value=user.id  // buradan daha sonra todoları cekmek icin yararlanabilinir.
  fromSelect.appendChild(opt)
})
})
  //window.addEventListener("load" ,(async)  ()=>{             //// yukardaki ile aynı //// burada then ile cozduk //asycn await ile de cozulebiliyor
 // const {data} = (await) axios.get("https://jsonplaceholder.typicode.com/users")
  //.then(res =>console.log(res))})

////////////////// buraya kadar userları cektik/////////////////////////

let userTodos=[];
let str="";

const getTodos = async (userId) =>{
const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
//todos.then(res => console.log(res.data))
  userTodos =todos.data
  return todos;
}


const tbodyId = document.querySelector("#tbodyId");     /// table' sectim

fromSelect.addEventListener("change", async  (e)=>{         // burada option degil select seciliyor degistinde bize getirecek

  const {data} = await getTodos(e.target.value);        /// bu fonksiyonu async await ile calıstırmamız gerekir
  makeList(data)
})

const makeList = (data) =>{
  tbodyId.innerHTML=""
  data.forEach((todo) =>{
    
    const tr = document.createElement("tr")
    const td = document.createElement("td")
    const td_2 = document.createElement("td")
    const button = document.createElement("button")

    td.innerHTML =todo.completed? `<del>${todo.title}</del>` : todo.title
    button.innerHTML = todo.completed ? "yapıldı" : "yapılmadı"
    button.className =  todo.completed? "btn btn-success" : "btn btn-warning"
    button.id=todo.id
    button.addEventListener("click", (e)=>{
      console.log("buton id :"+e.target.id)
      changeStatus(e.target.id)
    })

    tr.appendChild(td);
    tr.appendChild(td_2);
    td_2.appendChild(button);
    tbodyId.appendChild(tr);

  
  })
}


//let str ="";
const searchTodos =(str) =>{
 const temp = userTodos.filter((item) =>item.title.includes(str))
  makeList(temp)
}

const search = document.querySelector("#search");
search.addEventListener("input", (e)=>{

  //str=e.target.value
  searchTodos(e.target.value)
 
})       // input event'i biseyler yazıldıgında anlamı var.ANLIK ALIR



changeStatus = (id) =>{
  console.log("userTodos   :"+userTodos)
  const index=userTodos.findIndex((item) => item.id==id)
  console.log("index  :"+index)
  if((userTodos[index].completed) == true){
    userTodos[index].completed=false;
  }else{
    userTodos[index].completed=true;
  }
  
  makeList(userTodos)

}

