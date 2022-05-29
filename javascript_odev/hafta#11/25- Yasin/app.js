const select = document.querySelector("#users");
const tableElement = document.querySelector('#tbody');
const search = document.querySelector('#search');



const getUsers = () =>{
    return axios.get("https://jsonplaceholder.typicode.com/users");     // aslinda;  const users = axios.get
}                                                                       //            return users              yaziyordu. tekrardan yazmadik.

let userTodos = [];

const getTodos = (userId) => {
    const todos = axios.get (
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        userTodos = todos.data
        return todos
}

window.addEventListener("load", async () => {                     
    const {data} = await getUsers ()           
    console.log(data)                                                   // users.then((res)=> console.log(res.data))    array geliyor. biz bu datayi .then ile cozumledik. Bunun promisini async-await ile cozumledik 
 
    data.forEach((user) => {                                              //data icerisindeki kullanicilari gormek icin forEach kullaniyoruz.                        
       const option = document.createElement("option");                  // bunu yaparken de select butonu icin option elementi olusturuyoruz.  
       option.value = user.id;
       option.text = user.name;                                         // text yerıne textContent de yazilabilir.
       select.appendChild(option);                                      // appenChild yerine add de yazilabilir.            
    });
         
    select. addEventListener("change", async (e) => {
            const {data} = await getTodos(e.target.value)               // user id leri cekmis oluyoruz. (option.value = user.id)

        tableElement.innerHTML = "";                                    // user degistiginde bir onceki user'in todo larinin altina eklenmemesi icin bosaltma islemi yaptik. innerHTML ile todo ile eklenen tag lar da kalkmis oluyor.                           

        data.forEach((todo) => {                                        // data'lari forEach ile donerek tr, td ve button elementleri ekledik.
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td_2 = document.createElement("td");
            const button = document.createElement("button");

           
           if ( td_2.innerHTML = todo.completed) {
            td.innerHTML = `<del>${todo.title}</del>` ;  
                }else {
                 td.innerHTML = todo.title;
                };
            
            
            tr.appendChild(td);
            tr.appendChild(td_2)
            td_2.appendChild(button);
            tableElement.appendChild(tr);
        })
    })

} );






